export const optionsDrawer = ({ navigation }) => {
  // console.log('OPTION DRAWER')
  // console.log(navigation.dangerouslyGetState().routes[0].state);

  let isSwipeEnable = true
  const isGame = navigation.dangerouslyGetState().routes.[0].state !== undefined ? navigation.dangerouslyGetState().routes[0].state.routes[0].name : null

  navigation.dangerouslyGetState().routes.[0].state !== undefined
    && navigation.dangerouslyGetState().routes.[0].state.index > 0 || isGame === "Game"
    ? isSwipeEnable = false
    : isSwipeEnable = true

  return {
    swipeEnabled: isSwipeEnable
  }
}