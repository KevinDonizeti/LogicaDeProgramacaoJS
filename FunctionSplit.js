let username = GetFirstName ("Kevin Donizeti Costa ")
    console.log("Bem vindo " + username)


function GetFirstName(name){
    let firstName = name.split(" ")[1]
    return firstName

}

//função com retorno em vetor, usado muito no dia a dia