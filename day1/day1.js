const firstList = [3,4,2,1,3,3];
const secondList = [4,3,5,3,9,3];

function Sorter(listOne, listTwo) {
    
    // Sort the arrays from lowest to highest
    listOne.sort((a,b) => a - b);
    listTwo.sort((a,b) => a - b);

    console.log(firstList);
    console.log(secondList);

    // Safeguard against arrays of different lengths, just in case.
    var arrayLength;
    if(listOne.length >= listTwo.length) {
        arrayLength = listOne.length
    } else if (listOne.length < listTwo.length) {
        arrayLength = listTwo.length
    }

    // Add up the difference in each array position between the two lists
    var totalDistance = 0;
    for (let i = 0; i < arrayLength; i++) {
        var diff = listOne[i] - listTwo[i]
        if(diff < 0) {
            totalDistance += (diff * -1)
        } else {
            totalDistance += diff
        }
    }

    console.log(totalDistance)
}

Sorter(firstList, secondList);