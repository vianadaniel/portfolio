#!/bin/bash

# Config
S3_BUCKET="s3.daniel-aws.info"
BUILD_DIR="build"

npm run build


aws s3 cp $BUILD_DIR s3://$S3_BUCKET/ --recursive

echo "Deploy finished!"
