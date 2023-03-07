function calcular() {
    var altura = document.getElementById('alt')
    var peso = document.getElementById('kg')
    var res = document.getElementById('res')
    var sexo = document.getElementsByName('sexo')

    if (altura.value.length == 0 || peso.value.length == 0) {
        alert('erro')
    } else {
        var img = document.createElement('img')
        var a = Number(altura.value)
        var p = Number(peso.value)
        var pesoM = p / (a ** 2)
        if (sexo[0].checked) {

            res.innerHTML = `<p>O seu IMC é ${pesoM.toFixed(2)}, para calcular o IMC basta dividir seu peso pela sua altura<sup>2</sup>. Já o sexo <strong>não tem influencia</strong> no calculo IMC, utilizamos <strong>apenas</strong> para pesquisas.</p>`
            img.setAttribute('src', 'imagens/tabela-imc.png')

        } else if (sexo[1].checked) {
            res.innerHTML = `<p>O seu IMC é ${pesoM.toFixed(2)}, para calcular o IMC basta dividir seu peso pela sua altura<sup>2</sup>. Já o sexo <strong>não tem influencia</strong> no calculo IMC, utilizamos <strong>apenas</strong> para pesquisas.</p>`
            img.setAttribute('src', 'imagens/tabela-imc.png')
        }
        res.appendChild(img)
    }

}