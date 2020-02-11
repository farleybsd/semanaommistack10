import socketio from 'socket.io-client'

const socket = socketio('http://192.168.1.74:3333',{
  autoConnect: false
})

function subscribeToNewDevs(subcribeFunction) {
  socket.on('new-dev', subcribeFunction)
}

function connect(optionsSocket){
  socket.io.opts.query = optionsSocket

  socket.connect()
}

function disconnect() {
  if(socket.connected) {
    socket.disconnect()
  }
}

export { connect, disconnect, subscribeToNewDevs }