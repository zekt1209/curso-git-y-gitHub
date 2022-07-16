const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y', 'z'];

const position = (letter) => {
    let letterFinally = letter.toLowerCase();

    for (let i=0; i<alphabet.length; i++){
        if (letterFinally === alphabet[i]){
            console.log(`Position of alphabet: ${i+1}`);  
            return `Position of alphabet: ${i+1}`; 
        }
    }
};

position('a');
position('b');
position('C');