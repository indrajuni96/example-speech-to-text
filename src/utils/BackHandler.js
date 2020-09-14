import React from 'react'
import { BackHandler, ToastAndroid, Alert } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

export default function ConfigBackHandler(navigation) {
  useFocusEffect(
    React.useCallback(() => {
      // console.log('SCREEN FOCUSED')
      // console.log(navigation.dangerouslyGetState().routes[0].name)

      let countBack = 0
      const backAction = () => {
        if (navigation.dangerouslyGetState().routes[0].name === "Game") {
          // ToastAndroid.show("Game akan berakhir jika keluar", ToastAndroid.SHORT)
          Alert.alert("", "Game akan berakhir jika keluar!!!", [
            {
              text: "BATAL",
              onPress: () => null,
              style: "cancel"
            },
            {
              text: "KELUAR", onPress: () =>
                setTimeout(() => {
                  navigation.replace('ListLearning')
                }, 1000)
            }
          ])
        } else {
          // console.log(navigation.isFocused())
          if (navigation.isFocused()) {

            if (countBack === 0) {
              countBack++

              ToastAndroid.show("Tekan sekali lagi untuk keluar", ToastAndroid.SHORT)
            } else if (countBack == 1) {
              BackHandler.exitApp()
            }

            setTimeout(() => {
              countBack = 0
            }, 1500)

          }
        }

        return true
      }

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => {
        // console.log('SCREEN UNFOCUSED')
        backHandler.remove()
      }
    }, []))
}