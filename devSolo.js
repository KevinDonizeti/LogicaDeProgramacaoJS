let nivelCombustivel = 0

if(nivelCombustivel === 0){
    console.log("Pane seca, otário, isso que dá não abastecer o veículo")
}
    else if(nivelCombustivel > 0 && nivelCombustivel <= 10 ){
        console.log("Veículo com nível crítico de combustível, abasteça-o imediatamente")
}
    else if(nivelCombustivel > 10 && nivelCombustivel <=30){
        console.log("Alerta de atenção: capacidade do tanque de combustível em " + nivelCombustivel,"%")
}
    else if(nivelCombustivel > 30 && nivelCombustivel <= 60){
        console.log("Ainda há bastante combustível. Nível atual em " + nivelCombustivel, "%")
}
    else{
        console.log("Não precisa se preocupar, o tanque está cheio. Nível atual em " + nivelCombustivel,"%")
}
