    var elm = document.getElementsByClassName('elemento')
    var elmlen = elm.length
function resetar(){
    for(i=0;i<elmlen;i++){
        if(elm[i].value != ""){
            elm[i].value = ""
        }
    }
    var lista = document.getElementById('listador')
    if(lista.innerHTML != ""){
        lista.innerHTML = ""
    }
}
function listar(){
    var geral = document.getElementById('tabela')
    var listagem = document.getElementById('listador')
    
    for(i=0;i<elmlen;i++){
        if(listagem.innerHTML != ""){
            
            listagem.innerHTML += "<p>"+[i]+elm[i].value+"</p>"
        }
    }

}