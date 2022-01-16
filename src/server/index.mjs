import grpc from '@grpc/grpc-js'
import { setup } from 'src/server/setup.mjs'

const PORT = '0.0.0.0:4000'

const CREDENTIALS = grpc.ServerCredentials.createInsecure()

const server = new grpc.Server()

const setupServer = () => {
  const configure = setup(server)
  configure.authService(server)
  server.start()
}

server.bindAsync(PORT, CREDENTIALS, setupServer)
