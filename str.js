//charAt:


const str = 'hello';
console.log(str.charAt(0)); 

//concat:


const str1 = 'hello';
const str2 = 'world';
const str3 = str1.concat(' ', str2);
console.log(str3); 

//includes:


const str = 'hello world';
console.log(str.includes('world')); 

indexOf:

rust
Copy code
const str = 'hello world';
console.log(str.indexOf('world')); 

//lastIndexOf:


const str = 'hello world';
console.log(str.lastIndexOf('o'));

//match:


const str = 'hello world';
const regex = /o/g;
const matches = str.match(regex);
console.log(matches); 

//replace:


const str = 'hello world';
const newStr = str.replace('world', 'there');
console.log(newStr); 


//substr:


const str = 'hello world';
const subStr = str.substr(6, 5);
console.log(subStr);

//substring:


const str = 'hello world';
const subStr = str.substring(6, 11);
console.log(subStr); 

//toLowerCase:


const str = 'HELLO WORLD';
const lowerCaseStr = str.toLowerCase();
console.log(lowerCaseStr); 

//toUpperCase:


const str = 'hello world';
const upperCaseStr = str.toUpperCase();
console.log(upperCaseStr); 

//trim:


const str = '   hello world   ';
const trimmedStr = str.trim();
console.log(trimmedStr); 

//charAt:


const str = 'hello world';
console.log(str.charAt(0)); 

//charCodeAt:




const str = 'hello';
const paddedStr = str.padStart(10, '-');
console.log(paddedStr); 

//padEnd:


const str = 'hello';
const paddedStr = str.padEnd(10, '-');
console.log(paddedStr); 