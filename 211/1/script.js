function check (mas){
	let flag = false
	for (let i of mas){
		if (i % 2 != 0){
			return false
		}else flag = true
	}
	return flag
}

alert(check([2,4,6]))