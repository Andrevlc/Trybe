let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let anterior= 0;
let aux=0;
for(let i=0;i<numbers.length;i+=1){
    anterior+=numbers[i];
}
aux=(anterior/numbers.length);
if(aux>20){
    console.log("Valor é maior que 20.")
}
else{
    console.log("O valor é menor que 20.")
}
