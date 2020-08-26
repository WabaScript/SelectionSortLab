// Iterative Selection Sort

function findMinAndRemove(array){
    let min = array[0];
    let minIndex;
    for (let i = 0; i < array.length; i++){
        if (array[i] < min){
            min = array[i];
            minIndex = i;
        }
    }
    array.splice(minIndex, 1);
    return min;
}

function selectionSort(array){
    let newMin;
    let sorted = [];
    while (array.length != 0){
        newMin = findMinAndRemove(array)
        sorted.push(newMin)
    }
    return sorted;
}

array = [90, 12, 69, 800, 43, 23, 9, 10, 9, 8.5]
selectionSort(array)

// Recursive Selection Sort

function minIndex(array, i, j) {
    let k;
    console.log(array)
    console.log("i: ", i)
    console.log("j: ", j)
    if (i === j){
        return i;
    }
    k = minIndex(array, i + 1, j)
    console.log("k: ", k)
    if (array[i] < array[k]) {
        return i;
    } else {
        return k;
    }
}

function recursiveSelectionSort(array, size, index){
    let temp;
    let k;
    if (index === size){
        return;
    }
    k = minIndex(array, index, size - 1)
    if (k != index){
        //swap
        temp = array[k];
        array[k] = array[index];
        array[index] = temp;
    }
    recursiveSelectionSort(array, size, index + 1)
}
recursiveSelectionSort(array, array.length, 0)