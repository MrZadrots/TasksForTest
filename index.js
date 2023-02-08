///task1
//Выполнял 12 минут
function checkCities(cities){
    //Двадцать минут, пытался сделать все в одной строке не получилось 
    result = "";
    if(!Array.isArray(cities)){
        return "Введен не массив"
    }
    for(let i=0;i<cities.length;i++){
        if(typeof cities[i] !== 'string')
            return "В массиве введена не строка!"
    }
    for(let i=0;i<cities.length-1;i++){
        result+=cities[i]+', '
    }
    result+=cities[cities.length-1] + '.'
    return result;
}
let cities = ["Москва", "Санкт-Петербург", "Воронеж", "Нью-Йорк"];
let cities2 = ["Москва", 1, "Воронеж", "Нью-Йорк"];

console.log(checkCities(cities))
console.log(checkCities(cities2))

//task2
//Выполнял 36 минут
function roundNumber(number){
    if(typeof number !== 'number' && !isFinite(number)){
        return "Введено не число!"
    }
    let decimal = number % 5
    if (decimal === 0 ){
        return number;
    }
    if (decimal >=2.5){
        return (number-decimal+5)
    }
    else{
        return number-decimal
    }

}
console.log(roundNumber(27))
console.log(roundNumber(27.8))
console.log(roundNumber(41.7))

//task3
//Выполнял 10 минут
function createString(n){
    if(!Number.isInteger(n)){
        return "Введено нецелое число!"
    }
    let numberToString = String(n);
    let lastNumber = Number(numberToString[numberToString.length-1])
    switch(lastNumber){
        case 1:
            return numberToString + ' компьютер';
        case 2:
            return numberToString + ' компьютера';
        case 3:
            return numberToString + ' компьютера';
        case 4:
            return numberToString + ' компьютера';
        default:
            return numberToString + ' компьютеров';
    }

}
console.log(createString(2.2));
console.log(createString(25));
console.log(createString(41));
console.log(createString(4));
console.log(createString(1048));
console.log(createString(1010));
console.log(createString(0));

//task4
//Выполнял 6 минут
function simpleNumber(n){
    let massiveNumbers = [];
    for (let i=0;i<n+1;i++){
        massiveNumbers[i]=i;
    }
    for(let p =2;p<n+1;p++){
        if(massiveNumbers[p]!=0){
            {
                for(let j = p*p;j<n+1;j+=p){
                    massiveNumbers[j]=0
                }
            }
        }
    }

    return massiveNumbers[massiveNumbers.length-1]==n? true:false;
}

//task5
//Выполнял 16 минут
function task5 (massiveNumbers1, massiveNumbers2){
    let res1 = new Map();
    let res2 = new Map();
    for(let i=0;i<massiveNumbers1.length;i++){
        tmp = massiveNumbers1[i]
        for(var [key,value] of res1){
            if(key == massiveNumbers1[i]){
               tmp = key
            }
        }
        let valueTmp = res1.get(tmp)
        if(typeof(valueTmp)==='number'){
            res1.set(tmp,valueTmp+1)
        }
        else{
            res1.set(tmp,1)
        }
        
    }

    for(let i=0;i<massiveNumbers2.length;i++){
        tmp = massiveNumbers2[i]
        for(var [key,value] of res1){
            if(key == massiveNumbers2[i]){
               tmp = key
            }
        }
        let valueTmp = res2.get(tmp)
        if(typeof(valueTmp)==='number'){
            res2.set(tmp,valueTmp+1)
        }
        else{
            res2.set(tmp,1)
        }
    }
    console.log(res1)
    console.log(res2)
    let result = []
    for(var[key,value] of res1){
        if (value>1){
            for(var [key2,value2] of res2){
                if(value2>1 && key==key2){
                    result.push(key)
                }
            }
        }
    }
    return result
}

let res1 = task5([7, 17, 1, 1, 9, 17, 56, 56, 23],[56, 17, 17, 1, 23, 34, 23, 1, 8, 1]);

console.log(res1)


//task6
//Выполнял 30 минут
function multTable(n){
    if(!Number.isInteger(n)){
        console.log( "Введено нецелое число!")
        return 
    }
    let resultMatrix = [];
    let header = []
    header.push('');
    for(let i=1;i<n+1;i++){
        header.push(i);
    }
    resultMatrix.push(header);
    let stringM = [];
    for(let i=1;i<n+1;i++){
        stringM.push(i);
        for(let j =1;j<n+1;j++){
            if(j===i){
                stringM.push(i*j);
               
            }
            else
                stringM.push(header[i]*j)

        }
        resultMatrix.push(stringM);
        stringM=[];
    }

    console.table(resultMatrix);
}
multTable(5)
