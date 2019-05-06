pipeline {
     agent { label 'nodejs-deployment-dind' }
     stages {
          stage("Checkout") {
               steps {
                git url: 'http://192.168.2.11:10080/devadmin/react-my-task-board.git'
               }

          }
          stage('SonarQube analysis') {
               def sonarqubeScannerHome = tool name: 'LocalSonar'
               sh "${sonarqubeScannerHome}/bin/sonar-scanner -Dsonar.host.url=http://http://10.0.0.2:9000 -Dproject.settings='sonar-project.properties' -Dsonar.projectBaseDir=."
          }
          stage("Build") {
               steps {
                        sh 'node --version'
                        sh 'npm install'
               }
          }
     }
}
