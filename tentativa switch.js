let nomeHeroi = "DesbugandoAprogramação"
let XpDoHeroi = 9900

    switch (XpDoHeroi) {
        case XpDoHeroi <= 1000:
            console.log("Olá meu nome é " + nomeHeroi + " esta no nivel de Ferro")
            break
        case XpDoHeroi === 1001:
            case XpDoHeroi <= 2000:
            console.log("Olá meu nome é " + nomeHeroi + " esta no nivel de Bronze")
            break
        case XpDoHeroi === 2001:
            case XpDoHeroi  <= 5000:
            console.log("Olá meu nome é " + nomeHeroi + " esta no nivel de Prata")
            break
        case XpDoHeroi === 5001:
            case XpDoHeroi <= 7000:
            console.log("Olá meu nome é " + nomeHeroi + " esta no nivel de Ouro")
            break
        case XpDoHeroi === 7001:
            case XpDoHeroi <= 8000:
            console.log("Olá meu nome é " + nomeHeroi + " esta no nivel de Platina")
            break
            
        case XpDoHeroi === 8001:
            case XpDoHeroi <= 9000:
            console.log("Olá meu nome é " + nomeHeroi + " esta no nivel de Ascendente")
            break
        case XpDoHeroi === 9001:
            case XpDoHeroi <= 10000:
            console.log("Olá meu nome é " + nomeHeroi + " esta no nivel de Imortal ")
            break
        case XpDoHeroi >=10001:
            console.log("Olá meu nome é " + nomeHeroi + " esta no nivel de Radiante")
            break }