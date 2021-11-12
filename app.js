// challenge 8
function maximumProduct(matrix,n1,n2) {
    var product=0, i=0, j=0, value=0;
    for (i=0;i<n1;i++) {
        for (j=0;j<n2;j++) {
            if (i-3 >=0) {
                value = matrix[i][j]*matrix[i-1][j]*matrix[i-2][j]*matrix[i-3][j];
                if (product < value){
                    product = value;
                }
            }
            if (j-3 >=0) {
                value = matrix[i][j]*matrix[i][j-1]*matrix[i][j-2]*matrix[i][j-3];
                if (product < value ) {
                    product = value;
                }
            }
        }
    }
    return product;
}
let matrix = [[08,02,22,97,38,15,00,40,00,75],[49,49,99,40,17,81,18,57,60,87],[81,49,31,7,55,79,14,29,93,71],[52,70,95,23,04,60,11,42,69,24],[22,31,16,71,51,67,63,89,41,92],[24,47,32,60,99,03,45,02,44,75],[32,98,81,28,64,23,67,10,26,38],[67,26,20,68,02,62,12,20,95,63],[24,55,58,05,66,73,99,26,97,17],[21,36,23,09,75,00,76,44,20,45]];
console.log("challege 8\n"+maximumProduct(matrix,10,10));

//challenge 8.1
function maximumProduct1 (matrix,n1,n2){
    var product=0, result=0, i=0, j=0;
    for (i=0;i<n1;i++) {
        for (j=0;j<n2;j++) {
            if (i-3 >=0 ){
                result = matrix[i][j]*matrix[i-1][j]*matrix[i-2][j]*matrix[i-3][j];
                if (product < result) {
                    product = result;
                }
            }
            if (j-3 >=0) {
                result = matrix[i][j]*matrix[i][j-1]*matrix[i][j-2]*matrix[i][j-3];
                if (product < result ) {
                    product = result;
                }
            }
            if (i-3 >=0 && j-3 >=0) {
                result = matrix[i][j]*matrix[i-1][j-1]*matrix[i-2][j-2]*matrix[i-3][j-3];
                if (product < result) {
                    product = result;
                }
            }
            if (i-3 >=0 && j-1 <=0) {
                result = matrix [i][j]*matrix[i-1][j+1]*matrix[i-2][j+2]*matrix[i-3][j+3];
                if (product < result) {
                    product = result;
                }
            }
        }
    }
    return product;
}
matrix = [[1,2,3,4,5],[1,25,3,4,5],[1,20,3,4,5],[1,20,3,4,5],[1,4,3,4,5]];
console.log ("challenge 8.1 \n"+maximumProduct1(matrix,5,5));


// challenge 7
function howManyTimesElementRepeated(array,element) {
    var repeat = 0;
    for(i=0;i<array.length;i++) {
        if (array[i] === element) {
            repeat +=1;
        }
    }
    return repeat;
}
var words=['machine','matter','subset','trouble','starting','matter','eating','matter','truth','disobedience','matter','machine'];
console.log("challenge 7\n"+howManyTimesElementRepeated(words,'matter'));

//challenge 6
function searchElement(array,element) {
    var repeat = 0;
    for(i=0;i<array.length;i++) {
        if (array[i] === element) {
            repeat +=1;
        }
    }
    if (repeat > 0){
    return true;
    }
    else {
        return false;
    }
}
words = ['door','window','ceiling','roof','plinth','tiles','ceiling','flooring'];
console.log("Challenge 6 \n"+searchElement(words,'door'));

//challenge 5
function uniqArray(value,index,self) {
    return self.indexOf(value) === index;
}
var items = ['bread','jam','milk','egg','flour','oil','rice','coffee powder','sugar','salt','egg','flour'];
var uniqueArray = items.filter(uniqArray);
console.log("Challenge 5 \n"+uniqueArray);


//challenge 4
function midpoints(arrays) {
    add = arrays.length/2;
    return arrays[add];
}
var midpoint = [200,120,100,108,135,162,25,170,80,110];
console.log("Challenge 4\n"+midpoints(midpoint));


//challenge 4.1
function midPointOfLevels(arrays) {
    var add = sumofArray(arrays)/arrays.length;
    return add;
}
var levels = [22,16,9,10,7,14,11,9];
console.log("Challenge 4.1\n"+midPointOfLevels(levels));


//challenge 4.2
function averageWordLength(Array) {
    var sum=0;
    for (i=0;i<Array.length;i++) {
        sum+=Array[i].length;
    }
    sum = sum/Array.length;
    return sum;
}
var items = ['bread','jam','milk','egg','flour','oil','rice','coffee powder','sugar','salt'];
console.log("Challege 4.2\n"+averageWordLength(items));


//challenge 4.3
var mixedArray = [63,122,'Audi',61,true,'Volvo','20','Lamborghini',38,156];
console.log("Challenge 4.3\n"+(sumofArray(mixedArray))/mixedArray.length);


//challenge 3
function netPrice(mixedArray) {
    var add=0;
    for (i=0;i<mixedArray.length;i++) {
        add += mixedArray[i];
    }
    return add;
}
var prices = [200,120,100,108,135,162,25,170,80,110];
console.log("Challenge 3\n"+netPrice(prices));

//challenge 3.1
function sumofArray(mixedArray) {
    var sum=0;
    for(i=0;i<mixedArray.length;i++) {
        if (typeof mixedArray[i] == "string") {
            sum+=mixedArray[i].length;
        } else if(typeof mixedArray[i] == "boolean") {
            if (mixedArray[i] == true) {
                sum+=1;
            }
        } else if (typeof mixedArray[i] == "number") {
            sum+=mixedArray[i];
        }
    }
    return sum;
}
mixedArray = [63,122,'Audi',61,true,'Volvo','20','Lamborghini',38,156];
console.log("Challenge 3.1\n"+sumofArray(mixedArray));


//challenge 2
function findScaryWord(array) {
    var lengthOfString = 0;
    var index = 0;
    for(i=0;i<array.length;i++) {
        let lengths = array[i].length;
        if(lengthOfString < lengths) {
            lengthOfString = lengths;
            index = i;
        }
    }
    return array[index];
}
var words = ['George','Alice','Alex','John','Infanta','Xavior','LourdhAntony'];
console.log("Challenge 2\n"+findScaryWord(words));


//challenge 1
function greatestOfTwoNumbers(number1,number2) {
    if(number1 >= number2) {
        return number1;
    }
    else {
        return number2;
    }
}
console.log("Challenge 1\n"+greatestOfTwoNumbers(109,1090));