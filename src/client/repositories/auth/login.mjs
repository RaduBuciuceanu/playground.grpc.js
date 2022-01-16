import { on } from 'src/client/repositories/invoke.mjs'
import { storage } from 'src/client/repositories/storage.mjs'

export const login = () => on(storage.auth())
  .invoke('Login')
  .with('')
