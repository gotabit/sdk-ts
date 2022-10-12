#!/bin/bash
MYFOLDER=$(pwd)

# Ethermint
mkdir -p proto
cd /tmp
git clone https://github.com/gotabit/node/
cd node/
cp -r ./proto/* $MYFOLDER/proto
cp -r ./third_party/proto/* $MYFOLDER/proto
cd /tmp
rm -rf node
