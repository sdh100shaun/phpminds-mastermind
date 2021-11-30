#!/usr/bin/env bash

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