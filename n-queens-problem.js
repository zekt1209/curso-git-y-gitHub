function solveNQueens(n)
{
    var res = [];

    for (var i=0; i < n; i++){
        res[i] = '';
        for (var j = 0; j < n; j++) {
            console.log(i,'h');
            res[i] += (n === j ? 'Q' : '.');
        }
        console.log('\n')
    }
    return res;
};

solveNQueens(8);

const matriz = () => {
    var cuadro = [];

    for (i = 0; i < 8; i++) {
        for (j = 0; j<8; j++) {
            // console.log('+ ');
            // console.log('\n');
            cuadro[i] = cuadro.push('+');
        }
        // console.log('\n');
    }
    console.log(cuadro);
}

matriz();

// console.log(cuadro);
