// input: let salary = {
//     almaz: 1200,
//     adilet: 1300,
//     nursultan: 3000,
// };

// let bonus = {
//     almaz: 400,
//     adilet: 300,
//     nursultan: 200,
// }

// Сделайте метод который будет суммировать зарплату с бонусом 

// output: almaz 1600, adilet 1600, nursultan 3200 

let salary = {
    almaz: 1200,
    adilet: 1300,
    nursultan: 3000,
};

let bonus = {
    almaz: 400,
    adilet: 300,
    nursultan: 200,
    __proto__:salary,
    sum(){
        console.log(this.almaz+salary.almaz);
        console.log(this.adilet+salary.adilet);
        console.log(this.nursultan+salary.nursultan);
    }
};

bonus.sum();