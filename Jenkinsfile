pipeline {
    agent any
    
    // Define NodeJS tool outside the agent block
    tools {
        nodejs 'nodejs'
    }
    
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'build/**/*', fingerprint: true
            }
        }
    }
    
    post {
        success {
            echo 'Build succeeded! Send success notification...'
            echo 'Pipeline OK'
        }
        failure {
            echo 'Build failed! Send failure notification...'
            script {
                def failedStage = currentBuild.rawBuild.getCause(hudson.model.CauseOfInterruption)
                def errorMessage = failedStage?.toString() ?: "Unknown error"
                echo "Error message: ${errorMessage}"
            }
        }
    }
}
