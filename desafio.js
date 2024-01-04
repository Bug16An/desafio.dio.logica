let nomeHeroi = "DesbugandoAprogramação"
let XpDoHeroi = 9.900
let NivelDeXp = ["<= 1.000 = Ferro" , "1.001 até 2.000 = Bronze" , "de 2.001 até 5.000 = Prata" , 
"de 5.001 até 7.000 = Ouro" , "de 7.001 até 8.000 = Platina" , "de 8.001 até 9.000 = Ascendente" , 
"de 9.001 até 10.000= Imortal" ,  
">= a 10.001 = Radiante"]
switch (XpDoHeroi) {
    case XpDoHeroi <= 1.000:
        console.log("Olá meu nome é " + nomeHeroi + " esta no nivel de Ferro")
        break
    case XpDoHeroi === 1.001 || XpDoHeroi  <= 2.000:
        console.log("Olá meu nome é " + nomeHeroi + " esta no nivel de Bronze")
        break
    case XpDoHeroi  === 2.001 || XpDoHeroi <= 5.000:
        console.log("Olá meu nome é " + nomeHeroi + " esta no nivel de Prata")
        break
    case XpDoHeroi === 5.001 || XpDoHeroi <= 7.000:
        console.log("Olá meu nome é " + nomeHeroi + " esta no nivel de Ouro")
        break
    case XpDoHeroi === 7.001 || XpDoHeroi <= 8.000:
        console.log("Olá meu nome é " + nomeHeroi + " esta no nivel de Platina")
        break
    case XpDoHeroi === 8.001 || XpDoHeroi <= 9.000:
        console.log("Olá meu nome é " + nomeHeroi + " esta no nivel de Ascendente")
        break
    case XpDoHeroi >=10.001:
        console.log("Olá meu nome é " + nomeHeroi + " esta no nivel de Ascendente")
        break

}






//for (let ContadordeXp = 0; ContadordeXp <= 1000; ContadordeXp++){console.log(ContadordeXp)}
 
//usar if e else, 
 
// console.log(NivelDeXp[posição])

//usar node desafio.js para o terminal ler meu codigo 
//para atualiza no github usar git add. depois git commit -m "algum nome" e por fim git push -u origin main 