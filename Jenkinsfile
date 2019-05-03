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
                      echo "Should run audit here"
                   '''
            }
        }

        stage('Linting') {
            steps {
                sh '''#!/usr/bin/env bash
                      . /var/lib/jenkins/.nvm/nvm.sh
                      nvm use
                      npm run lint
                   '''
            }
        }

        stage('Run tests') {
            steps {
                sh '''#!/usr/bin/env bash
                      . /var/lib/jenkins/.nvm/nvm.sh
                      nvm use
                      npm test -- --no-watch
                   '''
            }
        }

        stage('Run Build') {
            steps {
                sh '''#!/usr/bin/env bash
                      . /var/lib/jenkins/.nvm/nvm.sh
                      nvm use
                      npm run build
                   '''
            }
        }

        stage('Zip release') {
            steps {
                sh '''#!/usr/bin/env bash
                    zip -r problem-solved-web-$GIT_COMMIT $WORKSPACE/build
                   '''
            }
        }


        stage('Upload to repository') {
            steps {
                sh '''#!/usr/bin/env bash
                    /var/lib/jenkins/.local/bin/aws s3 cp ./problem-solved-web-$GIT_COMMIT.zip s3://repository.problemsolvedltd.co.uk/problem-solved-web-$GIT_COMMIT.zip
                    '''
            }
        }

        stage('Deploy Latest version to Test') {
            steps {
                sh '''#!/usr/bin/env bash
                    /var/lib/jenkins/.local/bin/aws s3 sync $WORKSPACE/build s3://test.problemsolvedltd.co.uk/ --delete
                    '''
            }
        }

        stage('QA - Test') {
            steps {
                input "Deploy to Test?"
            }
        }

        stage('Rollback') {
            steps {
                script {
                    LIVE_VERSION = getLiveDeployedVersion
                    ZIP_FILE = getLatestVersionDeployedInTest()
                    createNewLiveFolder()
                    copyTestZipFileToLiveBucket()
                }
            }
        }
    }
}