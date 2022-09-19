let students =[
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]
const tenThuong = (name)=>{
    name = name.toLowerCase();
    for (let i = 0; i < name.length; i++) {
        if (i === 0 || name.charAt(i - 1) === ' ') {
          name = name.slice(0, i) + name.charAt(i).toUpperCase() + name.slice(i + 1);
        }
      }
    return name;
}
const checkName = (arr)=>{
    for(let i = 0;i < arr.length;i++){
        arr[i].firstName = tenThuong(arr[i].firstName);
        arr[i].lastName = tenThuong(arr[i].lastName);
        if(arr[i].firstName.indexOf('a') !== -1 ||arr[i].firstName.indexOf('A') !== -1 && arr[i].firstName >= 3){
        console.log(arr[i]);
        }
    }
}
checkName(students);
