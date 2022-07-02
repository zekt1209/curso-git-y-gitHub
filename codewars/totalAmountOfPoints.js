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