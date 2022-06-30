function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERROR] Verifique novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // <img id='foto'>

        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', '')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', '')

            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', '')

            } else {
                // idoso
                img.setAttribute('src', '')

            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', '')

            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', '')

            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', '')

            } else {
                // idoso
                img.setAttribute('src', '')

            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `pessoa do sexo ${genero} com idade de ${idade} anos`
        res.appendChild(img)
    }
}