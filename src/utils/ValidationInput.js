export const InputNumber = (data) => {
  let newData = ''
  let numbers = '0123456789'

  for (var i = 0; i < data.length; i++) {
    if (numbers.indexOf(data[i]) > -1) {
      newData = newData + data[i]
    }
  }

  return newData
}