export const on = service => ({
  invoke: rpc => ({
    with: message => new Promise((resolve, reject) => {
      service[rpc](message, (error, response) => {
        if (error) reject(error)
        if (response) resolve(response)
      })
    })
  }),
  subscribe: rpc => ({
    with: message => new Promise((resolve, reject) => {
      service[rpc](message, (error, response) => {
        if (error) reject(error)
        if (response) resolve(response)
      })
    })
  })
})
