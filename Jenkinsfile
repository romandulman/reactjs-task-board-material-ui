pipeline {
     agent { label 'nodejs-deployment-dind' }
     stages {
          stage("Checkout") {
               steps {
                git url: 'http://192.168.2.11:10080/devadmin/react-my-task-board.git'
               }

          }
          stage('Sonarqube') {
              steps {
                sh 'sonar-scanner \
                      -Dsonar.projectKey=react-task-board \
                      -Dsonar.sources=. \
                      -Dsonar.host.url=http://192.168.2.11:9000 \
                      -Dsonar.login=b147026426f290f7128d8bf2531ab66ab71fa335'
              }
          }
          stage("Build") {
                steps {
                        sh 'node --version'
                        sh 'npm install'

                }

           }
     }
}
