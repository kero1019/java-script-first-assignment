// Question 1
let q1 = "123";
console.log(Number(q1) + 7);

// Question 2
let falsyValues = [null, undefined, 0, false, NaN];
let q2 = 0;
falsyValues.includes(q2) ? console.log("Invalid") : console.log("Valid");

// Question 3
let q3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < q3.length; i++) {
    if (q3[i] % 2 === 0) continue;
    console.log(q3[i]);
}

// Question 4
let q4 = [1, 2, 3, 4, 5];
console.log(q4.filter((num) => num % 2 == 0));

// Question 5
let arr1 = [1, 2, 3], arr2 = [4, 5, 6];
let q5 = [...arr1, ...arr2];
console.log(q5);

// Question 6
let q6 = 2;
switch (q6) {
    case 1: console.log("Sunday"); break;
    case 2: console.log("Monday"); break;
    case 3: console.log("Tuesday"); break;
    case 4: console.log("Wednesday"); break;
    case 5: console.log("Thursday"); break;
    case 6: console.log("Friday"); break;
    case 7: console.log("Saturday"); break;
    default: console.log("Invalid day");
}

// Question 7
let q7 = ["a", "ab", "abc"];
let arrayLength = q7.map((str) => str.length);
console.log(arrayLength);

// Question 8
function dividedByThreeAndFive(number) {
    if (number % 3 === 0 && number % 5 === 0) return "Divisible by both";
    else return "not divisible by both"
}
console.log(dividedByThreeAndFive(15));

// Question 9
let squareNumber = (number) => number * number;
console.log(squareNumber(5));

// Question 10
let destructingObject = ({ name, age }) => {
    return `${name} is ${age} years old`;
}
console.log(destructingObject({ name: "Kerolos Fayez", age: 25 }));

// Question 11
let sumOfArray = (...nums) => {
    return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumOfArray(1, 2, 3, 4, 5));

// Question 12
let successMessage = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Success");
    }, 3000)
})

let showSuccessMessage = async () => {
    try {
        let message = await successMessage;
        console.log(message);
    } catch {
        throw new Error("something went wrong");
    } finally {
        console.log("Promise Finished");
    }
}
showSuccessMessage();

// Question 13
let findLargestNumber = (arr) => {
    let largest = arr[0];
    if (arr.length === 0) return "Array is empty";
    else if (arr.length === 1) return arr[0];
    else {
        for (let i = 1; i < arr.length; i++) {
            arr[i] > largest ? largest = arr[i] : largest;
        }
    }
    return largest;
}
let q13 = [1, 3, 7, 2, 4]
console.log(findLargestNumber(q13));

// Question 14
let myObject = {
    name: "Kerolos Fayez",
    age: 25,
    skills: ["JavaScript", "React"]
}
let getObjectKeys = (obj) => {
    return Object.keys(obj);
}
console.log(getObjectKeys(myObject));

// Question 15
let s = "The quick brown fox";
let getWords = (str) => {
    return str.split(" ");
}
console.log(getWords(s));
