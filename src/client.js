const grpc = require('@grpc/grpc-js')
const loader = require('@grpc/proto-loader')

const definition = loader.loadSync('src/identity.proto')

const Auth = grpc.loadPackageDefinition(definition)['Identity']['Auth']

const auth = new Auth('localhost:4000', grpc.credentials.createInsecure())

auth.Login('', (_error, _response) => {
  console.log('login response')
})

auth.Refresh('', (_error, _response) => {
  console.log('refresh response')
})

auth.Logout('', (_error, _response) => {
  console.log('logout response')
})

const stream = auth.UserConnected()

stream.on('data', item => {
  console.log(item)
})

stream.on('end', () => {
  console.log('user connected done')
})
