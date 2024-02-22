// 30-2 Function Default Parameter For Not Provided Values


// function number(n = 60, m = 90) {
//     const sum = n + m;
//     console.log('Default values sum = ',sum);
// }
// number();

function number(n , m = 90) {
     const sum = n + m;
    console.log('Default values = ',  sum)
}
number(33);

//Default array 
function array(a = []) {
    
}

//Default object 
function object(o = {}) {
    
//Default string 
}
function sting(s = '') {
    
}