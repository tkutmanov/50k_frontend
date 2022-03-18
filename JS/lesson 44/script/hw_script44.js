let userNname = prompt("Введите Ваше имя");
let year = prompt("Ведите год рождения");
let place = prompt ("Введите место рождения");

let newUser = {
    firstName:userNname,
    dateOfBirht:year,
    placeOfBirth:place,
    f(){
        console.log(this.firstName, this.dateOfBirht, this.placeOfBirth);
    }
    
};

newUser.f();


