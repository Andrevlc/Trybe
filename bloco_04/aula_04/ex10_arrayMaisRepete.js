function numMaisRepete (vetor){
  let cont;0
  let maisRep=0;
  let maisInd=vetor[0]; 
  for (let i=0;i<vetor.length;i+=1){
    for (let j=0;j<vetor.length;j+=1){
      if(vetor[i]==vetor[j]){
        cont+=1;
      }
    }
    if (cont>maisRep){
      maisRep=cont;
      maisInd=vetor[i];
    }
    cont=0;
  }
return maisInd;
}
let vetorT = [2, 3, 2, 5, 8, 2, 3];
console.log (numMaisRepete(vetorT));