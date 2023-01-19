/* Acesso a section da lista de itens. */
let secItens = document.getElementById("secItens")

/* Event-listener de cada botão. */
document.getElementById("adicionarItem").addEventListener('click', adicionarItem)

/* Funções dos event-listeners. */

function adicionarItem(){
    //numIndice vai controlar as divs de cada item. Se não há nenhum item dentro da lista, o índice é de 0.
    if (document.getElementsByClassName("item").length === 0){
        var numIndice = 0

    } else {
        numIndice = document.getElementsByClassName("item").length
    }

    //Criando elemento dinâmicamente toda vez que um item for adicionado.
    //<div class="item"></div>
    let item = document.createElement("div")
    item.setAttribute("class", "item")

    //Criando todas as divs de cada campo a ser preenchido por item.
    for (let i = 0; i < 11; i++){
        let div = document.createElement("div")
        div.setAttribute("class", `divItem${numIndice}`)
        item.append(div)
    }

    //Incorporando o item dentro do HTML.
    secItens.append(item)

    //Capturando o conjunto de itens criados.
    let arrayItem = document.getElementsByClassName("item")

    //Capturando o conjunto de divs criados.
    let arrayDivItem = document.getElementsByClassName(`divItem${numIndice}`)

        //Criando campo e label referente ao número do item.
            let labelItem = document.createElement("label")
            labelItem.innerHTML = "Item"

            let inputItem = document.createElement("input")
            inputItem.setAttribute("type", "text")
            inputItem.setAttribute("class", "inputItem")
            inputItem.setAttribute("value", arrayItem.length)
            inputItem.setAttribute("readonly", "readonly")

        //Criando campo e label referente a descrição do material.
            let labelDescMaterial = document.createElement("label")
            labelDescMaterial.innerHTML = "Desc. Material"

            let inputDescMaterial = document.createElement("input")
            inputDescMaterial.setAttribute("type", "text")
            inputDescMaterial.setAttribute("class", "inputDescMaterial")

        //Criando campo e label referente a quantidade.
            let labelQtde = document.createElement("label")
            labelQtde.innerHTML = "Qtde"

            let inputQtde = document.createElement("input")
            inputQtde.setAttribute("type", "text")
            inputQtde.setAttribute("class", "inputQtde")

        //Criando campo e label referente ao valor unitário.
            let labelValorUnit = document.createElement("label")
            labelValorUnit.innerHTML = "Valor Unit."

            let inputValorUnit = document.createElement("input")
            inputValorUnit.setAttribute("type", "text")
            inputValorUnit.setAttribute("class", "inputValorUnit")

    //Append dos elementos da div referente ao número de item.
    arrayDivItem[0].appendChild(labelItem)
    arrayDivItem[0].appendChild(inputItem)

    //Append dos elementos da div referente a desc. material.
    arrayDivItem[1].appendChild(labelDescMaterial)
    arrayDivItem[1].appendChild(inputDescMaterial)

    //Append dos elementos da div referente a quantidade.
    arrayDivItem[2].appendChild(labelQtde)
    arrayDivItem[2].appendChild(inputQtde)

    //Append dos elementos da div referente ao valor unitário.
    arrayDivItem[3].appendChild(labelValorUnit)
    arrayDivItem[3].appendChild(inputValorUnit)

    console.log(arrayItem[2])

    //numIndice incrementa um valor para o próximo item. Isso evita que as das divs de cada item sejam incorporadas no item anterior.
    numIndice += 1
}
