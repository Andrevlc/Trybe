#!/bin/bash

#ex06
read -p "Insira um caminho de arquivo ou diretório:" caminho 
if [ -d $caminho ]
    then
    echo "$caminho é um diretório!"
    echo "$(cd $caminho && ls -l)"
    
elif [ -f $caminho ]
    then    
    echo "$caminho é um arquivo!"
    echo "$(ls -l)"
else
    echo "$caminho é um outro tipo de arquivo"
fi
