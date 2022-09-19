const mangBinhphuong = (arr)=>{
    let new_mang = [];
    for(let i = 0;i < arr.length;i++){
        new_mang.push(arr[i]*arr[i]);   
    }

    console.log(new_mang);
}
mangBinhphuong([1,2,3,4,5,6,7]);
