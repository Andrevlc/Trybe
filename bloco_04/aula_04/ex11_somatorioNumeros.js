function somatorio (numero){
  let auxSoma=0;
  for(let i=numero;i>0;i-=1){
    auxSoma=auxSoma+i;
  }
return auxSoma;
}
let numtst = 5;
console.log(somatorio(numtst));

