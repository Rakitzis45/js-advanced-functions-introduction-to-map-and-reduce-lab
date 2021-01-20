function mapToNegativize(sourceArray){
    return sourceArray.map(e => - + e)
}
function mapToNoChange(sourceArray) {
    return sourceArray.map(e=> e)
}
function mapToDouble(sourceArray){
    return sourceArray.map(e=> e *2)
}
function mapToSquare(sourceArray){
    return sourceArray.map(e => e ** 2)
}




function reduceToTotal(sourceArray, startingPoint=0){
    return sourceArray.reduce(function(total, number){
        return total += number
    }) + startingPoint
}

function reduceToAllTrue(sourceArray){
    for (let i=0; i < sourceArray.length; i++){
        if (!sourceArray[i]) return false 
    }  
    return true
}

function reduceToAnyTrue(sourceArray){
    for(let i = 0; i < sourceArray.length; i++){
        if (sourceArray[i]) return true
    }
    return false
}
