function calcular() {
    var n1 = document.getElementById('nmr1')
    var n2 = document.querySelector("input#nmr2")
    var res = document.getElementById('res')
    var calc = document.getElementsByName('calculo')

    if (n1.value.length == 0 || n2.value.length == 0) {
        alert('erro')
    } else {
        var num1 = Number(n1.value)
        var num2 = Number(n2.value)

        if (calc[0].checked) {
            res.innerHTML = `A soma entre ${num1} + ${num2} é igual a ${num1 + num2}`

        } else {
            res.innerHTML = `A subtração entre ${num1} - ${num2} é igual a ${num1 - num2}`
        }

    }




}