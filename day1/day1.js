const fs = require('fs');

const text = fs.readFileSync('./day1Input.txt', 'utf8');
const input = text.split('\n');


function Sorter(listOne, listTwo) {
    
    // Sort the arrays from lowest to highest
    listOne.sort((a,b) => a - b);
    listTwo.sort((a,b) => a - b);
    
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
    const [a,b,c,d,e,,,,v,w,x,y,z] = input[i].split('');
    const leftList = [a,b,c,d,e]
    const rightList = [v,w,x,y,z]
    
    answer += Sorter(leftList, rightList);

}
console.log(answer)
return answer