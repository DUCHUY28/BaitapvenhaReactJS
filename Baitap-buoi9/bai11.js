let bai11 = ()=>{
let chuoi = " Hello World"
let count = 0;
for(let i = 0;i < chuoi.length;i++){
    if(chuoi.charAt(i) ===' '){
        count++;
    }
}
return count;
}
console.log("số khoảng chống là",bai11());
