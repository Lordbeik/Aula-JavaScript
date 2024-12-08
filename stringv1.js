var nome = "Carlos "
var x = nome.length; //quantos caracteres (tamanho) 
console.log(x);

resultado = x  > 15 ? " Obrigado" : "Por favor preencha seu nome completo"

console.log(resultado);

var res =nome.toUpperCase();
console.log(res);

var jogo ="Barcelona VS Real melhor Time";
var posicao = jogo.indexOf("Real");
console.log(posicao);

var  cortado = jogo.slice(0,9); // slice( posiçao inicial, prosiçao final)
console.log(cortado);

var  cortado = jogo.slice(13, ); // se não colocar o final ele pega a posição inicial e vai até o final a partir dele.
console.log(cortado);


var val = jogo.includes("Real");// procurar se existe o que esta entre parenteses
console.log(val) // pode ser usado em estrutura de descisão

var str1 = " Hello";
var str2 = " Turma";

var str3 = str1.concat(str2);
console.log(str3);

var frase  = "                 olá você está aprendendo JavaScript"
console.log(frase.trim());//remove os espaços no inicio e do fim


var num = "1,2,3,4,5,6,7,8";
// var num = "1,2,3,4,5,6,7,8"; 
//  var arr = num.split("|");
var arr = num.split(","); // onde econtrar a virgula ele cira um elemento novo do array.

console.log(arr[2])




