let arr = [1,2,3,-4,-5]

let res = arr.every(function(elem, ind){
	if (elem * ind < 30) return true
	else return false
})

alert(res)