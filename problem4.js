// 

// challenging Follow above array of objects. So, you have 3 objects as 
// array element. Can you find out the total sum from here? 
// 20 + 15 + 22 = 57 . The output will be 57
// What are you thinking? Yeah! Do it with for loop. I know you can do it. 
// But! Wait !! Wait !!! Do the same task using array.reduce() method. 

const friends=[
    {name:'mina', age:15},
    {name:'mona', age:25},
    {name:'mimma', age:31},
    {name:'mila', age:17}
];
console.log(friends.reduce((p, c) => p + c.age, 0)); 