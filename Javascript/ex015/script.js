function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'homem1.png');
            }else if(idade <21){
                img.setAttribute('src', 'homem2.png');
            }else if(idade < 50){ 
                img.setAttribute('src', 'homem3.png');
            }else{
                img.setAttribute('src', 'homem4.png');
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'mulher1.png');
            }else if(idade <21){
                img.setAttribute('src', 'mulher2.png');
            }else if(idade < 50){ 
                img.setAttribute('src', 'mulher3.png');
            }else{ 
                img.setAttribute('src', 'mulher4.png');   
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }

}