function howManyHundreds(num){
    var remain = num % 100;
    var howMany = (num - remain)/100;
    return howMany;
}
console.log(howManyHundreds(100));
console.log(howManyHundreds(894));
console.log(howManyHundreds(700));
console.log(howManyHundreds(50));
 