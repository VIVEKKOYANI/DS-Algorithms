// count largest sum of consecutive digits

function findlargest(array, num){
    if(num > array){
        throw new Error("num is not greater than array")
    }else{
        let max=0;
        for(let i = 0; i < array.length - num + 1; i++){
            let tmp = 0;
            for(let j=0; j < num; j++){
                tmp += array[i + j];
            }
            if(tmp > max){
                max = tmp;
            }
        }
        return max
    }
}

const result = findlargest([1,2,3,4,5,6,7,8], 4);
console.log("result",result); // output 26