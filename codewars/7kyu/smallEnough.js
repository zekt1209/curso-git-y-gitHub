/*

You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

*/


// Con for convencional

const smallEnough = (a, limit) => {
    let rta = true;
    for (i = 0; i < a.length; i++) {
        const element = a[i];
        if (element > limit) {
            rta = false;
        }
    }
    console.log(rta);
    return rta;
};

smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100);


// Con metodos de arrays

const smallEnough2 = (a, limit) => {
    return a.every(element => element <= limit);
};

smallEnough2([78], 100);
