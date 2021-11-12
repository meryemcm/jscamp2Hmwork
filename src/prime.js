function prime(...numbers) {
    
    for (let i = 0; i < numbers.length ; i++){
        let isPrime = true;

        if (numbers[i] <= 1) {
            console.log(`${numbers[i]} Asal bir sayı degildir.`)
            continue
        }

        for (let b = 2; b < numbers[i]; b++)
        {
            if (numbers[i] % b == 0)
            {
            isPrime = false

            break
            }
        }

        if (isPrime) {
            console.log(`${numbers[i]} Asal bir sayıdır.`)
        }

        else {
            console.log(`${numbers[i]} Asal bir sayı degildir.`)
        }

    

    }


    
}

prime(17,20,25,23)