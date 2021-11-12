function primeNumber() {
    
    for (let number = 1; number < 1000; number++){
        let isPrime = true;


        for (let b = 2; b < number; b++)
        {
            if (number % b == 0)
            {
            isPrime = false

            break
            }
        }

        if (isPrime) {
            console.log(`${number} Asal bir sayıdır.`)
        }

    

    }


    
}

primeNumber()