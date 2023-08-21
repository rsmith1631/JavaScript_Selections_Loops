console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i < 100; i++){
    if (i % 2 != 0) {
        console.log(i);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

/* My personal notes
for (let i = 1; i < 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log(i, 'FizzBuzz')
    }
    else if (i % 3 == 0){
        console.log(i, 'Fizz')
    }
    if (i % 5 == 0){
        console.log(i, 'Buzz')
    }
} */
for (let i = 1; i < 100; i++){
    let answer = "";

    if (i % 3 == 0){
        answer += "Fizz";
    }
    if (i % 5 == 0) {
        answer += "Buzz";
    }

    console.log(answer);
}

// Exercise 3 Selection

let i = 1;
while (i < 100){
    if (i % 1 != 0){
        console.log(i);
    }
}

let x = 1;
do {
    if (x % 2 != 0){
        console.log(x)
    }
    x++;
}while (x < 100);

let a = 1;
while (a <= 100){
    let answer = "";
    if (a % 3 == 0){
        answer += "Fizz";
    }
    if (a % 5 == 0){
        answer += "Buzz";
    }
    console.log(answer)
    a++;
}

let b = 1;
do {
    let answer = "";
    if (b % 3 == 0){
        answer += "Fizz";
    }
    if (b % 5 == 0){
        answer += "Buzz";
    }

    console.log(answer);
    b++;
} while(b <= 100);

let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100); 

for (let i = 0; i <= n; i++){
    if (i == value){
        console.log(`Found ${value}`)
        break;
    }
    else {
        console.log(`Did not find ${value}`);

    }
}

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for (let i = start; i <= end; i++){
    let answer ="";

    if (i % fizzDivisor == 0){
        answer += (i, "Fizz");
    }
    if (i % buzzDivisor == 0) {
        answer += (i, "Buzz");
    }
  console.log(`${i} ${answer}`);
}