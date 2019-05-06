pipeline {
     agent { label 'nodejs-deployment-dind' }
     stages {
          stage("Checkout") {
               steps {
                git url: 'http://192.168.2.11:10080/devadmin/react-my-task-board.git'
               }

          }
          stage('SonarQube Analysis') {
               steps {
                sh "/home/jenkins/tools/hudson.plugins.sonar.SonarRunnerInstallation/sonarqubescanner/bin/sonar-scanner -Dsonar.host.url=http://10.0.0.2:9000 -Dsonar.projectKey=react-task-board -Dsonar.sources=. -Dsonar.projectBaseDir=/home/jenkins/workspace/react-task-board-app"
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
