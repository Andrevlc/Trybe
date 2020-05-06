#!/bin/bash

mkdir And

var1="Marcelo"
var2="Joao"
var3="Andr"

if ls $var1  
then 
	echo "Diretório $var1 encontrado"
elif ls $var2
then
	echo "Diretório $var2 encontrado"
elif ls $var3
then
	echo "Diretório $var3 encontrado"
else
	echo "Nenhum diretório encontrado"
fi

