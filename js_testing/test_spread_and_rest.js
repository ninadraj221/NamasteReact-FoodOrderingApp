// Object and Array Destructuring

let obj = {
  name: "Ninad",
  number: 92932,
};
let { name, number } = obj;

const entries = Object.entries(obj);

//Array Destructuring
const [firstEntry] = entries;

//Object Destructuring on the fly when passed as arguements

function test({ name, number }) {}

test(obj);

//Array Destructuring

let arr = [0, 1, 2, 3, 4, 5];

let [arr1, arr2] = arr;

// Rest Operator

let [arr3, ...rest] = arr;

function giveMeNumberOfParameterPassed(...rest2) {
  //Number of Parameters passed are converted to an Array
  //console.log(rest2, rest2.length);
}

giveMeNumberOfParameterPassed(1, 2, 3, 45, 5);

//Spread Operator

//Here I am spreading the array
console.log(...arr);

//spreading the array to form another array (Spreading the rested rest (array) here again)

let finalArr = [...arr, ...rest];
console.log(finalArr);

obj = {
  name: "Ninad",
  number: 2132,
};

let obj2 = {
  surname: "Yadav",
};

//Use of Spread Operator
let finalObj = { ...obj, ...obj2 };

function test2(param) {
  //   console.log(name, number);
  console.log(param);
}

//Spreaded the object to form object and passed it as an arguements
test2({ ...obj });
