// You have an array [ 1, 9, 17, 22 ]. Add the all elements 
// of this array and give output. Do this using for loop & 
// array.reduce() method.

const array=[1,9,17,22];
let sum=0;
for(let i=0;i<array.length;i++){
    sum=sum+array[i];
}
console.log(sum);

const array1=[1,9,17,22];
const result=array1.reduce((a,b)=>a+b,0);
console.log(result);