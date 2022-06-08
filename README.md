## Simple API with Cluster

#### What's the goal of this project?
  - On this project we build an nodeJS API without frameworks, to simulate
  scenarios of full stress in our servers and we had implemented some features
  of nodeJS to handle with these scenarios. Using the module Cluster to fork our
  API process, adding graceful shutdown and fork to multiply our threads in each process.
  We had added to an method that forks our cluster when our api is going down and 
  exiting our existings workers, whit that we have more uptime of our server, preventing our
  server die for completely


#### How to run?
  - First of all, clone this repo and access the directory
  ```
    git clone https://github.com/matheusalecksander/node-cluster-module.git

    cd node-cluster-module
  ```

  - After that install dependencies
  ```
    npm install
  ```

  - To run server with cluster execute
  ```
    npm run cluster
  ```

  - To run simple api server execute
  ```
    npm run simple
  ```

  - To run stress test execute (To it work perfectly you'll need run cluster or simple script first)
  ```
    npm run test
  ```
  > This will run an stress test on your server and return the report of requests on your console
