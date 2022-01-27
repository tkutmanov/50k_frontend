// Объект
let person = {
    name: "Meerim",
    surname: "Aidaralieva",
    age: 34,
    "date of birth": 1987,
    "place of birth": "Kyrgyzstan"
};

//Массив
let colors = ["white", "blue", "orange", "black", "green"];


// Перебор объекта
for (let key in person) {
    console.log(person[key]);
}
for (let key in person) {
    console.log(key);
}

// Перебор массива

for (let i=0; i < colors.length; i++) {
    console.log(colors[i]);
}

for (let color of colors) {
    console.log(color);
}