function check (num){

	let str = String(num)
	let flag = false

	for (let i of str){
		if (+i % 2 == 0){
			return false
		}else flag = true
	}
	return flag
}

alert(check(1354))