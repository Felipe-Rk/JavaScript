function  gerar(){
    var num = Number(document.getElementById('num').value)
    var res = document.getElementById('res')

    if(!num){
        alert('Digite um número valido')
    }else {
        res.innerHTML = ''
        for(cont = 1;cont <= 10;cont++){
            var item = document.createElement('option')
            item.text = `${num}x${cont} = ${num*cont}`
            item.value = `res${cont}` // acrescenta um valor para receber a seleção
            res.appendChild(item)
        }
    }
  
}

//pegar o numero digitado e multiplicar vezes de 0 a 10 