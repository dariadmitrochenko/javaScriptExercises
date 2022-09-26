function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆

    //Write your code here:
    var output = [];
    if (n === 0 || n===1) {
        output = [0];
    }
    else {
        output = [0,1];
        for (var i = 2; i < n; i++){
        output[i] = output[i-2] + output[i-1];

        }
    }
    return output;







    //Return an array of fibonacci numbers starting from 0.

//Do NOT change any of the code below 👇
}

fibonacciGenerator (10);
fibonacciGenerator (0);
fibonacciGenerator (1);
