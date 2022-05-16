#!/bin/bash
# This creates React boilerplate
# This script takes two arguments folder & files
# It will create .jsx & .scss files in the src inside the given folder
# Have the file in the root project directory & run 
# ./create.sh folderName fileName

echo "Create $2 jsx & scss files in the $1 folder? Y/N"
read answer
lowerAnswer=$(echo "$answer" | tr '[:upper:]' '[:lower:]')
if [ $lowerAnswer = "n" ] || [ $lowerAnswer = "no" ]
then
  echo "Exiting script"
  exit
fi 
  
if [ ! -d "./src/$1" ] 
then 
  echo "creating $1 folder"
  mkdir ./src/$1
fi

if [ ! -d "./src/$1/$2" ] 
then 
  echo "creating $2 folder"
  mkdir ./src/$1/$2
fi

touch ./src/$1/$2/$2.jsx ./src/$1/$2/$2.scss
lower=$(echo "$2" | sed 's/[[:upper:]]/-&/g;s/^-//' | tr '[:upper:]' '[:lower:]')

cat << EOF > ./src/$1/$2/$2.jsx 
import React from 'react';
import "./$2.scss";
const ${2} = () => {
  return <div className="$lower">$2 works</div>;
};
export default $2;
EOF

cat << EOF > ./src/$1/$2/$2.scss 
.$lower {
}
EOF

echo "Script Completed :)"