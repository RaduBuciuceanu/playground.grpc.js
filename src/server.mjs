import grpc from '@grpc/grpc-js'
import loader from '@grpc/proto-loader'

const definition = loader.loadSync('src/identity.proto')

const Auth = grpc.loadPackageDefinition(definition)['Identity']['Auth']

const server = new grpc.Server()

const PORT = '0.0.0.0:4000'

const CREDENTIALS = grpc.ServerCredentials.createInsecure()

const setup = () => {
  setupAuthService()
  server.start()
}

server.bindAsync(PORT, CREDENTIALS, setup)

const setupAuthService = () => server.addService(Auth.service, {
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
