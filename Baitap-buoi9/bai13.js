const bai13 = (chuoi)=>{
    let chuoi_daonguoc = chuoi.split('').reverse().join('');
    return chuoi_daonguoc;
}
console.log("chuỗi sau khi đảo ngược :",bai13('Hello World'));