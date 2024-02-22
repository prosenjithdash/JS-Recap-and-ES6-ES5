//30-6 Spread Operator, Array Max, Copy Arrays

//max
const max = Math.max(78, 33, 24, 90);
console.log(max)

// Array max 
const arrayMax = [78, 23, 89, 22, 90, 200];
const res = Math.max(arrayMax)
console.log(res)

// Array max use spread Operator
const arrayMax2 = [78, 23, 89, 22, 90, 200];
const res2 = Math.max(...arrayMax)
console.log(res2)


// Array copy Without spread Operator
let M = [555, 67, 22, 43, 78, 500];
let N = M;
N.push(7000);


console.log(M)
console.log(N)


// Array copy use spread Operator

let friends = ['labib', 'kishore', 'bilas'];
console.log(friends)

//After spreed
let UpFriend = [...friends];
UpFriend.push('Sakib');

//After spreed
console.log(UpFriend)





//Advanced way at the same copy and add elements

let friends2 = ['labib', 'kishore', 'bilas'];
console.log(friends)

//After spreed
let UpFriend2 = [...friends2,'Sakib'];
// UpFriend.push('Sakib');

//After spreed
console.log(UpFriend2)