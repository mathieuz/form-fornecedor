/* Acesso a section da lista de itens. */
let secItens = document.getElementById("secItens")

/* Event-listener de cada botão. */
document.getElementById("adicionarItem").addEventListener('click', adicionarItem)
document.getElementById("removerTudo").addEventListener('click', removerTudo)

/* Funções dos event-listeners. */
function adicionarItem(){
    //numIndiceDivItem vai controlar as divs de cada item. Se não há nenhum item dentro da lista, o índice é de 0.
    if (document.getElementsByClassName("item").length === 0){
        var numIndiceDivItem = 0

    } else {
        numIndiceDivItem = document.getElementsByClassName("item").length
    }

    //Criando elemento dinâmicamente toda vez que um item for adicionado.
    //<div class="item"></div>
    let item = document.createElement("div")
    item.setAttribute("class", "item")

    //Criando todas as divs de cada campo a ser preenchido por um item.
    //Cada divItem criado vai receber um valor de índice a ser incrementado a cada item novo na lista.
    for (let i = 0; i < 14; i++){
        let div = document.createElement("div")
        div.setAttribute("class", `divItem${numIndiceDivItem}`)
        item.append(div)
    }

    //Incorporando o item dentro do HTML.
    secItens.append(item)

    //Capturando o conjunto de itens criados.
    let arrayItem = document.getElementsByClassName("item")

    //Capturando o conjunto de divs criados.
    let arrayDivItem = document.getElementsByClassName(`divItem${numIndiceDivItem}`)

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
            inputQtde.setAttribute("type", "number")
            inputQtde.setAttribute("min", "0")
            inputQtde.setAttribute("class", "inputQtde")

        //Criando campo e label referente ao valor unitário.
            let labelValorUnit = document.createElement("label")
            labelValorUnit.innerHTML = "Valor Unit."

            let inputValorUnit = document.createElement("input")
            inputValorUnit.setAttribute("type", "text")
            inputValorUnit.setAttribute("class", "inputValorUnit")

        //Criando campo e label referente ao valor total
            let labelValorTotal = document.createElement("label")
            labelValorTotal.innerHTML = "Valor Total"

            let inputValorTotal = document.createElement("input")
            inputValorTotal.setAttribute("type", "text")
            inputValorTotal.setAttribute("class", "inputValorTotal")

        //Criando campo e label referente ao ICMS
            let labelIcms = document.createElement("label")
            labelIcms.innerHTML = "ICMS"

            let inputIcms = document.createElement("input")
            inputIcms.setAttribute("type", "text")
            inputIcms.setAttribute("class", "inputIcms")

        //Criando campo e label referente ao PIS/COFINS
            let labelPisCofins = document.createElement("label")
            labelPisCofins.innerHTML = "PIS/COFINS"

            let inputPisCofins = document.createElement("input")
            inputPisCofins.setAttribute("type", "text")
            inputPisCofins.setAttribute("class", "inputPisCofins")

        //Criando campo e label referente ao IPI.
            let labelIpi = document.createElement("label")
            labelIpi.innerHTML = "IPI"

            let inputIpi = document.createElement("input")
            inputIpi.setAttribute("type", "text")
            inputIpi.setAttribute("class", "inputIpi")

        //Criando campo e label referente a "outros".
            let labelOutros = document.createElement("label")
            labelOutros.innerHTML = "Outros"

            let inputOutros = document.createElement("input")
            inputOutros.setAttribute("type", "text")
            inputOutros.setAttribute("class", "inputOutros")

        //Criando campo e label referente ao cond. pagto.
            let labelCondPagto = document.createElement("label")
            labelCondPagto.innerHTML = "Cond. Pagto"

            let inputCondPagto = document.createElement("input")
            inputCondPagto.setAttribute("type", "number")
            inputCondPagto.setAttribute("min", "0")
            inputCondPagto.setAttribute("max", "999")
            inputCondPagto.setAttribute("class", "inputCondPagto")

        //Criando campo e label referente ao prazo de entrega
            let labelPrazoEntrega = document.createElement("label")
            labelPrazoEntrega.innerHTML = "Prazo Entrega"

            let inputPrazoEntrega = document.createElement("input")
            inputPrazoEntrega.setAttribute("type", "date")
            inputPrazoEntrega.setAttribute("class", "inputPrazoEntrega")

        //Criando campo e label referente ao frete incluso
            let labelFreteIncluso = document.createElement("label")
            labelFreteIncluso.innerHTML = "Frete Incluso"

            let inputFreteIncluso = document.createElement("select")
            inputFreteIncluso.setAttribute("class", "inputFreteIncluso")
            
            //Criando opções do frete incluso + append das opções dentro do campo.
                let opNaoInformado = document.createElement("option")
                opNaoInformado.innerHTML = "-"

                let opSim = document.createElement("option")
                opSim.innerHTML = "Sim"

                let opNao = document.createElement("option")
                opNao.innerHTML = "Não"

                inputFreteIncluso.appendChild(opNaoInformado)
                inputFreteIncluso.appendChild(opSim)
                inputFreteIncluso.appendChild(opNao)

        //Criando campo e label referente ao campo "Observacao".
            let labelObservacao = document.createElement("label")
            labelObservacao.innerHTML = "Observação"

            let inputObservacao = document.createElement("input")
            inputObservacao.setAttribute("type", "text")
            inputObservacao.setAttribute("class", "inputObservacao")

        //Criando botão de remover item.
            let btnRemoverItem = document.createElement("span")
            btnRemoverItem.setAttribute("id", `btnRemoverItem${numIndiceDivItem}`)
            btnRemoverItem.setAttribute("title", "Remover Item")
            btnRemoverItem.setAttribute("class", "btnRemoverItem")
            btnRemoverItem.innerHTML = String.fromCharCode(215)

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

    //Append dos elementos da div referente ao valor total.
    arrayDivItem[4].appendChild(labelValorTotal)
    arrayDivItem[4].appendChild(inputValorTotal)

    //Append dos elementos da div referente ao ICMS.
    arrayDivItem[5].appendChild(labelIcms)
    arrayDivItem[5].appendChild(inputIcms)

    //Append dos elementos da div referente ao PIS/COFINS
    arrayDivItem[6].appendChild(labelPisCofins)
    arrayDivItem[6].appendChild(inputPisCofins)

    //Append dos elementos da div referente ao IPI
    arrayDivItem[7].appendChild(labelIpi)
    arrayDivItem[7].appendChild(inputIpi)

    //Append dos elementos da div referente ao campo "Outros"
    arrayDivItem[8].appendChild(labelOutros)
    arrayDivItem[8].appendChild(inputOutros)

    //Append dos elementos da div referente ao cond. pagto
    arrayDivItem[9].appendChild(labelCondPagto)
    arrayDivItem[9].appendChild(inputCondPagto)

    //Append dos elementos da div referente ao prazo entrega
    arrayDivItem[10].appendChild(labelPrazoEntrega)
    arrayDivItem[10].appendChild(inputPrazoEntrega)

    //Append dos elementos da div referente ao frete incluso
    arrayDivItem[11].appendChild(labelFreteIncluso)
    arrayDivItem[11].appendChild(inputFreteIncluso)

    //Append dos elementos da div referente ao campo "observação"
    arrayDivItem[12].appendChild(labelObservacao)
    arrayDivItem[12].appendChild(inputObservacao)

    //Append do botão de remover item.
    arrayDivItem[13].appendChild(btnRemoverItem)

        //Função do botão de remover o item.
        document.getElementById(`btnRemoverItem` + numIndiceDivItem).addEventListener("click", function(){
            //Vai receber o número de indice atual do item criado.
            indiceItem = numIndiceDivItem - 1
            alert(indiceItem)

            //Remove o item.
            secItens.removeChild(arrayItem[indiceItem])

            //Atualiza os números de item de cada item.
            for (let i = 0; i <= arrayItem.length; i++){
                document.getElementsByClassName("inputItem")[i].value = i + 1
            }
        })

    //numIndiceDivItem incrementa um valor para as divs do próximo item. Isso evita que as divs de cada item sejam incorporadas no item anterior.
    numIndiceDivItem += 1
}

function removerTudo(){
    secItens.innerHTML = null
}