import { on } from 'src/client/repositories/on'
import { storage } from 'src/client/repositories/storage.mjs'

export const login = () => on(storage.auth())
  .invoke('Login')
  .with('')
