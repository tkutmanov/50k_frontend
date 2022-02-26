let personName = prompt("Введите ваше имя");
let personSurname = prompt("Введите вашу фамилию");
let addInfo1 = prompt("Введите допинформацию"); 
let addInfo2 = prompt("Введите допинформацию"); 
let addInfo3 = prompt("Введите допинформацию"); 
let addInfo4 = prompt("Введите допинформацию");
let addInfo5 = prompt("Введите допинформацию");
let addInfo6 = prompt("Введите допинформацию");

function personInfo(name, surname, ...addInfo){
    if (personName==="Bret", personSurname==="Pit"){
        return (`${name}, ${surname}, ${addInfo.slice(0,5)}`);
    } else {
        null;
    
    }
    
}

console.log(personInfo(personName,personSurname,addInfo1,addInfo2,addInfo3));

