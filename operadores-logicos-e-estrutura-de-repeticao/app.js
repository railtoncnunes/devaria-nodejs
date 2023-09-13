const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log('Esse programa vai checar se voce e maior de 18 anos e tem habilitação para saber se voce pode entrar no kart');
console.log('Alem da suas verificações, precisamos verificar se voce esta na lista de presenca de horario');

readLine.question('Qual o ano do seu nascimento?', ano =>{
    if(ano > 2004){
        console.log('Voce nao tem 18 anos');
    }else{
        readLine.question("Voce tem habilitação? (Sim/Nao)", temHabilitação => {
            if(!(temHabilitação.toUpperCase() === "SIM")){
                Console.log('Voce nao tem habilitação para entrar no kart');
            }else{
                readLine.question("Qual seu nome?", nome =>{
                    switch(nome){
                        case 'Douglas' :
                            console.log('bem vindo ao kart Douglas');
                            break;
                        case 'Rafael' :
                            console.log('bem vindo ao kart Rafael');
                            break;
                        default:
                            console.log('Seu nome nao foi identificado na lista de presenca');
                    }
                })
            }
        })
    }
})
