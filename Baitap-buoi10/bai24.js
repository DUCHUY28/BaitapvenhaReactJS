let number =[1,2,3,4,5,6,7]
let new_number = number.filter(function(item){
    if (item % 2 == 1) {
        return item;
    }
});
console.log(new_number);
new_number.splice(1,0,2);
new_number.splice(0,1);
console.log("mảng sau khi update",  new_number);
