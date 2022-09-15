const bai17 = (a,b,c)=>{
    let min = a;
    if(a > b){
        min = b;
    }else if(a > c){
        min = c;
    }
    return min;
}
const mAx = (a,b,c)=>{
    let max = a;
    if(max < b){
        max = b;
    }
     if(max < c){
        max = c;
    }
    return max;
}
console.log('Min :',bai17(2,4,7));
console.log('Max :',mAx(2,4,7));