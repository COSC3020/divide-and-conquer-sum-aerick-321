function sum(x, hi, low,){
    if (low === hi) {
        return x[low];
    }

    var mid1 = Math.floor((hi - low)/3);
    var mid2 = Math.floor(2 *(hi - low)/3);

    var lowSum = sum(x, low, mid1);
    var midSum= sum(x, mid1 + 1, mid2);
    var hiSum = sum (x, mid2 +1, hi);

    return lowSum + midSum + hiSum;
}
function divideAndConquerSum(a) {
    if (a.length === 0) {
        return 0;
    } 
    return sum(a, 0, a.length - 1);
}
