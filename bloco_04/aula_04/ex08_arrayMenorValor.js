function retornaMenorValor (vetor){
  let menorValor=vetor[0],auxIndice=0;
  for(let i=0;i<vetor.length;i++){
    if(menorValor>vetor[i]){
      menorValor=vetor[i];
      auxIndice=i;
    }
  }
return auxIndice;
}
let array= [8,5,2,3];
console.log(retornaMenorValor(array));