import { on } from 'src/client/repositories/on'
import { storage } from 'src/client/repositories/storage.mjs'

export const userConnected = () => on(storage.auth())
  .discuss('UserConnected')
  .with('')
