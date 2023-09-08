let arr = [1,2,3]

let res = arr.every(function(elem){
	if (elem > 0) return true
	else return false
})

alert(res)