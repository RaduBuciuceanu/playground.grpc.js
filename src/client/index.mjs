import { auth } from 'src/client/repositories/auth/index.mjs'

auth.login().then(() => console.log("login"))

auth.logout().then(() => console.log("logout"))

auth.refresh().then(() => console.log("refresh"))

auth.userConnected().then(() => console.log("connected"))
