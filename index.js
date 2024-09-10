const { select } = require('@inquirer/prompts')

const start = async() => {

    while(true){

        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "Cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

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