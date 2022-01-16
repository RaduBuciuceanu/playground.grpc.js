import { on } from 'src/client/repositories/invoke.mjs'
import { storage } from 'src/client/repositories/storage.mjs'

export const logout = () => on(storage.auth())
  .invoke('Logout')
  .with('')
