import { on } from 'src/client/repositories/on'
import { storage } from 'src/client/repositories/storage.mjs'

export const refresh = () => on(storage.auth())
  .invoke('Refresh')
  .with('')
