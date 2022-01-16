import { Subject } from 'rxjs'

export const discuss = service => rpc => ({
  with: message => {
    const subject = new Subject(message)
    const stream = service[rpc]()

    stream.on('data', message => subject.next({ message, stream }))
    stream.on('end', () => !subject.closed && subject.complete())

    return subject.asObservable()
  }
})
