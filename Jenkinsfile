pipeline {
  agent none
    stage('Build') {
      agent {
        docker { image 'node:16-alpine' }
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
