let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];

let obj ={}
for (let i = 0; i < arr1.length; i++){
	let key = arr1[i]
	let value = arr2[i]

	obj[key] = value
}

console.log(obj)