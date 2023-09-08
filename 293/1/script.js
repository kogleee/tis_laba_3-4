function sum(...nums){
    let sum = 0
    for (let num of nums){
        sum += num
    }
    return sum / nums.length 
}

alert(sum(2,6,4))