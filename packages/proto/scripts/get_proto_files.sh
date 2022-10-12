#!/bin/bash
MYFOLDER=$(pwd)

# Ethermint
mkdir -p proto
cd /tmp
rm -rf /tmp/gotabit
git clone https://github.com/gotabit/gotabit/
cd gotabit/
echo "clean $MYFOLDER/proto"
rm -rf $MYFOLDER/proto
mkdir -p $MYFOLDER/proto

echo "copy $MYFOLDER/proto"
cp -r ./proto/* $MYFOLDER/proto
cp -r ./third_party/proto/* $MYFOLDER/proto

rm -rf /tmp/gotabit