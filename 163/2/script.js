let number = 11;
let flag = false;
for (let i = 2; i <=9; i++){
	
	if (number % i == 0 && number != i) flag = true
	
	

	
}

flag ? console.log("Непростое") : console.log("Простое")