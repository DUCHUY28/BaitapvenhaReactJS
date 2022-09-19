const kiemTra = (a, k) =>  {   
    let min = [];
    min[0] = a[0]
    let kc = Math.abs(k - a[0])

    for (let i = 1; i < a.length; i++) {
        if (Math.abs(a[i] - k) < kc) {
            min[0] = a[i];
            kc = Math.abs(a[i] - k);
        } else if (Math.abs(a[i] - k) === kc) {
            min[1] = a[i];
        }
         else {
            break;
        }
    }
    return `phan tu co khoang cach lon nhat voi ${k} la ${min}`
}

console.log(kiemTra([1,2,3,4,6,7], 5));