function maiorNome (vetor){
  let auxNome=vetor[0];
  for (let i=0;i<vetor.length;i+=1){
    if(auxNome.length<vetor[i].length){
      auxNome=vetor[i];
    }
  }
return auxNome;
}
let vetorTeste= ['andre','fabi','ju','Fernando'];
console.log(maiorNome(vetorTeste));
