let person ={
    name: "Aliya",
    age:35,
    profession: 'junuor developer'
};

console.log(person);

console.log( JSON.stringify(person) ); // сериализация (архивация)
        
console.log( JSON.parse(JSON.stringify(person)) ); //распаковка