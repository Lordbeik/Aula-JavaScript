// cada vaga de emprego verifica elegibilidade do candidato
//verificar se o candidato tem requisitos minimos para vaga
//O programa receberá informações sobre cada candidato, incluindo idade, experiência em anos, nível de educação e se o candidato possui um certificado.

// dados candidato

var idade = 28;
var experienciaAnos = 5;
var nivelEducacao ="Superior";
var ppossuiCertificado =true;

//Critérios  de elegibilidade

var idadeMinima =18;
var experienciaMinimaAnos = 3;
var nivelEducacaoMinimo = "Superior";
var certificadoObrigatorio = true;

//Verificação de elegibilidade

var elegivel = idade >= idadeMinima && experienciaAnos >= experienciaMinimaAnos && (nivelEducacao === nivelEducacaoMinimo || ppossuiCertificado) && (!certificadoObrigatorio || ppossuiCertificado);

//Saída do resultado

console.log("Elegível para a vaga ? => " + elegivel);