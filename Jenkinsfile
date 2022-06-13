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
                   docker build -t nguyenvancongdev/qr-code:${BUILD_NUMBER} `pwd`
                   docker login --username=$Docker_Hub_USR --password=$Docker_Hub_PSW
                   docker push nguyenvancongdev/qr-code:${BUILD_NUMBER}
                   '''
                }    
            }
        }
         stage('Deploy App to Kubernetes') {
            steps {
                container('kubectl') {
                   
                       sh 'kubectl set image deployment qr-code nginx-1=nguyenvancongdev/qr-code:${BUILD_NUMBER}'
                    
                }   
            }
        }
    }
}