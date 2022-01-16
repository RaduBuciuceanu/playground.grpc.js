import { on } from 'src/client/repositories/on'
import { storage } from 'src/client/repositories/storage.mjs'

export const logout = () => on(storage.auth())
  .invoke('Logout')
  .with('')
