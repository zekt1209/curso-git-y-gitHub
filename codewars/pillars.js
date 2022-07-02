/*

There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

    number of pillars (≥ 1);
    distance between pillars (10 - 30 meters);
    width of the pillar (10 - 50 centimeters).

Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

*/


const pillars = (numPill, dist, width) => {
    (numPill <= 2) ? allwidth = 0 : allwidth = width * (numPill-2); // Calculando la distancia del ancho de todos los pilares

    let finalDist = ((dist * 100) * (numPill -1) + allwidth); // Calculamos la distancia final convirtiendola a centimetros y restandole el ancho de todos los pilares 
    console.log(finalDist);
    return finalDist;
};

pillars(11,15,30);