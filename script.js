function calculaArea(){
    var base = document.getElementById('base').value
    var altura = document.getElementById('altura').value
    var resposta = document.getElementById('res')

    base=Number(base)
    altura=Number(base)
    total=base*altura

    res.innerHTML=`Área = ${total}`

}