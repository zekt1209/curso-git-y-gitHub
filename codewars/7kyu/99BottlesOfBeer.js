var sing = () => {
    let numberOfBeers = 99;
    let lyrics = [];

    for (i = 0; i<100; i++) {    
        if ( numberOfBeers > 1) {
            //string = `${numberOfBeers} bottles of beer on the wall, ${numberOfBeers} bottles of beer.
            //Take one down and pass it around, ${numberOfBeers-1} bottles of beer on the wall.`;
            lyrics.push(numberOfBeers + ' bottles of beer on the wall, ' + numberOfBeers + ' bottles of beer.');
            lyrics.push('Take one down and pass it around, ' + (numberOfBeers - 1) + ' bottles of beer on the wall.');
            //lyrics.push(string);
            numberOfBeers--;
        } else if (numberOfBeers === 2) {
            lyrics.push(numberOfBeers + ' bottles of beer on the wall, ' + numberOfBeers + ' bottles of beer.');
            lyrics.push('Take one down and pass it around, 1 more bottle of beer on the wall.');
            //string = `${numberOfBeers} bottle of beer on the wall, 1 bottle of beer.
            //Take one down and pass it around, no more bottles of beer on the wall.`;
            //lyrics.push(string);
            numberOfBeers--;
        } 
        else if (numberOfBeers === 1) {
            lyrics.push(numberOfBeers + ' bottles of beer on the wall, ' + numberOfBeers + ' bottles of beer.');
            lyrics.push('Take one down and pass it around, no more bottles of beer on the wall.');
            //string = `${numberOfBeers} bottle of beer on the wall, 1 bottle of beer.
            //Take one down and pass it around, no more bottles of beer on the wall.`;
            //lyrics.push(string);
            numberOfBeers--;
        } else {
            //string = `No more bottles of beer on the wall, no more bottles of beer.
            //Go to the store and buy some more, 99 bottles of beer on the wall.`;
            lyrics.push('No more bottles of beer on the wall, no more bottles of beer');
            lyrics.push('Go to the store and buy some more, 99 bottles of beer on the wall.');
        }
    }
    console.log(lyrics);
    return lyrics;
}

sing();