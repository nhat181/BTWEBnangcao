const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

const obj1 = { name: "MeoBeo", age: 20 };
const obj2 = { ...obj1, location: "China" };
console.log(obj2);

function sum(...numbers) {
return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));