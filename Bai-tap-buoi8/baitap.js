//bai 2
// for(let i = 1;i <= 10;i += 2){
//         console.log(`so le ${i}`);
// }

// //bai 4
//  let n = 10;
//  let flag = true;
//  for (let i = 2; i <= N;i++){
//      for (let j = 2; j <= Math.sqrt(i); j++) {
//          if (i % j == 0) {
//              flag = false;
//              break;
//          }
//      }
//      if (flag) {
//          console.log(i);
//      }
//  }

// // bai 6 
//  let Tong = 0;
// let n = 3;
//  for(let i = 0;i <= n;i++){
//      Tong +=i*i;
//  }
//  console.log(`Tong binh phuong cua day so = ${Tong}`);

// // // bai 7
//  let N  = 5;
//  let T = 0;
//  for(let i = 0;i <= N;i++){
//      if(i % 2 == 1){
//          T += i;
//      }
//  }
//  console.log(`Tổng các số lẻ = ${T}`);

// //bai 8 Kiểm tra số n có toàn số lẻ tạo thành hay không?
//  let index = 135;
//  let check = true;
//  while(index = Math.floor(index/10)){
//      if((index % 10) % 2 == 0){
//          check = false;
//          break;
//      }   
//  }
//  if(check){
//      console.log("Yes !");
//  }
//  else{
//      console.log("No !");
//  }

// bài 9 Kiểm tra n có phải là số đối xứng
// let n = 1234;
// let N = n;
// let x = 0;
// while ( N > 0) {
//     x = x * 10 + N % 10;
//     N = Math.floor( N / 10);
// }
// if(x == n){
//     console.log("YES");
// }else{
//     console.log("NO");
// }

// bai 10 in bảng cửu chương
// for(let i = 2;i <= 9;i++){
//     for(let j = 1;j <= 10;j++){
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }
    
