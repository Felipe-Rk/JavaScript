function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    
    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex');
        var img = document.createElement('img') // cria um elemento img com nome img
        img.setAttribute('id', 'foto') // cria um atributo id = foto para o elemento img
        var idade = ano - fano.value; 
        res.innerHTML = `Idade calculada: ${idade}`
        if (fsex[0].checked) { // fsex[0] se a variavel fsex possui o indice 0 selecionado
            genero = 'Homem'
            if (idade >=0 && idade <= 10){
                //criança
                img.setAttribute('src','h-crianca.png') // adiciona uma foto ao atributo img
                res.innerHTML = `Criança com ${idade} anos.`
            }else if(idade <= 18){
                //adolescente
                img.setAttribute('src','h-jovem.png')
                res.innerHTML = `Pessoa adolescente com ${idade} anos.`
            }else if(idade <=35){
                //adulto
                res.innerHTML = `Pessoa adulta com ${idade} anos.`
                img.setAttribute('src','h-adulto.png')
                
            }else if(idade <= 60){
                //meia idade
                img.setAttribute('src','h-meia.png')
                res.innerHTML = `Pessoa de meia idade com ${idade} anos.`
            }else if(idade >= 61){
                //idoso
                img.setAttribute('src','h-idoso.png')
                res.innerHTML = `Pessoa idosa com ${idade} anos.`
            }
        } else if (fsex[1].checked) { //fsex[1] se a variavel fsex possui o indice 1 selecionado
            genero = 'Mulher'
            if (idade >=0 && idade <= 10){
                //criança
                img.setAttribute('src','m-crianca.png')
                res.innerHTML = `Criança com ${idade} anos.`
            }else if(idade <= 18){
                //adolescente
                img.setAttribute('src','m-jovem.png')
                res.innerHTML = `Pessoa jovem com ${idade} anos.`
            }else if(idade <=35){
                //adulto
                img.setAttribute('src','m-adulta.png')
                res.innerHTML = `Pessoa adulta com ${idade} anos.`
            }else if(idade <= 60){
                //meia idade
                img.setAttribute('src','m-meia.png')
                res.innerHTML = `Pessoa de meia idade com ${idade} anos.`
            }else if(idade >= 61){
                //idoso
                img.setAttribute('src','m-idosa.png')
                res.innerHTML = `Pessoa idosa com ${idade} anos.`
            }
        }
        res.style.textAlign = 'center' //centralizar texto usando JS
        res.appendChild(img) // adiciona o elemento criado img a baixo do texto de res, junto ao elemento res
    }
}