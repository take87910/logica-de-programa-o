let nome = "professor";
console.log('Seja bem-vindo', nome);




let nome2 = "isabella";
let sobrenome = "Machado";
let nomeCompleto = nome2 + sobrenome
console.log('Bem-vindo', nomeCompleto);


let idade = "18";
let jogo = "Sao Paulo";
let food = "nao";

console.log("idade:", idade, "= Inteiro");
console.log("jogo de futebol:", jogo, "= String");
if (food) {
    console.log("food? Sim!", food, "= Boleano");

} else {
    console.log("food? Nao!", food, "= Boleano");
}



let numero = [5, 5, 1, 2, 2];
let resultado = (((numero[0] + numero[1] - numero[2]) * numero[3]) / numero[4]);
console.log(resultado);


let numero1 = 2;
let numero2 = 8;

if (numero1 > numero2) {
    console.log(numero1, "é Maior que ", numero2);
} else if (numero2 > numero1)
    console.log(numero1, "é igual", numero2);


let nota1 = 5;
let nota2 = 9;
let nota3 = 7;
let media = (nota1 + nota2 + nota3) / 3;
console.log("A média do aluno é :", media);



let numero5000 = 5

if (numero5000 % 2 === 0) {

    console.log("O numero é par");
} else {
    console.log("O numero é impar");
}




let idade2 = 33;

if (idade2 >= 0 && idade2 <= 12) {

    console.log("criança");
} else
    if (idade2 >= 13 && idade2 <= 17) {

        console.log("adolescente");
    }
if (idade2 >= 18 && idade2 <= 59) {

    console.log("adulto");
}
if (idade2 >= 60 && idade2 <= 100) {
    console.log("idoso");
}


let login = "admin"; 
let senha = "senha123";

if(login==="admin" && senha ==="senha123"){
    console.log('login bem sucedido');console.log('login sucedido');
}else
 {
    console.log('Usuário não encontrado');console.log('senha incorreta');
}


let nome1 = "professor";
console.log('Ola', nome);



let base = 4;
let altura = 5;
let area = base * altura
console.log(area);



let graus=10;
let f =graus * 1.8+32;
console.log(f);


for(let i=1; i<11; i++){
    console.log(i)
}

let carla=2
for(let c=1; c<11; c++){
    console.log(c*carla);

}

for(let ii=11; ii>1; ii--){
    console.log(ii)
}

let ic=0
for(a=0; a<=100; a++)
    if(a%2===0){
        ic+=a
        console.log(ic);
    }
































