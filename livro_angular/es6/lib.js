
//Arrow functions
const somar = (x, y = 1) => x + y;
console.log(somar(5));

//Destructuring
let arrNumeros = [1, 2, 3];

const [a, b, c] = arrNumeros;
console.log(a);
console.log(b);
console.log(c);

let meuObjeto = {livro: 'Angular 2', autor: 'Thiago Guedes'};
const {livro, autor} = meuObjeto;
console.log(livro);
console.log(autor); 

//Map
let arrStrings = ['a', 'b', 'c'];
arrNumeros = [2, 4, 6];
novoValor = arrNumeros.map(function (value, index) {
    console.log(index);
    console.log(value);
    return value*2;
});

//Filter
let nomes = ['jorge', 'carlos', 'roberto', 'lucas'];
novoNome = nomes.filter(function(value, index) {
    return value.includes('a');
});

console.log(novoNome);

novoNome = nomes.filter((value, index) => value.includes('a'));

console.log(novoNome);


