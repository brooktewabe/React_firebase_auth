pipeline {
  agent any
  stages {
    stage('hello') {
      steps {
        sh 'npm install'
        sh 'echo "Hello World"'
      }
    }
    stage('config') {
      steps {
        sh 'npm build'
        sh 'echo "Hello World"'
      }
    }
      
  }
}
