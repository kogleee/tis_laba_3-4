let arr = ["hello", "world", "name"]

let new_arr = arr.map(function(elem){
	let new_elem = ""
	for (let i = elem.length - 1; i >= 0; i--){
		new_elem += elem[i]
	}
	return new_elem
})

alert(new_arr)