#!/bin/bash

DIRS="confio cosmos cosmos_proto cosmwasm gogoproto google ibc tendermint gotabit"

for dir in $DIRS; do
  rm -rf "$dir"
  cp -R "./dist/$dir" ./
done

rm -rf helpers
mkdir helpers
cp -R ./dist/helpers.* ./helpers