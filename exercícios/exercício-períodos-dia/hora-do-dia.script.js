function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    
    
    if (hora >= 0 && hora < 12){
        msg.innerHTML = `<strong>BOM DIA!</strong> <br> Agora são ${hora}:${minutos}`
        img.src = 'imagens/morning.jpg'
        
    }else if (hora >= 12 && hora <= 17){
        img.src = 'imagens/afternoon.jpg'
        msg.innerHTML = `<strong>BOA TARDE!</strong> <br>Agora são ${hora}:${minutos}`
    }else {
        msg.innerHTML = `<strong>BOA NOITE!</strong> <br>Agora são ${hora}:${minutos}`
        img.src = 'imagens/night.jpg'
        document.body.style.background = '#323283'
    }

}