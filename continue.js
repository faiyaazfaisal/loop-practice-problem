var numbers = [45, 87, 89, 54, 32, 27, 25, 188, 41, 98];

for(var i =0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}