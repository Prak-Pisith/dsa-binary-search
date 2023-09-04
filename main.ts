/* 
  Binary Search Algorithm
  Work extremely well with large datasets, must be sorted datasets
 */

const binarySearch = (numbers: number[], target: number): number => {

  let lowIndex = 0;
  let highIndex = numbers.length - 1;

  while (lowIndex <= highIndex) {

    let midIndex = Math.floor((lowIndex + highIndex) / 2);
    let value = numbers[midIndex];
    console.log(`Middle index ${midIndex} is ${value}`);

    if (value < target) lowIndex = midIndex + 1; // scale up low index 
    else if (value > target) highIndex = midIndex - 1; // scale down high index
    else return midIndex; // target found

  }

  return -1; // target not found
}

const setUpArrayHelper = (length: number): number[] => {
  let array: number[] = [];
  for (let i = 0; i < length; i++) {
    array.push(i);
  }
  return array;
}

const sortedNumbers: number[] = setUpArrayHelper(1000000);
const target: number = 75689;

const result: number = binarySearch(sortedNumbers, target);
result === -1
  ? console.log(`Element Not Found`)
  : console.log(`Element found at index: ${result}`);