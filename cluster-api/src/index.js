import os from 'os'
import cluster from 'cluster'

const runPrimaryProcess = () => {
  const processesCount = os.cpus().length * 2

  console.log(`Primary: ${process.pid} is running`)
  console.log(`Forking server with ${processesCount} processes \n`)

  for(var i = 0; i < processesCount; i++)
    cluster.fork()

  cluster.on('exit', (worker, code, signal) => {
    if(code !== 0 && !worker.exitedAfterDisconnect) {
      console.log(`Worker ${worker.process.pid} died... scheduling another one`)
      cluster.fork()
    }
  })
}

const runWorkerProcess = async () => {
  await import('./server.js')
}

cluster.isPrimary ? runPrimaryProcess() : runWorkerProcess()
