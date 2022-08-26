// You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now 
// return/get all the elements which are divisible by 10 using 
// array.filter() method.


const array=[33,50,79,78,90,101,30];
const result=array.filter(i=>i%10==0);
console.log(result);

// Now do the same task of question 3 . But do this using array.find()
// method. Then compare the output of question 2 & question 3.

const array1=[33,50,79,78,90,101,30];
const result1=array1.find(i=>i%10==0);
console.log(result1);