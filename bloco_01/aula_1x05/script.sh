#!/bin/bash
echo "Digite o nome a ser exibido:"
read nome

echo "Digita a idade a ser exibida:"
read idade

cidade="Belo Horizonte"
estado="MG"
read -p "Digite o bairro a ser exibido:" bairro


echo "Nome:" $nome
echo "Idade:" $idade
echo "Cidade:" $cidade
printf $estado
echo "Bairro:" $bairro

