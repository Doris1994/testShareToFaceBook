#!/bin/bash
#rm -rf ~/build-hello
rm -rf .meteor/local/cordova-build
rm -rf .meteor/local/build
rm -rf .meteor/local/bundler-cache
rm -rf .meteor/local/plugin-cache
meteor -v run ios-device --mobile-server 192.168.167.111:3030
#meteor build ~/build-hello --server=192.168.2.11:3030