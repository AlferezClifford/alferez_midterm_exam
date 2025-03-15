// This function return a sum of array 
// reduce is a built in function that loops through the array.
// it starts with sum = 0 (the second argument in reduce).
// and it adds num (current number) to sum.) and returns the total sum 
const sumArray = (numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
} 
console.log(sumArray([1, 2, 3, 4, 5])); 
