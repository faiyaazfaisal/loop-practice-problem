for(var i = 1; i <= 20; i++){
    console.log(i);
    if(i > 10){
        break;
    }
}

// more example
 var roastGiven = 0;
 while(roastGiven <10){
    console.log('roast den, gift item ansi');
    roastGiven++;
    if(roastGiven > 5){
        break;
    }

}

// more example
var items = ['bottle', 'sunglass', 'pen', 'notebook', 'mouse'];
for(var i = 0; i < items.length; i++){
    var item = items[i];
    if(item == 'pen'){
        break;
    }
    console.log(item);
}

// more example
var numbers = [89, 37, 90, 268,383,37, 377, 29, 25,];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 100){
       break;
    }
    console.log(number);

}