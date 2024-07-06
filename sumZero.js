const arrayNumber = [-5,-4,-3,-2,0,2,4,6,8];

// function getSumPairZero(array){
//     for(let number of array){
//         for(let j=1; j < array.length; j++){
//             if(number + array[j] === 0){
//                 return [number, array[j]];
//             }
//         }
//     }
// }

//! optimization
const getSumPairZero = (array) => {
    let left = 0;
    let right = array.length - 1;
    
    while (left < right) {
        sum = array[left] + array[right];
        if(sum === 0){
            return [array[left], array[right]]
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}


const result = getSumPairZero(arrayNumber);
console.log("result", result);