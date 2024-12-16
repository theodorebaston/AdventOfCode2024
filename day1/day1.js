const firstList = [3,4,2,1,3,3];
const secondList = [4,3,5,3,9,3];

function Sorter(listOne, listTwo) {
    
    listOne.sort((a,b) => a - b);
    listTwo.sort((a,b) => a - b);

    console.log(firstList);
    console.log(secondList);
}

Sorter(firstList, secondList);