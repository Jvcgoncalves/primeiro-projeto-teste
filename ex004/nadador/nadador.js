function registrar() {
    var nome = document.getElementById('nome1')
    var sobreN = document.querySelector('input#sobrenome')
    var idade = document.getElementById('idade')
    var res = document.querySelector('div#res')
    if (nome.value.length == 0 || sobreN.value.length == 0 || idade.value.length == 0) {
        alert('erro')
    } else {
        var age = Number(idade.value)
        var img = document.createElement('img')
        res.innerHTML = ''
        if (age < 5) {
            //Não pode ser categorizado
            res.innerHTML = `O(A) aluno(a) ${nome.value} ${sobreN.value} não pode praticar a atividade, pois é muito novo(a) para  se encaixar em uma categoria (<strong>mínimo 5 anos</strong>).`
        }
        else if (age >= 5 && age <= 7) {
            //Infantil-A
            res.innerHTML = `<p id="a">O(A) aluno(a) ${nome.value} ${sobreN.value} foi aprovado(a) para participar da atividade, participando na categoria <strong>infantil-A</strong></p>`
            img.setAttribute('src', 'imagens/criança-5-7.png')

        } else if (age <= 10) {
            //Infantil-B
            res.innerHTML = `<p id="b">O(A) aluno(a) ${nome.value} ${sobreN.value} foi aprovado(a) para participar da atividade, participando na categoria <strong>infantil-B</strong></p>`
            img.setAttribute('src', 'imagens/criança-8-10.png')
        } else if (age <= 13) {
            //mirim
            res.innerHTML = `<p id="m">O(A) aluno(a) ${nome.value} ${sobreN.value} foi aprovado(a) para participar da atividade, participando na categoria <strong>mirim</strong></p>`
            img.setAttribute('src', 'imagens/mirim-11-13.png')
        } else if (age <= 17) {
            //juvenil
            res.innerHTML = `<p id="j">O(A) aluno(a) ${nome.value} ${sobreN.value} foi aprovado(a) para participar da atividade, participando na categoria <strong>juvenil</strong> </p>`
            img.setAttribute('src', 'imagens/juvenil-14-17.png')
        } else if (age <= 65) {
            //senior
            res.innerHTML = `<p id="s">O(A) aluno(a) ${nome.value} ${sobreN.value} foi aprovado(a) para participar da atividade, participando na categoria <strong>senior</strong> </p>`
            img.setAttribute('src', 'imagens/senior-18+.png')
        } else {
            //inexistente
            res.innerHTML = `Desculpe, mas nao conseguimos encaixar o(a) aluno(a) ${nome.value} ${sobreN.value} em nenhuma categoria`
            res.innerHTML += `\u{1F62C}`
        }

        res.appendChild(img)
    }
}