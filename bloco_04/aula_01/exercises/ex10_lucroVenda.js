let custoProduto = 100, valorVenda= 200;
if(custoProduto >=0 && valorVenda>=0){
    console.log("O lucro é de: " +(((valorVenda-custoProduto)*0.80)*1000));
}
else{
    console.log("ERRO: O algum dos valores está abaixo de 0...")
}