var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var length = ingredients.length;

var index = 0;
while (index < length){
    console.log(ingredients[index]);
    index++;
}

for(index = 0; index < ingredients.length; index ++){
    console.log(ingredients[index]);
}

for(index = length-1; index >=0; index--){
    console.log(ingredients[index]);
}