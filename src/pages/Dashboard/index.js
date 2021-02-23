import React, { useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  Pressable,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message'

import styles from './styles';
import { colors, ConfigBackHandler } from '../../utils';
import { getTranslate } from '../../helpers'
import { getItems } from '../../redux/actions/item';
import { CardLearning, Header, Space } from '../../components';

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.itemStore.items)

  ConfigBackHandler(navigation)

  useEffect(() => {
    dispatch(getItems())
    // loadTranslate()
  }, [])

  const loadTranslate = async () => {
    try {
      const response = await getTranslate('translate')

    } catch (error) {
      showMessage({
        message: 'Terjadi kesalahan fetch materies',
        type: "default",
        backgroundColor: colors.redDark
      })
    }
  }

  const onMoveCard = (item) => {
    navigation.navigate("Example", { item })
  }

  const onTranslate = async () => {
    try {
      const data = {
        "convert": "romaji",
        "japanese": "おはよう私の愛"
      }

      const response = await getTranslate('translate', data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <Header
        onPress={() => navigation.toggleDrawer()}
        title="Dashboard"
      />

      {/* <Pressable onPress={onTranslate}>
        <Text>translate</Text>
      </Pressable> */}

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

          <CardLearning
            textJapan="Example Game Random"
            onPress={() => navigation.replace('Game')} />
        </View>
      </View>
    </View>
  )
}