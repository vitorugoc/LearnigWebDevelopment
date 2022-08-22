const classificao = function(num1, num2){
    if(typeof(num1) != typeof(num2)){
        return false
    }
    return num1 >= num2
}

console.log(classificao(2, '1'))