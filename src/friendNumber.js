
function friendNumbers(number1,number2) {

    let numberTotal1 = 0
    let numberTotal2 = 0

    for (let i = 0; i < number1; i++) {
        if (number1 % i == 0) {
            numberTotal1 = numberTotal1 + i
        }
    }

    for (let j = 0; j < number2; j++) {
        if (number2 % j == 0) {
            numberTotal2 = numberTotal2 + j
        }
    }

    if (numberTotal1 == number2 && numberTotal2 == number1) {
        console.log(number1 + 've ' + number2 + ' arkadaş sayılardır')
    }
    else {
        console.log(number1 + 've ' + number2 + ' arkadaş sayı değildir.')
    }
    
}

friendNumbers(220,284)