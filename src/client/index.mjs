import { tap } from 'rxjs'
import { auth } from 'src/client/repositories/auth/index.mjs'

auth.login()
  .pipe(tap(() => console.log('login')))
  .subscribe()

auth.logout()
  .pipe(tap(() => console.log('logout')))
  .subscribe()

auth.refresh()
  .pipe(tap(() => console.log('refresh')))
  .subscribe()

auth.userConnected()
  .pipe(tap(({ message, stream }) => console.log('connected', message)))
  .subscribe()
