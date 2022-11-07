const numbersList = [];

function sum(a,b){
    return a+b
}

function substract(a,b){
    return a-b
}

function father(a,b,callback){//callback llama a un método ya existse que cumple con la cantidad y tipo de parámetros
    numbersList.push(callback(a,b))
}

father(4,2,sum)
father(4,2,substract)
console.log(numbersList)