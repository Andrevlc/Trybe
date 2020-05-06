#!/bin/bash

#ex08
for aux in $*
do
    if [ -d $aux ]
        then
        echo "$aux é um diretório!"
        echo "$(cd $aux && ls -l)"
    
    elif [ -f $aux ]
        then    
        echo "$aux é um arquivo!"
        echo "$(ls -l)"
    else
        echo "$aux é um outro tipo de arquivo"
    fi
done