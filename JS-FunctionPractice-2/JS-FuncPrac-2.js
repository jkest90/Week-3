//1) Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.
//getName({ name: 'Luisa', age: 25 }) should return 'Luisa'

function getName(person) {
    return person.name
}

console.log(getName({ name: 'Luisa', age: 25 }))

//2) Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.
// totalLetters(['javascript', 'is', 'awesome']) should return 19
// totalLetters(['what', 'happened', 'to', 'my', 'function']) should return 24

function totalLetters(str) {
    var array = str.join('').length
    return array
}

console.log(totalLetters(['javascript', 'is', 'awesome'])) 
console.log(totalLetters(['what', 'happened', 'to', 'my', 'function']))

// Write a function called 'keyValue' which takes two arguments and returns a new object with a key of the first argument and the value of the second argument.
// keyValue('city', 'Denver') should return Object {city: "Denver"}

function keyValue(key, value) {
    var obj = {};
    obj[key] = value;
    return obj;
}

console.log(keyValue('city', 'Denver'))
/* preferred way ^ */

// function keyValue(key,value) {
//     this.key = key;
//     this.value = value;
//     return key + ': ' + value;
// }

// console.log(keyValue('city', '"Denver"'))