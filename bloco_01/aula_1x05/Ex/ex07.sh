#!/bin/bash

#ex 07
test07=$1
if [ -d $test07 ]
    then
    echo "$test07 é um diretório!"
    echo "$(cd $test07 && ls -l)"
    
elif [ -f $test07 ]
    then    
    echo "$test07 é um arquivo!"
    echo "$(ls -l)"
else
    echo "$test07 é um outro tipo de arquivo"
fi