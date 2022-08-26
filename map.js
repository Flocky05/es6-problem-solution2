const numbers=[2,3,4,6,7,5,9];
const output=[];
function getDoubles(numbers){
    for(const number of numbers){
        const doubled=doubleIt(number)
        output.push(doubled);
    }
    return output;
}
const doubleIt=number=>number*2;
const makeDouble=numbers.map(doubleIt);
const result=getDoubles(numbers);
console.log(result)
console.log(makeDouble)