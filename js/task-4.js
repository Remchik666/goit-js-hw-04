function changeEven(numbers, value) {
  let newNumbers = [];
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] % 2 === 0) {
            newNumbers.push(numbers[i] + value);
        } else { 
            newNumbers.push(numbers[i]);
        }
    }
return newNumbers;
}


console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); 
console.log(changeEven([17, 24, 68, 31, 42], 100));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
