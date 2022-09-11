let n = 10;
 let flag = true;
 for (let i = 2; i <= N;i++){
     for (let j = 2; j <= Math.sqrt(i); j++) {
         if (i % j == 0) {
             flag = false;
             break;
         }
     }
     if (flag) {
         console.log(i);
     }
 }