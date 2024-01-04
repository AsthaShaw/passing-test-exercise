function getBigger(num1, num2){
    return num1>num2?num1:num2;
}

function getSmallest(arrayOfNumbers){
     
    if(arrayOfNumbers.length===0){
        return null;
    }
    let smallestNumber=arrayOfNumbers[0];

    for(let i=1;i<arrayOfNumbers.length;i++){
        if(smallestNumber>arrayOfNumbers[i]){
            smallestNumber=arrayOfNumbers[i];
        }
    }

    return smallestNumber;



}

function countValue(arrayOfNumbers, value){
    let count=0;
    if(value==undefined){
        return null;
    }

    if(arrayOfNumbers.length===0){
        return count;
    }

    for(let number of arrayOfNumbers){
        if(number===value){
            count++;
        }

    }

    return count;

}



module.exports={
    getBigger, getSmallest, countValue
}