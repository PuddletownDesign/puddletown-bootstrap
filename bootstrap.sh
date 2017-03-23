#!/usr/bin/env bash

echo "Would you like to set up or deploy the app? [s/d]"
read mode

if [ "$mode" == "s" ]; then
    echo "Enter a name for your app"


elif [[ "$mode" == "d" ]]; then
    echo "deploying"

else
    $0
fi
