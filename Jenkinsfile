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
                    cd build
                    zip -r ../problem-solved-web-$GIT_COMMIT ./*
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
                sh '''#!/usr/bin/env bash
                    PREVIOUS_GIT_COMMIT=`git rev-parse HEAD^1`
                    mkdir $WORKSPACE/rollback
                    /var/lib/jenkins/.local/bin/aws s3 cp s3://repository.problemsolvedltd.co.uk/problem-solved-web-$PREVIOUS_GIT_COMMIT.zip $WORKSPACE/problem-solved-web-$PREVIOUS_GIT_COMMIT.zip
                    unzip $WORKSPACE/problem-solved-web-$PREVIOUS_GIT_COMMIT.zip -d $WORKSPACE/rollback
                    cd $WORKSPACE/rollback
                    /var/lib/jenkins/.local/bin/aws s3 cp . s3://test.problemsolvedltd.co.uk/ 
                    /var/lib/jenkins/.local/bin/aws s3 sync . s3://test.problemsolvedltd.co.uk/ --delete 
                    '''
            }
        }
    }
}