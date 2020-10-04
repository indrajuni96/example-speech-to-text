import React, { useEffect } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { CardLearning, Header, Space } from '../../components';
import { getItems } from '../../redux/actions/item';
import { ConfigBackHandler } from '../../utils';
import styles from './styles';

export default function ListLearning({ navigation }) {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.itemStore.items)

  ConfigBackHandler(navigation)

  useEffect(() => {
    dispatch(getItems())
  }, [])


  const onMoveCard = (item) => {
    console.log("on move card")
    navigation.navigate("Example", { item })
  }

  return (
    <View style={styles.container}>
      <Header
        onPress={() => navigation.toggleDrawer()}
      />

      <View style={styles.wrapperMain}>
        <Space valSpace={4} />
        <View style={styles.headerMain}>
          <Text style={styles.textHeader}>Learning Japanes</Text>
          <Text style={styles.textCourse}>Course</Text>
        </View>

        <Space valSpace={10} />
        <View style={styles.headerMain}>
          <FlatList
            data={items}
            renderItem={({ item }) => (
              <CardLearning textJapan={item.japanes} onPress={() => onMoveCard(item.japanes)} />
            )}
            keyExtractor={item => item.id.toString()}
          />

          <Space valSpace={10} />

          <Button
            title="Example Game Random"
            onPress={() => navigation.replace('Game')} />
        </View>
      </View>
    </View>
  )
}