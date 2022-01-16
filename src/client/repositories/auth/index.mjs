import { login } from 'src/client/repositories/auth/login.mjs'
import { logout } from 'src/client/repositories/auth/logout.mjs'
import { refresh } from 'src/client/repositories/auth/refresh.mjs'
import { userConnected } from 'src/client/repositories/auth/user-connected.mjs'

export const auth = {
  login,
  logout,
  refresh,
  userConnected
}
