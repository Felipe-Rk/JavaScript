function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var saudacao = document.getElementById('saudac')
    var data = new Date();
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} Horas`

    if(hora >= 8 && hora < 12){
        //bom dia
        img.src = 'manha.png' 
        document.body.style.background = 'rgb(250 234 200)'
        saudacao.innerHTML = 'Bom dia'
        
    } else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = 'rgb(255 103 5)'
        saudacao.innerHTML = 'Boa tarde'
        document.getElementById('imagem').style.width = '340px';
    }else{
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = 'rgb(0 38 88)'
        saudacao.innerHTML = 'Boa noite'
    }
}

