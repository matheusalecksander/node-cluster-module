import http from 'http'
const processID = process.pid

const server = http.createServer((req, res) => {
  for(var i = 0; i < 1e7; i++){
    res.end(`Handled by pid: ${processID}`)
  }
})

server.listen(3000).once('listening', () => {
  console.log(`Server started in process: ${processID}`)
})
