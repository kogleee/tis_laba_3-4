let arr = [1,2,3,-4,-5,30]

let res = arr.some(function(elem, ind){
	return elem * ind > 30
})

alert(res)