//concat:


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3); 

//filter:

const arr = [1, 2, 3, 4, 5];
const filteredArr = arr.filter(item => item % 2 === 0);
console.log(filteredArr); 

//forEach:


const arr = [1, 2, 3];
arr.forEach(item => console.log(item));

//map:


const arr = [1, 2, 3];
const mappedArr = arr.map(item => item * 2);
console.log(mappedArr);

//push:

const arr = [1, 2, 3];
arr.push(4);
console.log(arr); 

//pop:


const arr = [1, 2, 3];
const poppedItem = arr.pop();
console.log(poppedItem); 
console.log(arr); 


const arr = [1, 2, 3];
const shiftedItem = arr.shift();
console.log(shiftedItem); 
console.log(arr);

//unshift:


const arr = [1, 2, 3];
arr.unshift(0);
console.log(arr);

//splice:


const arr = [1, 2, 3];
arr.splice(1, 1, 4);
console.log(arr); 

//slice:


const arr = [1, 2, 3, 4, 5];
const slicedArr = arr.slice(1, 3);
console.log(slicedArr); 

//reduce:


const arr = [1, 2, 3];
const reducedArr = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(reducedArr);