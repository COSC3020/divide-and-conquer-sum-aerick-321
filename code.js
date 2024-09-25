// function sum(x, low, hi){
//  if (low === hi) {
 //       return x[low];
//    }
//    if (low > hi) {
//        return 0;
//    }

//    const mid1 = low + Math.floor((hi - low)/3);
//    const mid2 = low + Math.floor(2 *(hi - low)/3);

 //   const lowSum = sum(x, low, mid1);
 //   const midSum= sum(x, mid1 + 1, mid2);
 //   const hiSum = sum (x, mid2 +1, hi);

 //   return lowSum + midSum + hiSum;
//}
//function divideAndConquerSum(x) {
//    if (x.length === 0) return 0;
//    return sum(x, 0, x.length - 1);
//} 

function sumHelp(arr, low, hi) {
    console.log(`Recursing with low: ${low}, hi: ${hi}`); // Debugging statement
    
    // Base case: if the subarray contains only one element
    if (low === hi) {
        console.log(`Base case hit, returning: ${arr[low]}`);
        return arr[low];
    }

    // Base case: when no valid subarray exists
    if (low > hi) {
        return 0;
    }

    // Divide the array into three parts
    const mid1 = low + Math.floor((hi - low) / 3);
    const mid2 = low + Math.floor(2 * (hi - low) / 3);

    console.log(`Dividing: mid1 = ${mid1}, mid2 = ${mid2}`); // Debugging statement

    // Recursively sum the left, middle, and right parts
    const lowSum = sumHelp(arr, low, mid1);
    const midSum = sumHelp(arr, mid1 + 1, mid2);
    const hiSum = sumHelp(arr, mid2 + 1, hi);

    // Combine the results
    return lowSum + midSum + hiSum;
}

// Main function that calls the helper with the full array
function divideAndConquerSum(arr) {
    if (arr.length === 0) return 0; // Handle empty array case
    return sumHelp(arr, 0, arr.length - 1);
}

// Basic test case
console.log(divideAndConquerSum([1, 5, -1, 4])); // Should return 9
