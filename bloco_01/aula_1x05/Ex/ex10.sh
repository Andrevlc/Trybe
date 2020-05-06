#!/bin/bash

#ex 10
lista10=`ls *.png`
auxlis=`ls $lista10 | wc -l`
echo "$lista10 tamanho da lista 10"
echo "$auxlis tamanho do auxiliar a lista"
if [ $auxlis -gt 0 ]
then
    for arqatual in $lista10
        do
        $(mv $arqatual $(date +%Y-%m-%d)-$arqatual)
    done
else 
    echo "Não existem arquivos .png nessa pasta."
fi
