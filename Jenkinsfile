pipeline {
     agent { docker nodejs-deployment-dind }
     stages {
          stage("Checkout") {
               steps {
                git url: 'https://github.com/romandulman/reactjs-task-board-material-ui.git'
               }
          }
     }
}
