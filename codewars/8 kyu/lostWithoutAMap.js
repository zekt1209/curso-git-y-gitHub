/*

Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]


*/

const maps = (x) => {
    let doubledArray = x.map(element => {return element * 2});
    return doubledArray;
};

maps([1, 2, 3]);