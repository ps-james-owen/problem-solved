pipeline {
    agent any

    stages {
        stage('Checkout Codebase') {
            steps {
                deleteDir()
                checkout scm
            }
        }

        stage('Install NVM') {
            steps {
                sh '''#!/usr/bin/env bash
                      curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
                      . /var/lib/jenkins/.nvm/nvm.sh || nvm install
                   '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''#!/usr/bin/env bash
                      . /var/lib/jenkins/.nvm/nvm.sh
                      nvm use
                      npm install
                   '''
            }
        }

        stage('NPM Audit fix') {
            steps {
                sh '''#!/usr/bin/env bash
                      . /var/lib/jenkins/.nvm/nvm.sh
                      echo "Should run audit here"
                   '''
            }
        }

        stage('Linting') {
            steps {
                sh '''#!/usr/bin/env bash
                      . /var/lib/jenkins/.nvm/nvm.sh
                      npm run lint
                   '''
            }
        }

        stage('Run tests') {
            steps {
                script {
                    sh
                    'npm test -- --no-watch'
                }
            }
        }

        stage('Zip release') {
            steps {
                script {
                    sh
                    'zip -r problem-solved-web-$GIT_COMMIT $WORKSPACE/build'
                }
            }
        }


        stage('Upload to repository') {
            steps {
                script {

                    sh
                    '''
                    S3_BUCKET=repository.problemsolvedltd.co.uk
                    Create folder in S3 based on $GIT_COMITT
                    Upload zip file to s3 bucket
                    '''
                }
            }
        }

        stage('Deploy Latest version to Test Bucket') {
            steps {
                script {
                    sh
                    '''
                    ZIP_FILE = downloadLatestTestVersionFromRepository()
                    DIRECTORY = unzip file and place in directoru
                    merge contents in to test S3 bucket
                    '''
                }
            }
        }

        stage('QA - Test') {
            steps {
                input "Deploy to Test?"
            }
        }

        stage('Deploy version to Live') {
            steps {
                script {
                    LIVE_VERSION = getLiveDeployedVersion
                    ZIP_FILE = getLatestVersionDeployedInTest()
                    createNewLiveFolder()
                    copyTestZipFileToLiveBucket()
                }
            }
        }

        stage('Rollback live release') {
            steps {
                script {

                }
            }
        }
    }
}