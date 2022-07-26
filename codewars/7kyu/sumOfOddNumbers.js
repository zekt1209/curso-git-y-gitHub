/*

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

*/

const rowSumOddNumbers1 = (n) => {
    let arrayOfNumbers = [];
    var result = 0

    for (i = 0; i < n; i++) {
        
        if (arrayOfNumbers.length === 0) {
            let newArray = [];
            newArray.push(1);
            arrayOfNumbers.push(newArray);
            console.log('First Number: ' + arrayOfNumbers[0]);
        } else {
            let newArray = [];
                for (j = 0; j < i+1; j++) {
                //let newArray = [...arrayOfNumbers];
                let primero = n * n - n + 1;
                result = result + (primero + (i*2))
                console.log('Result: ' + result);
                newArray.push(result);
            }
            console.log('newArray' + newArray);
            console.log('arrayOfNumbers' + arrayOfNumbers);
            console.log(typeof(arrayOfNumbers));
            arrayOfNumbers.push(newArray);
        }

    }
};

rowSumOddNumbers1(2);  

// Solution
function rowSumOddNumbers(n) {
    var start = n * n - n + 1;
    var result = 0;  
    
    for(i = 0; i < n; i++)
    {
        result =  result + (start + (i*2));
    }
    console.log(result);
    return result;
}

rowSumOddNumbers(3);  