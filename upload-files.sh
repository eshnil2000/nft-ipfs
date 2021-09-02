#!/bin/bash
# NOTE : Quote it else use array to avoid problems #
#FILES="/path/to/*"
_mydir="$(pwd)"
FILES="${_mydir}/*.png"

for f in $FILES
do
  echo "Processing $f file..."
  jsipfs add $f
  # take action on each file. $f store current file name
  #cat "$f"
done
