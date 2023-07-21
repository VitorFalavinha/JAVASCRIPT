function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

    if (fsex[0].checked){
        genero = 'Homem'
        if (idade >=0 && idade < 10){
            img.setAttribute('src', 'imagens/criança.menino.jpg')
            
        } else if (idade < 21){
            img.setAttribute('src', 'imagens/adolescente.menino.jpg')
        } else if (idade < 50){
            img.setAttribute('src', 'imagens/adulto.homem.jpg')
        } else {
            img.setAttribute('src', 'imagens/idoso.homem.jpg')
        }


    }else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >=0 && idade < 10){
            img.setAttribute('src', 'imagens/criança.menina.jpg')
        } else if (idade < 21){
            img.setAttribute('src', 'imagens/adolescente.menina.jpg')
        } else if (idade < 50){
            img.setAttribute('src', 'imagens/adulto.mulher.jpg')
        } else {
            img.setAttribute('src', 'imagens/idoso.mulher.jpg')
        }
    }
    res.style.textAlign = 'center'
    img.style.borderRadius = '25px'
    img.style.marginTop = '15px'
    img.style.boxShadow = '2px 2px 10px white'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}
}