import grpc from '@grpc/grpc-js'
import loader from '@grpc/proto-loader'

const auth = () => {
  const definition = loader.loadSync('src/identity.proto')

  const Auth = grpc.loadPackageDefinition(definition)['Identity']['Auth']

  return new Auth('localhost:4000', grpc.credentials.createInsecure())
}

export const storage = { auth }
