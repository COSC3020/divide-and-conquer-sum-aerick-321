function sum(x, hi, low,){
    if (low === hi) {
        return x[low];
    }
    if (low > hi) {
        return 0;
    }

    var mid1 = low + Math.floor((hi - low)/3);
    var mid2 = low + Math.floor(2 *(hi - low)/3);

    var lowSum = sum(x, low, mid1);
    var midSum= sum(x, mid1 + 1, mid2);
    var hiSum = sum (x, mid2 +1, hi);

    return lowSum + midSum + hiSum;
}
function divideAndConquerSum(x) {
    if (x.length === 0) return 0;
    return sum(x, 0, x.length - 1);
}
