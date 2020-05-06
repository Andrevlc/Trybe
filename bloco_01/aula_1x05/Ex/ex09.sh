#!/bin/bash

#ex 09
test09=$1
if [ -f $test09 ]
    then
    echo "O argumento $test09 não é um diretório!"
else [ -d $test09 ]
    files=`ls $test09 | wc -l`
    echo "O $test09 tem $files arquivos."
fi 
