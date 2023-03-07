function calcular() {
    var valor = document.getElementById('total')
    var juros = document.getElementById('juros')
    var dias = document.getElementById('dia')
    var res = document.getElementById('res')
    var tip = document.getElementsByName('tipo')

    if (valor.value.length == 0 || dias.value.length == 0 || juros.value.length == 0) {
        alert('erro')
    } else {
        res.innerHTML = ''
        var v = Number.parseFloat(valor.value)
        var j = Number.parseFloat(juros.value)
        var d = Number.parseFloat(dias.value)
        if (tip[0].checked) {
            var aplicação = v * (j / 100) * d
            var resulF = v + aplicação
            res.innerHTML = `Ao investir ${v.toLocaleString('pt-BR', { style: "currency", currency: 'BRL' })} com juros simples de ${j}% ao dia, o rendimento total após ${d} é igual a ${resulF.toLocaleString('pt-BR', { style: "currency", currency: 'BRL' })}.`
        } else if (tip[1].checked) {
            var aplicação2 = v * ((1 + (j / 100)) ** d)
            res.innerHTML = `Ao investir ${v.toLocaleString('pt-BR', { style: "currency", currency: 'BRL' })} com juros compostos de ${j}% ao dia, o rendimento total após ${d} é igual a ${aplicação2.toLocaleString('pt-BR', { style: "currency", currency: 'BRL' })}. `
        }
    }

}