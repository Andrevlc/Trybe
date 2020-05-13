let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrayCopy =[];
let aux= 0;
let pos= 0;
for (let i = 0; i < numbers.length; i++) {
    if(pos < numbers.length-1){
    aux= numbers[i]*numbers[i+1];
    arrayCopy.push(aux);
    }
    else{
        aux= numbers[i]*2;
        arrayCopy.push(aux);
    }
    pos+=1;
}
    
  console.log(numbers);
  console.log(arrayCopy);