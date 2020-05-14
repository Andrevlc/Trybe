let n = 5, aux = ""; aux2 ="";
if(n>1){
  for (let i = 1; i <=n; i++) {
    for(let j=0;j<n-i;j++){
      aux=aux+" ";
    }
    aux2= aux2+"*"
    console.log(aux+aux2);
    aux="";
  }
}
else{
  console.log("Número n inválido!")
}
