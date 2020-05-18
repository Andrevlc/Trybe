function retornaMaiorValor (vetor){
  let maiorvalor=vetor[0],auxIndice=0;
  for(let i=0;i<vetor.length;i++){
    if(maiorvalor<vetor[i]){
      maiorvalor=vetor[i];
      auxIndice=i;
    }
  }
return auxIndice;
}
let array= [0,5,2,3];
console.log(retornaMaiorValor(array));
