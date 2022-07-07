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


const rps = (p1, p2) => {
    if (p1 === 'rock' && p2 === 'paper'){
        return 'Player 2 won!';
    } else if (p1 === 'rock' && p2 === 'scissors') {
        return 'Player 1 won!';
    } else if (p1 === 'scissors' && p2 === 'rock') {
        return 'Player 2 won!';
    } else if (p1 === 'scissors' && p2 === 'paper') {
        return 'Player 1 won!';
    }else if (p1 === 'paper' && p2 === 'rock') {
        return 'Player 1 won!';
    }else if (p1 === 'paper' && p2 === 'scissors') {
        return 'Player 2 won!';
    } else {
        return 'Draw!';
    }
};

rps('paper', 'rock');


/*

Alternativo

const rps = (p1, p2) => {
  if (p1 == p2)
    return 'Draw!';
    
   if (p1 == 'rock' && p2 == 'scissors') 
     return 'Player 1 won!'
   else if (p1 == 'scissors' && p2 == 'paper') 
     return 'Player 1 won!'
   else if (p1 == 'paper' && p2 == 'rock') 
     return 'Player 1 won!'
   else
     return 'Player 2 won!';

    };
    
    rps('paper', 'rock');
    */