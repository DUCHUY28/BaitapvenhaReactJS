 let n = 1234;
 let N = n;
 let x = 0;
 while ( N > 0) {
     x = x * 10 + N % 10;
     N = Math.floor( N / 10);
 }
 if(x == n){
     console.log("YES");
 }else{
     console.log("NO");
 }