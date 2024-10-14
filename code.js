

function sumHelp(arr, low, hi) {
 
    if (low === hi) {
        return arr[low];
    }

    if (low > hi) {
        return 0;
    }

    const mid1 = low + Math.floor((hi - low) / 3);
    const mid2 = low + Math.floor(2 * (hi - low) / 3);
 
    const lowSum = sumHelp(arr, low, mid1);
    const midSum = sumHelp(arr, mid1 + 1, mid2);
    const hiSum = sumHelp(arr, mid2 + 1, hi);

    return lowSum + midSum + hiSum;
}

function divideAndConquerSum(arr) {
    if (arr.length === 0) return 0; 
    return sumHelp(arr, 0, arr.length - 1);
}

