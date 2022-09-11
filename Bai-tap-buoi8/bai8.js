let index = 135;
 let check = true;
 while(index = Math.floor(index/10)){
     if((index % 10) % 2 == 0){
         check = false;
         break;
     }   
 }
 if(check){
     console.log("Yes !");
 }
 else{
     console.log("No !");
 }