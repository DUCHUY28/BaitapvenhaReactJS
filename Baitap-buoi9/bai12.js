//Cách 1
// const bai12 = (chuoi)=>{
//        for (let i = 0; i < chuoi.length; i++) {
//         let chuoi2 = chuoi.charAt(i);
//         if(chuoi2.charAt(i) ===' '){
//             chuoi = chuoi.replaceAll(chuoi2,'');
//         }
//        }
//        return chuoi;
// }
// console.log("chuoi sau khi xoa :",bai12(' Hello World '));

//cách 2
const bai12 = (chuoi)=>{
    chuoi = chuoi.trim();
    let chuoi2 = chuoi.replace(' ','');
    return chuoi2;
}
console.log(bai12(" Hello World "));