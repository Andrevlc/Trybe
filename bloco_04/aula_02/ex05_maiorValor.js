let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let anterior= 0;
let aux=0;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>=aux){
        aux=numbers[i];
    }
}
console.log("O maior valor no array é:" +aux);

