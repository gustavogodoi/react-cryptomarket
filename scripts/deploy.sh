#!/bin/bash
set -x

if [ $TRAVIS_BRANCH = "master" ] && [ $TRAVIS_REPO_SLUG = "gustavogodoi/react-cryptomarket"]
then
    echo "Starting Deploy"
    openssl aes-256-cbc -K $encrypted_40d62000dcf5_key -iv $encrypted_40d62000dcf5_iv
    -in deploy-key.enc -out deploy-key -d
    rm deploy-key.enc
    chmod 600 deploy-key
    mv deploy-key ~/.ssh/id_rsa
    # Initialize a new git repo in _site, and push it to our server.
    cd build
    git init

    git remote add deploy "app_deploy@$IP:/var/www/crypto"
    git config user.name "Travis CI"
    git config user.email "garymeehan+travisCI@outlook.com"

    git add .
    git commit -m "Deploy"
    git push --force deploy master
    echo "Finsihing Deploy"
else
    echo "No Deploy :: Not On Active Master"
fi

