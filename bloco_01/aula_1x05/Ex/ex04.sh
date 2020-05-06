#!/bin/bash

#ex04
arquivo=arqtst.txt
path=$(pwd)/$arquivo
echo "$path"
if [ -e $path ]
then
    echo "O caminho $path está habilitado!"
    if [ -w $path ]
    then
        echo "Você tem permissão para editar: $path"
    else
        echo "Você NÃO foi autorizado a editar: $path"
    fi
else
    echo "nao teste"
fi