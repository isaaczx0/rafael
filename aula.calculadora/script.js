function soma(){
    result.value = parseInt(v1.value) + parseInt(v2.value);
}
function sub(){
    result.value = parseInt(v1.value) - parseInt(v2.value);
}
function mult(){
    result.value = parseInt(v1.value) * parseInt(v2.value);
}
function div(){
    if(v2.value == 0){
        alert("Erro! Divisao por 0")
    }
    result.value = parseInt(v1.value) / parseInt(v2.value);
}