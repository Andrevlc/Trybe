let pecaXadrez = "PEAO";
switch(pecaXadrez.toLowerCase()){
  case 'cavalo':
    console.log("Cavalo movimenta-se em L.");
  break;
  case 'bispo':
    console.log("Bispo movimenta-se em diagonal.");
  break;
  case 'torre':
    console.log("Torre movimenta-se horizontalmente e verticalmente.");
  break;
  case 'rei':
    console.log("Rei movimenta-se 1 casa pra qualquer direção.");
  break;
  case 'rainha':
    console.log("Rainha movimenta-se para qualquer direção");
  break;
  case 'peao':
    console.log("Peão movimenta-se 1 casa para frente (podendo ser 2 no começo do jogo)");
  break;
default:
  console.log("Não corresponde a uma peça válida");
}