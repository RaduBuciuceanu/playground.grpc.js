import { on } from 'src/client/repositories/invoke.mjs'
import { storage } from 'src/client/repositories/storage.mjs'

export const userConnected = () => on(storage.auth())
  .subscribe('UserConnected')
  .with('')
