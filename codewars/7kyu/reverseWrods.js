/*

Description:

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

const reverseWords = (str) => {
    let newArray = str.split(' '); // Separamos las palabras en elementos individuales en un array
    let arrayInverted = newArray.map(element => element.split('').reverse().join('') ).join(' '); // Separamos por arrays individuales por palabra y separamos por caracteres, ahora invertimos los caracteres de cada array de palabras y lo juntamos para devolver el string, y fuera del map, damos otro join para juntar el string final
    return arrayInverted; // Retornamos el string final
};

reverseWords('Hello World');