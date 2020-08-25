import React, { useEffect } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import IconFeather from 'react-native-vector-icons/dist/Feather';
import { useDispatch, useSelector } from 'react-redux'

import { CardLearning, Space } from '../../components';
import { colors } from '../../utils';
import { getItems } from '../../redux/actions/item'

export default function ListLearning({ navigation }) {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.itemStore)

  useEffect(() => {
    dispatch(getItems())
  }, [])

  // const items = [
  //   {
  //     id: 1,
  //     japanes: 'なにしてるの'
  //   },
  //   {
  //     id: 2,
  //     japanes: 'チキン'
  //   },
  //   {
  //     id: 3,
  //     japanes: 'おはようございます'
  //   },
  // ]

  const onMoveCard = (item) => {
    console.log("on move card")
    navigation.navigate("Example", { item })
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View style={styles.wrapperHeader}>
        <IconFeather name="bar-chart-2" size={30} color={colors.textDefault} style={{ transform: [{ rotate: '90deg' }] }} />
      </View>

      <View style={styles.wrapperMain}>
        <Space valSpace={4} />
        <View style={styles.headerMain}>
          <Text style={styles.textHeader}>Learning Japanes</Text>
          <Text style={styles.textCourse}>Course</Text>
        </View>

        <Space valSpace={10} />
        <View style={styles.headerMain}>
          <FlatList
            data={items.item}
            renderItem={({ item }) => (
              <CardLearning textJapan={item.japanes} onPress={() => onMoveCard(item.japanes)} />
            )}
            keyExtractor={item => item.id.toString()}
          />

          <Space valSpace={10} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  wrapperHeader: {
    height: 65,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textHeader: {
    fontSize: 17,
    fontFamily: 'Roboto-Bold',
    color: colors.textDefault,
  },
  wrapperMain: {
    flex: 1,
    // paddingHorizontal: 15
  },
  headerMain: {
    paddingHorizontal: 15
  },
  textCourse: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: colors.textDefault,
  },
})