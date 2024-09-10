// let meta = {
//     value: 'ler um livro por mês',
//     checked: false,    
// }

// let metas = [
//     meta,
//     {
//         value: "caminhar 20 minutos todos os dias",
//         checked: false
//     }
// ]

function start() {
    while(true){
        let opcao = "sair"
        switch(opcao){
            case "cadastrar":
                console.log("vamos cadastrar")
                break;
            case "listas":
                console.log("vamos listar")
                break;
            case "sair":
                return
        }
    }
}

start();