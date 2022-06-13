pipeline {
    agent { 
        kubernetes {
            yamlFile 'builder.yaml'           
        } 
    }
    stages {
         stage('Docker Build & Push Image') {
             environment {
                 Docker_Hub = credentials('docker-hub')
             }
            steps {
                container('docker') {
                   sh '''
                   docker build -t nguyenvancongdev/skills:${BUILD_NUMBER} `pwd`
                   docker login --username=$Docker_Hub_USR --password=$Docker_Hub_PSW
                   docker push nguyenvancongdev/skills:${BUILD_NUMBER}
                   '''
                }    
            }
        }
         stage('Deploy App to Kubernetes') {
            steps {
                container('kubectl') {
                   
                       sh 'kubectl set image deployment skills nginx-1=nguyenvancongdev/skills:${BUILD_NUMBER}'
                    
                }   
            }
        }
    }
}