// Преобразуйте псевдо массив  в массив

// дан псевдо массив  {0: 'first', 1: 'second', 2: 'third', length: 3} 
// вывод [ "first", "second", "third" ]


// дан массив ["first", "second", "third" ]
// вывод [ "f", "i", "r", "s", "t" ], 
// [ "s", "e", "c", "o", "n", "d" ]
// [ "t", "h", "i", "r", "d" ] 

const object1 = {0: 'first', 1: 'second', 2: 'third', length: 3};
let array1= [];
for (let i=0; i < object1.length; i++) {
    array1.push(object1[i]);

}

console.log(array1); 

for (let prop of array1) {
    console.log(prop.split('')); 
}


