function sum(arr){
	let sum = 0;
	for (let i of arr){
		sum += i
	}
	return sum
}

alert(sum([1,2,3]))