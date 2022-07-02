const points = (games) => {
    let points = 0;

    games.forEach(element => {
        if(element[0] > element[2]) {
            points += 3;
        } else if(element[0] < element[2]) {
            points += 0;
        } else if (element[0] === element[2]){
            points += 1;
        }
    });

    console.log(points);
    return points;
};

points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]);

// Usando operador ternario
// function points(games) {
//   return games.reduce((output,current)=>{
//     let x = parseInt(current[0]);
//     let y = parseInt(current[2]);
//     let value= x>y ? 3 : x===y ? 1 : 0;
//     return output+value;
//   },0)
// }