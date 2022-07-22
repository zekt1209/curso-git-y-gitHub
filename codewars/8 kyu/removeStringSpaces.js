/*

Simple, remove the spaces from the string, then return the resultant string.

*/

const noSpace = (x) => {
    const stringWnoSpaces = x.split(' ').join('');
    console.log(stringWnoSpaces);
    return stringWnoSpaces;
};

noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd");

