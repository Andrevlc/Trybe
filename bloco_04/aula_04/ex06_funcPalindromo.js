function checkPalin(palavra){
  let vetorAux='';
  for (let i=1;i<=palavra.length;i++){
    vetorAux+=palavra.charAt(palavra.length-i);
  }
  if(palavra === vetorAux){
    return true;
  }
  else{
    return false;
  }
}
console.log(checkPalin("arara"));
