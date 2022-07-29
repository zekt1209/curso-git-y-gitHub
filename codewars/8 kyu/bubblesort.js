
let randomNumbers = [3, 6, 8, 12, 15, 16, 25, 23, 20, 21, 33, 30, 28, 43, 41, 37, 38, 45, 46, 48, 51, 60, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 105, 103, 99, 119, 122, 132, 130, 126, 125, 127]

const bubbleSort = (array) => {
    var aux;
    var length = array.length;
    for (let i=0; i < length; i++) {
        for (let j = 0; j < (length -i -1); j++) {
           if (array[j] > array[j+1]) {
                aux = array[j]
                array[j] = array[j+1]
                array[j+1] = aux;
            }
        }
    }
    console.log(randomNumbers)
}

const countNumbers = (array) => {
    console.log(array.length);
};

bubbleSort(randomNumbers);
countNumbers(randomNumbers);