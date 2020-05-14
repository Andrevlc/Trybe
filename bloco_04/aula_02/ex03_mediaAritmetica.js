let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let anterior= 0;
for(let i=0;i<numbers.length;i+=1){
    anterior+=numbers[i];
}
console.log(anterior/numbers.length);