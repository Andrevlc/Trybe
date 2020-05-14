let n = 5, aux="";
if(n>1){
  for (let i=0;i<n;i+=1){
    aux= aux +"*";
  }
  for (let j=0;j<n;j+=1){
    console.log(aux);
  }
}
else{
  console.log("Opção inválida");
}

