export const userConnected = (call, _callback) => {
  call.write({ userName: 'zero' })
  call.write({ userName: 'one' })
  call.write({ userName: 'two' })
  call.write({ userName: 'three' })
  call.write({ userName: 'four' })
  call.write({ userName: 'five' })
  call.end()
}
