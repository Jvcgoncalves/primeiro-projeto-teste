function clicar() {
    var nota1 = document.getElementById('nota1')
    var nota2 = document.getElementById('nota2')
    var nota3 = document.getElementById('nota3')
    var nota4 = document.querySelector('input#nota4')
    var nome = document.getElementById('nome1')
    var res = document.querySelector('div#res')
    var n1 = Number(nota1.value)
    var n2 = Number(nota2.value)
    var n3 = Number(nota3.value)
    var n4 = Number(nota4.value)
    var media = (n1 + n2 + n3 + n4) / 4

    if (nota1.value.length == 0 || nota2.value.length == 0 || nota3.value.length == 0 || nota4.value.length == 0 || nome.value.length == 0) {
        res.innerHTML = (`<strong>!!!Confira os dados e tente novamente!!!</strong>`)
    } else if (nota1.value > 10 || nota2.value > 10 || nota3.value > 10 || nota4.value > 10) {
        res.innerHTML = (`<strong>!!!Confira os dados e tente novamente!!!</strong>`)
    } else {
        if (media >= 7) {
            res.innerHTML = (`A média do aluno ${nome.value} foi de ${media.toFixed(2).replace('.', ',')} pontos. Com essa média final o aluno foi aprovado. `)
        } else {
            res.innerHTML = (`A média do aluno ${nome.value} foi de  ${media.toFixed(2).replace('.', ',')} pontos. Com essa média o aluno foi reprovado. `)
        }
    }




















}