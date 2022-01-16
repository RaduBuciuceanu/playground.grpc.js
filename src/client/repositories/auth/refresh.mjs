import { on } from 'src/client/repositories/invoke.mjs'
import { storage } from 'src/client/repositories/storage.mjs'

export const refresh = () => on(storage.auth())
  .invoke('Refresh')
  .with('')
