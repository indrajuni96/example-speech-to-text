export const optionsDrawer = ({ navigation }) => {
  // console.log(navigation.dangerouslyGetState().routes.[0].state);

  let isSwipeEnable = true
  // if (navigation.dangerouslyGetState().routes.[0].state !== undefined) {
  //   if (navigation.dangerouslyGetState().routes.[0].state.index > 0) isSwipeEnable = false
  //   else isSwipeEnable = true
  // }

  navigation.dangerouslyGetState().routes.[0].state !== undefined
    && navigation.dangerouslyGetState().routes.[0].state.index > 0
    ? isSwipeEnable = false
    : isSwipeEnable = true

  return {
    swipeEnabled: isSwipeEnable
  }
}