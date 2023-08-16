pipeline {
    agent any

    environment {
        NODE_VERSIONS = ['14.x', '16.x', '18.x']
    }

    stages {
        stage('Checkout') {
            steps {
                deleteDir() // Clean workspace
                checkout scm
            }
        }

        stage('Build and Test') {
            matrix {
                axes {
                    axis {
                        name 'NODE_VERSION'
                        values "${NODE_VERSIONS.join(',')}"
                    }
                }
                stages {
                    stage('Setup Node') {
                        steps {
                            script {
                                def nodeVersion = env.NODE_VERSION
                                echo "Using Node.js version: $nodeVersion"
                                // Add logic here to set up the desired Node.js version
                            }
                        }
                    }
                    stage('Install Dependencies') {
                        steps {
                            sh 'npm ci'
                        }
                    }
                    stage('Build') {
                        steps {
                            sh 'npm run build --if-present'
                        }
                    }
                    stage('Test') {
                        steps {
                            sh 'npm test'
                        }
                    }
                }
            }
        }
    }
}
