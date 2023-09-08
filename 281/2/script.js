let arr = [1,2,3,-4,-5]

let res = arr.filter(function(elem){
	if (elem >= 0) return false
	else return true
})

alert(res)