const friends=['mehedi','emon','siam','tipu','krishno','robiul'];
const firstLetters=friends.map(friends=>friends[0]);
// console.log(firstLetters);


const nameLength=friends.map(friends=>friends.length);
// console.log(nameLength)

const product=[
    {id:1, name:'laptop' , price:45000},
    {id:2, name:'Mobile' , price:85000},
    {id:1, name:'watch' , price:15000},
    {id:1, name:'shoes' , price:5000},
    {id:1, name:'shart' , price:4500}
];
const items=product.map(product=>product.price);
var sum=0;
for(const item of items){
    var sum=sum+item;
}
console.log(sum);