// https://www.youtube.com/watch?v=XE4VP_8Y0BU


var quickSortMain1 = function(items) {
    function swap(leftIndex, rightIndex){
        var temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
    }

    function partition(left, right) {
        var pivot   = items[Math.floor((right + left) / 2)], //middle element
            i       = left, //left pointer
            j       = right; //right pointer
        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(i, j); //sawpping two elemenfts
                i++;
                j--;
            }
        }
        return i;
    }
    
    function quickSort(left, right) {
        var index;
        if (items.length > 1) {
            index = partition(left, right); //index returned from partition
            if (left < index - 1) { //if more elements on the left side of the pivot
                quickSort(left, index - 1);
            }
            if (index < right) { //if more elements on the right side of the pivot
                quickSort(index, right);
            }
        }
        return items;
    }
    return quickSort(0, items.length - 1)
}

var items = [5,3,7,6,2,9];
var sortedArray = quickSortMain1(items);
console.log(sortedArray); //prints [2,3,5,6,7,9]
/*--------------------------------------------------------------------------------------------------
 Recursive way
 https://www.youtube.com/watch?v=P6XGSKO2RzI
---------------------------------------------------------------------------------------------------- */
function quickSortMain2(array) {
    console.log("array", array);
    var l = array.length;
    if(l <= 1){
        return array;
    }
    const pivot = array[l-1];
    const leftArr = [];
    const rightArr = [];

    for (const el of array.slice(0, l-1)) {
       el < pivot ? leftArr.push(el) : rightArr.push(el);
    }
    
    if(leftArr.length > 0 && rightArr.length > 0){
        return [...quickSortMain2(leftArr), pivot, ...quickSortMain2(rightArr)];
    }
    else if(leftArr.length){
        return [...quickSortMain2(leftArr), pivot];
    }
    else if(rightArr.length > 0){
        return [pivot, ...quickSortMain2(rightArr)];
    }
    
}
var items = [5,3,7,6,2,9];
var sortedArray = quickSortMain2(items);
console.log(sortedArray);