var pais = "Brasil";

if(pais != "Brasil"){
    console.log("Você é estrangeiro");
}else{
    console.log("Você é brasileiro")
}

var idade = 22;

if (idade <16){
    console.log("não vota")
}else if (idade < 18 || idade >65){
    console.log("Voto opicional")
}else{
    console.log("Voto obrigatório")
}

var diaSem = 4;
switch(diaSem){
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log("Segunda")
        break;
    case 3:
    console.log("Terça");
        break;    
     default:
        console.log("Esse dia da semana não existe!");
        break;  
}


