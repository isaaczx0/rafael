function clearDisplay(){
    document.getElementById('display').value = '';
}
function deleteDisplay(){
    document.getElementById('display').value = '';
}
function appendCharacter(Character){
    document.getElementById('display').value += Character;
}
function calculateResult(){
    const display = document.getElementById('display');
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = 'Erro'
    }
}