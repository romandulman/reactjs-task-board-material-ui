pipeline {
     agent { label 'nodejs-deployment-dind' }
     stages {
          stage("Checkout") {
               steps {
                git url: 'http://192.168.2.11:10080/devadmin/react-my-task-board.git'
               }

          }
          stage('Sonarqube') {
              environment {
                  scannerHome = tool 'SonarQubeScanner'
              }
              steps {
                  withSonarQubeEnv('sonarqube') {
                      sh "${scannerHome}/bin/sonar-scanner"
                  }
                  timeout(time: 10, unit: 'MINUTES') {
                      waitForQualityGate abortPipeline: true
                  }
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
