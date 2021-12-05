#!/usr/bin/env bash

# Building Docker images
# Navigate to the build/ directory
# run ./build.sh
# Navigate to the build/docker/server directory and run:
# docker buildx build --no-cache --memory=1g --memory-swap=1g --platform linux/amd64 -t phpminds/mastermind-server:0.4 .
# push by running: docker push phpminds/mastermind-server:0.4

# Navigate to the build/docker/web directory and run:
# docker buildx build --no-cache --memory=1g --memory-swap=1g --platform linux/amd64 -t phpminds/mastermind-web:0.2 .
# push by running: docker push phpminds/mastermind-web:0.2

cd ..
rm -rf vendor/

composer install --prefer-dist --optimize-autoloader --no-dev
npm install
npm run build

zip -r mastermind-web.zip public
zip -r mastermind-server.zip vendor src composer.json composer.lock

cd -
mkdir -p docker/web/assets
mkdir -p docker/server/assets

mv ../mastermind-web.zip docker/web/assets/.
mv ../mastermind-server.zip docker/server/assets/.