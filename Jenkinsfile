pipeline {
  agent none
  stages{
    stage('Docker') {
      agent {
        docker { image 'node:16-alpine' }
      }
    }
    stage('build') {
      steps {
        sh 'npm install'
      }
    }
    stage('run') {
      steps {
        sh 'npm test'
      }
    }
  }
}

