
let randomNumbers = [1,5,7,6,3,4,8,2,4,12,50,49,67,25,1]

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
}

bubbleSort(randomNumbers);