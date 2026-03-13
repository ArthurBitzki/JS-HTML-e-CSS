let num = document.getElementById('txtnum')
let lista= document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item= document.createElement('option')
        item.text = `valor ${num.value} adicionado` 
        lista.appendChild(item)
    }else{
        window.alert('valor invalido ou ja na lista')
    }
    num.value = ''
    num.focus()
    res.innerHTML = ''
}
function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100)
        return true
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false 
    }
}

function finalizar(){
    if(valores == 0 ){
        window.alert('não há valores')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media= 0
        for(let pos in valores){
            soma +=valores[pos]
            if(valores[pos]> maior)
                maior = valores[pos]
            if(valores[pos]< menor)
                menor = valores[pos]
        }
        media= soma/total
        res.innerHTML = ''
        res.innerHTML += `<p>ao todo temos ${total} numeros inseridos</p>`
        res.innerHTML += `<p>o maior valor informado foi ${maior} </p>`
        res.innerHTML += `<p>o menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>a soma de todos os valores é ${soma} </p>`
        res.innerHTML += `<p>a média dos valores é ${media}</p>`
    }
}