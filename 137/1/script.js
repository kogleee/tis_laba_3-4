let arr = [1,2,3,]
let sum = 0;

if (arr.length == 3){
	for (let i = 0; i < 3; i++){
		sum += arr[i]
	}

	console.log(sum)
} else console.log("больше или меньше трёх элементов")
