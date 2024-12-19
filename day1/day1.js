const fs = require('fs');

const text = fs.readFileSync('./day1InputTest.txt', 'utf8');
const input = text.split('\n');


function Sorter(listOne, listTwo) {
    
    // Sort the arrays from lowest to highest
    listOne.sort(function(a, b){return a - b});
    listTwo.sort(function(a, b){return a - b});
    
    console.log(listOne, listTwo);

    // Add up the difference in each array position between the two lists
    var totalDistance = 0;
    for (let i = 0; i < listOne.length; i++) {
        var diff = listOne[i] - listTwo[i]
        if(diff < 0) {
            totalDistance += (diff * -1)
        } else {
            totalDistance += diff
        }
    }
    
    // console.log(totalDistance)
    return totalDistance
}

let answer = 0;
for (let i = 0; i < input.length; i++) {
    const [l1,l2,l3,l4,l5,,,,r1,r2,r3,r4,r5] = input[i].split('');
    const leftNumber = (l1*10000 + l2*1000 + l3*100 + l4*10 + l5*1);
    const rightNumber = (r1*10000 + r2*1000 + r3*100 + r4*10 + r5*1);

    // console.log(leftNumber, rightNumber)

    const leftList = []
    leftList.push(leftNumber)

    const rightList = []
    rightList.push(rightNumber)
    
    answer += Sorter(leftList, rightList);

}
console.log(answer)
return answer