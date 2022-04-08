let num = document.getElementById('txtn')
let sel = document.getElementById('selnum')
let res = document.getElementById('res')
let lista = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, lista)){
        lista.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        sel.append(item)
        res.innerHTML = ''
    }else{
        alert('Valor invalido ou já encontrado na lista.')
        
    } 
}

function finalizar(){
    if (lista.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let maior = lista[0]
        let menor = lista[0]
        let soma = 0
        let media = 0
        for(let pos in lista){
            soma += lista[pos]
            if (lista[pos] > maior){
                maior = lista[pos]
            } if(lista[pos]< menor){
                menor = lista[pos]
            }
        }
        media = soma / lista.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrado.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valors digitados é ${media}</p>.`
    }
     

}