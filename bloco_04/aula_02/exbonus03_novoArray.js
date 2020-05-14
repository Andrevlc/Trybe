let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrayCopy =[],aux= 0;
for (let i = 0; i < numbers.length; i++) {
    if(i < numbers.length-1){
    aux= numbers[i]*numbers[i+1];
    arrayCopy.push(aux);
    }
    else{
        aux= numbers[i]*2;
        arrayCopy.push(aux);
    }
}
  console.log(numbers);
  console.log(arrayCopy);