// const mangBinhphuong = (arr)=>{
//     let new_mang = [];
//     for(let i = 0;i < arr.length;i++){
//         new_mang.push(arr[i]*arr[i]);   
//     }

//     console.log(new_mang);
// }
// mangBinhphuong([1,2,3,4,5,6,7]);
let mang = [1,2,3,2,3,4,6,7]
let new_mang = mang.map((item)=>{
    return item * item;
}
);
console.log(new_mang);
