import React, { useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
import { ConfigBackHandler } from '../../utils';
import { getItems } from '../../redux/actions/item';
import { CardLearning, Header, Space } from '../../components';

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.itemStore.items)

  ConfigBackHandler(navigation)

  useEffect(() => {
    dispatch(getItems())
  }, [])

  const onMoveCard = (item) => {
    navigation.navigate("Example", { item })
  }

  return (
    <View style={styles.container}>
      <Header
        onPress={() => navigation.toggleDrawer()}
        title="Dashboard"
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

          <CardLearning
            textJapan="Example Game Random"
            onPress={() => navigation.replace('Game')} />
        </View>
      </View>
    </View>
  )
}