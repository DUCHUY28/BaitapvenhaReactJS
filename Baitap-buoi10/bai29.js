let students = [
    {
        id: "T3HXX1",
        firstName: "Ngan",
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
];
const sapXep = ()=>{
return students.sort(function(a, b){
    if(a.firstname < b.firstname) {
         return -1;
         }
    else if(a.firstname > b.firstname) {
         return 1; 
        }
    return 0;
});
}
console.log(sapXep(students));
