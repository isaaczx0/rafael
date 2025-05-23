let x = 10;
const y = 20;
var z = 30;

if(true)
{
    let x = 100;
    const y = -20;
    var z = 300;

    console.log("dentro do bloco: ", x, y, z);
}
console.log("Fora do bloco: ", x, y, z);