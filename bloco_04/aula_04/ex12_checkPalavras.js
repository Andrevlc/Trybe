function checarPalavras (word, ending){
  let ret = false;cont=word.length;
  for (let i=ending.length;i>0;i-=1){
    if(ending.charAt(i)===word.charAt(cont)){
    ret=true;
    }
    else{
      ret=false;
      break;
    }
    cont-=1;
  }
return ret;
}
let p1 = "trybe";
let p2 = "be";
console.log("Teste 1 - (tem que dar true) : "+checarPalavras(p1,p2));
let p3 = "joaferando";
let p4 = "fernan";
console.log("Teste 2 - (tem que dar false): "+checarPalavras(p3,p4));
