let arr = [1,2,3,-4,2]
let sum = 0;
for (let elem of arr){
	if (elem <0) break;
	sum += elem
}
console.log(sum)