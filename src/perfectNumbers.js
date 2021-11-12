function perfectNumbers() {
    let number = 1
    for (let number = 1; number < 1000; number++) {
        let sumTotal = 0

        for (let i = 0; i < number; i++) {
            if (number % i == 0)
                sumTotal += i

        }
        if (sumTotal == number)
            console.log(number)

    }
}

perfectNumbers()










