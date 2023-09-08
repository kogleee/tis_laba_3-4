function da(num){
	let count = 0;
	if (num < 10)  return count

	while (num > 10){
		num = num / 2;
		count += 1
	}
	return count
}

alert(da(21))