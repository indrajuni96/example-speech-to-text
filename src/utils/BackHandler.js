import React from 'react'
import { BackHandler, ToastAndroid } from 'react-native'

export default function ConfigBackHandler(navigation) {
  let countBack = 0
  const backAction = () => {
    console.log(navigation.isFocused())
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
    return true
  }

  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
  );

  return () => backHandler.remove();
}