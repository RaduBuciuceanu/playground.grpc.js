import { login } from 'src/server/controllers/auth/login.mjs'
import { logout } from 'src/server/controllers/auth/logout.mjs'
import { refresh } from 'src/server/controllers/auth/refresh.mjs'
import { userConnected } from 'src/server/controllers/auth/user-connected.mjs'

export const auth = {
  login,
  logout,
  refresh,
  userConnected
}
