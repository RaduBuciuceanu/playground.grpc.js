import { make } from 'src/server/make'
import { auth } from 'src/server/controllers/auth/index.mjs'

const authService = server => server.addService(make.auth().service, {
  Login: auth.login,
  Refresh: auth.refresh,
  Logout: auth.logout,
  UserConnected: auth.userConnected
})

export const setup = server => ({
  authService: () => authService(server)
})
