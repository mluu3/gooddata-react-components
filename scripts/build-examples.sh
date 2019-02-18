#!/usr/bin/env bash

echo "$ yarn build"
yarn build


echo "$ cd examples"
cd examples

PARAMS=$@
if [ ! -z "$1" ]; then # if first argument is not empty
    PARAMS="--env.backend=$1 ${@:2}"
fi

echo "$ NODE_ENV=production webpack $PARAMS"
NODE_ENV=production webpack $PARAMS
DOMAIN_ADMIN_USERNAME=minh.luu@gooddata.com
DOMAIN_ADMIN_PASSWORD=Minh2708
PROJECT_ID_TO_ASSIGN=hfkrp64jjfyafjkpdfea0x1v4shl3wk0
DOMAIN=https://staging3.intgdc.com/
