const stringToNumber = function(str){
    str = str.split(' ').join('');; // Primero le quitamos los espacios a la cadena recibida
    strparsed = parseInt(str); // Convertimos la cadena ya sin espacios a numeros
    console.log(strparsed + ' ' + typeof strparsed); // Comprobamos el tipo de dato
    return strparsed; // Retornamos el numero
}

  stringToNumber('1 23 4');