WinRate ()



function WinRate(a, b){ //winrate = victory(A) - Loses(B)
    return a-b;
}

let lvl = " ";
let WL = WinRate(50,29); // variable Win and Lose

    if (WL >= 0 && WL <10){
        lvl = "Ferro";
}
    else if(WL >= 11 && WL <=20){
        lvl = "Bronze"
}   
    else if(WL >= 21 && WL <= 50){
        lvl = "Prata"
}
       else if(WL >= 51 && WL <= 80){
        lvl = "Ouro"
}
       else if(WL >= 81 && WL <= 90){
        lvl = "Diamante"
}
       else if(WL >= 91 && WL <= 100){
        lvl = "Lendário"
}
       else if (WL >= 101){
        lvl = "Imortal" 
}
        else{
        lvl = "Saldo de vitórias menor que 0, continue jogando para que possa subir de ranking"
}

console.log("O herói tem saldo de " + WL, "vitórias e está no nível " + lvl)