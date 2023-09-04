/*
  Binary Search Algorithm
 */
var binarySearch = function (numbers, target) {
    var lowIndex = 0;
    var highIndex = numbers.length - 1;
    while (lowIndex <= highIndex) {
        var midIndex = Math.floor((lowIndex + highIndex) / 2);
        var value = numbers[midIndex];
        console.log("Middle index ".concat(midIndex, " is ").concat(value));
        if (value < target)
            lowIndex = midIndex + 1; // scale up low index 
        else if (value > target)
            highIndex = midIndex - 1; // scale down high index
        else
            return midIndex; // target found
    }
    return -1; // target not found
};
var setUpArrayHelper = function (length) {
    var array = [];
    for (var i = 0; i < length; i++) {
        array.push(i);
    }
    return array;
};
var sortedNumbers = setUpArrayHelper(1000000);
var target = 75689;
var result = binarySearch(sortedNumbers, target);
result === -1
    ? console.log("Element Not Found")
    : console.log("Element found at index: ".concat(result));
