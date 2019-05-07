pipeline {
     agent { label 'nodejs-deployment-dind' }
     stages {
          stage("Checkout") {
               steps {
                git url: 'https://github.com/romandulman/reactjs-task-board-material-ui.git'
               }

          }
          stage('SonarQube analysis') {
               steps {
                def sonarqubeScannerHome = tool name: 'LocalSonar'
                sh "${sonarqubeScannerHome}/bin/sonar-scanner -Dsonar.host.url=http://http://10.0.0.2:9000 -Dproject.settings='sonar-project.properties' -Dsonar.projectBaseDir=."
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
