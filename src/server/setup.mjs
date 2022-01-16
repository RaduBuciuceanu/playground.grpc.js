import { make } from 'src/server/make.mjs'

const authService = server => server.addService(make.auth().service, {
  Login: (_call, callback) => {
    console.log('login')
    callback(null, '')
  },
  Refresh: (_call, callback) => {
    console.log('refresh')
    callback(null, '')
  },
  Logout: (_call, callback) => {
    console.log('logout')
    callback(null, '')
  },
  UserConnected: (call, _callback) => {
    call.write({ userName: 'zero' })
    call.write({ userName: 'one' })
    call.write({ userName: 'two' })
    call.write({ userName: 'three' })
    call.write({ userName: 'four' })
    call.write({ userName: 'five' })
    call.end()
  }
})

export const setup = server => ({
  authService: () => authService(server)
})
