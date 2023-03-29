let num = document.getElementById('num')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, n1){
    if (n1.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar () {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = [0]
        let média = [0]
        for (let  pos in valores) {
            soma = valores.reduce((acumulador,valorAtual) => acumulador + valorAtual, 0)
            if (valores[pos] > maior ) {
                maior = valores [pos]
            }
            if (valores[pos > maior]) {
                maior = valores [pos]
            }
            
        }
        média = soma / total
        res.innerHTML = ''
        res.innerHTML += `<P>Ao todo temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior número é o ${maior}</p>`
        res.innerHTML += `<p>O menor número é o ${menor}</p>`
        res.innerHTML += `<p>Somando os valores nós temos ${soma} </p>`
        res.innerHTML += `<p>A média dos valores é ${média} </p>`

    }
}