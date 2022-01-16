import grpc from '@grpc/grpc-js'
import loader from '@grpc/proto-loader'

export const auth = () => {
  const definition = loader.loadSync('src/identity.proto')

  return grpc.loadPackageDefinition(definition)['Identity']['Auth']
}

export const make = { auth }
