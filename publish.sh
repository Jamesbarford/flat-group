#!/usr/bin/env bash

if [ ! -d dist ]; then
  mkdir dist
fi
tsc;
cp ./src/package.json ./dist/package.json;
cp ./src/package-lock.json ./dist/package-lock.json;
cp README.md ./dist && cd ./dist;
npm publish;
rm README.md;
echo "published to npm"
