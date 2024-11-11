function contar(){
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var result = document.getElementById('res')

    console.log(`inicio: ${inicio} fim: ${fim} passo: ${passo}`)
    
    if(inicio == null || inicio == 0 || fim == null || fim == 0){
        result.innerHTML = 'Valor de inicio e fim não pode ser vazio'
    }else{
        if(passo == 0 || passo == null ){
            passo = 1
        }
        result.innerHTML = 'Contado: <br>'
        if(inicio < fim){
            //contagem crescente
            for(var resultado = inicio; resultado <= fim ; resultado += passo){
                result.innerHTML += `\u{1F449}${resultado}`
            }
        }else if(inicio > fim){
            //contagem Decrescente
            for(var resultado = inicio; resultado > fim ; resultado -= passo){
                result.innerHTML += `\u{1F449}${resultado} `
            }
        }
        result.innerHTML += ' \u{1F3C1}'
    }
}   