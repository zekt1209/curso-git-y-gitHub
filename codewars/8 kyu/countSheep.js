const countSheep = (num) => {
    //let string = [];
    let string = '';

    for (i = 0; i < num; i++) {
        //string.push(`${i+1} sheep...`)
        string += `${i+1} sheep...`;
    }

    console.log(string);
    return string;
};

countSheep(10);
