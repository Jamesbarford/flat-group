#!/usr/bin/env bash

cp README.md ./src && cd ./src;
npm publish;
rm README.md;
echo "published to npm"
