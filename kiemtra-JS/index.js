// ************************
const readlineSync = require('readline-sync');
const consoleTable = require('console.table');
const shortId = require('shortid')
const fs = require('fs');

const path = './data.txt' ;

const students = function(id,name,age,sex,diemTN,diemTB){
    return {
        id      : id,
        name    : name,
        age     : age,
        sex     : sex,
        diemTN  : diemTN,
        diemTB  : diemTB
    }
};

const getAllData = () => {

    let data = fs.readFileSync(path, 'utf-8');
    if(data ==='') return []
    else return JSON.parse(data);  
  
}

const writeData = (data) => {
    data = JSON.stringify(data);
    fs.writeFileSync(path, data, 'utf-8');
}

const showTable = (arrAyData) => {
    let table = consoleTable.getTable(arrAyData);
    console.log(table);
}

//Các chức năng 
//Hiển thị tất cả học sinh
const bangSinhVien = function(data){
    console.log("Danh sách học sinh :");
    showTable(data)
};

//Thêm mới học sinh
const addSTudent = function(students){
    let data = getAllData();
    data = [...data,students];
    writeData(data);
    return 1;
}

//Xóa 1 học sinh theo id

const deleteStudent = function(idstudent){
    let data = getAllData();
    let lastdelete = [];
    for(let i = 0;i < data.length;i++){
        if(data[i].id === idstudent){
            lastdelete = [data.splice(i,1)];
            break;
        }
    }
    writeData(lastdelete)
}

// Xóa nhiều học sinh theo id

const deleteStudents = data.filter(function(iDstudents){
    return iDstudents !== data.id
});


//Edit thông tin học sinh 
const editStudent = function(idstudent) {
    console.log(`Update data học sinh ${idstudent}`);
    let name = readlineSync.question('Name : ') ;
    let age  = readlineSync.question('Age :') ;
    let sex = readlineSync.question('Sex : ');
    let diemTN = readlineSync.questionFloat('Điểm vào trường : ');
    let diemTB = readlineSync.questionFloat('Điểm trung bình : ');

    let data = getAllData(path);
    let outsome = data.map(function (param) {
        if(param.id == idstudent){
            param.name = name;
            param.age = age;
            param.sex = sex;
            param.diemTN = diemTN;
            param.diemTB = diemTB;
        }
        return param;
    })
    writeData(outsome)
}

// Tìm kiếm học sinh theo tên 

const searchStudent = function(name){
    let data = getAllData();
    let outsome = data.filter(function(param){
            if(data.name === name ){
                return param;
            }
    })
    return outsome
}

// Tìm kiếm học sinh thủ khoa của trường
const searchStudentMax = function(){
    let data = getAllData();
    let max = data[0];
    for(let i = 0;i < data.length;i++){
        if(data[i] > max){
            max = data[i];
        }
    }
    return max;
}

//  Hiển thị danh sách học sinh bị cảnh cáo ( điểm trung bình < 4) 

const outStudentError = function(){
    let data = getAllData();
    return data.filter(function(param){
        if(data.diemTB < 4) return param
    })
    }

//  Sắp xếp học sinh theo bảng chữ cái

const Sapxep = function(){
    let data = getAllData(path);
    return data.sort(function(a,b){
        if(a.name > b.name){
            return 1;
        }
        if(a.name < b.name){
            return -1;
        }
        if(a.name === b.name){
            return 0;
        }
    })
}

// Sắp xếp học sinh theo điểm trung bình tăng dần
const diemTangdan = function(){
    let data = getAllData(path);
    return data.sort(function(a,b){
        if(a.diemTB > b.diemTB){
            return 1;
        }
        if(a.diemTB < b.diemTB){
            return -1;
        }
        if(a.diemTB === b.diemTB){
            return 0;
        }
    })
}
//Sắp xếp học sinh theo tuổi tăng dần 

const tuoiTangdan = function(){
    let data = getAllData(path);
    return data.sort(function(a,b){
        if(a.age > b.age){
            return 1;
        }
        if(a.age < b.age){
            return -1;
        }
        if(a.age === b.age){
            return 0;
        }
    })

}
//Exit: thoát khỏi chương trình
const eXit = function(){
    process.exit();
}

//****************** */
while (true) {
    console.log('1. Hiển thị tất cả các học sinh');
    console.log('2. Thêm học sinh mới');
    console.log('3. Xoá 1 học sinh theo id');
    console.log('4. Xoá nhiều học sinh theo id');
    console.log('5. Edit thông tin học sinh');
    console.log('6. Tìm kiếm học sinh theo tên');
    console.log('7. Tìm kiếm học sinh thủ khoa vào trường');
    console.log('8. Hiển thị danh sách học sinh bị cảnh cáo ( điểm trung bình < 4)');
    console.log('9. Sắp xếp học sinh theo bảng chữ cái');
    console.log('10. Sắp xếp học sinh theo điểm trung bình tăng dần');
    console.log('11. Sắp xếp học sinh theo tuổi tăng dần');
    console.log('12. Exit');
    let command = readlineSync.prompt();
    switch (command) {
        case '1':
            // hiển thị
            {
                console.log('=======================================');
                let data = getAllData(path);
                bangSinhVien(data);
            }
            break;
        case '2':
            {
                console.log('\n');
                //thêm học sinh 
                console.log('information student :');
                let id = shortId.generate();
                let name = readlineSync.question('Name : ');
                let age = readlineSync.questionInt('Age : ');
                let sex = readlineSync.question('Sex : ');
                let diemTN = readlineSync.questionFloat('Điểm vào trường : ');
                let diemTB = readlineSync.questionFloat('Điểm trung bình : ');

                addSTudent(students(id,name,age,sex,diemTN,diemTB)) ;
                

            }
            break;
        case '3':
            {
                console.log('\n');
                //xóa học sinh theo id               
                let id = readlineSync.question('Id Student ? : ') ;               
                deleteStudent(idstudent);
            }
            break;
        case '4':
            {
                console.log("Xóa nhiều học sinh");
            }
                
        case '5':
            {
                console.log('\n');
                //edit thông tin học sinh
                let id = readlineSync.question('Id Student = ') ;

                editStudent(id);
            }
            break;
        case '6':
            {
                console.log('\n');
                //Tìm kiếm học sinh theo tên
                let name = readlineSync.question('Name : ');
                let data = findStudentbyName(name);
                searchStudent(data);
                break;
            }
        case '7':
            {
                console.log('\n');
                //Tìm kiếm học sinh thủ khoa vào trường
                console.log('Học sinh thủ khoa là \n--------------------------');
                searchStudentMax(data)
                break;
            }
        case '8':
            {
                console.log('\n');
                //Hiển thị danh sách học sinh bị cảnh cáo ( điểm trung bình < 4)
                console.log('Học sinh bị cảnh cáo là \n--------------------------');
                bangSinhVien(outStudentError());
                break;
            }       
        case '9':
            {
                console.log('\n');
                //Sắp Xếp danh sách theo bảng chữ cái 
                console.log('Danh sách được sắp xếp theo bảng chữ cái là : \n-----------------------');
                bangSinhVien(Sapxep());
                break;
            }
        case '10':
            {
                console.log('\n');
                console.log('Danh sách được sắp xếp theo điểm trung bình là : \n-----------------------');
                bangSinhVien(diemTangdan());
                break;
            }
        case '11':
            {
                console.log('\n');
                console.log('Danh sách được sắp xếp theo tuổi là : \n-----------------------');
                bangSinhVien(tuoiTangdan)
                break;
            }

        case '12':
            {
                appExit();
                break;
            }
        default:
            break;
    }
}