//30-3 Template String, Multiple Line String, Dynamic String

const fn = 'Prosenjith';
const ln = 'Dash';

console.log(fn + ln);

console.log(fn + '' + ln);

//not to easy
console.log(fn + ' ' + ln);

const fulln = 'Prosenjith Dash Pappu'
console.log(fulln)


const a = 80;
const b = 5;

const result = a + 'and' + b + 'sum of  ' + (a + b);
console.log(result)

const result1 = a + '' + 'and' + b + '' + 'sum of  ' + '' + (a + b);
console.log(result1)

const result2 = a + ' '+ 'and' + ' ' + b + ' ' + 'sum of  ' + ' ' + (a + b);
console.log(result2)

// For ES6
//Easy process with ``


//Dynamic String
const result3 = ` ${a} and ${a} sum of ${a+b} `;

console.log(result3)

const sub = {
    math: 89,
    eng: 78,
    ict: 90
}

const objResult = `Math ${sub.math}, English ${sub.eng} and Ict ${sub.ict} sum of ${sub.math + sub.eng + sub.ict} `;

console.log('Object Result = ', objResult)


//Multiple Line String
// I want to make multiple line but see not proper result but
const hobby = 'Bike' +
    'Tour';
console.log(hobby);

// I want to make multiple line and yes it is did
const visit = 
    
    `
    India 
    Canada
    America
    Dubai

    `;
console.log(visit);