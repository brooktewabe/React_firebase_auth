pipeline {

  stages{

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

