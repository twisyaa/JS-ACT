for (let t = 1; t <= 100; t++) {
    if (t % 3 == 0 && t % 5 == 0) {
        console.log("FizzBuzz");
    } else if (t % 3 == 0) {
        console.log("Fizz");  
    } else if (t % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(t);
    }
}