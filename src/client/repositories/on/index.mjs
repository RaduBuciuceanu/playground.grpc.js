import { invoke } from 'src/client/repositories/on/invoke.mjs'
import { discuss } from 'src/client/repositories/on/discuss.mjs'

export const on = service => ({
  invoke: invoke(service),
  discuss: discuss(service)
})
