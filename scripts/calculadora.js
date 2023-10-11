function calcular(){
        event.preventDefault();
    //criar uma variavel para cada numero 
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let op = document.getElementById('operacao').value;
    let resultado;
    console.log(n1);
    console.log(n2);

    if (isNaN(n1) || isNaN(n2)) {
        alert("É necessário digitar apenas números");
        return;
    }
    if (op == '+') {
        resultado = somar(n1,n2);
    } else if (op == '-') {
        resultado = subtrair(n1,n2);
    } 
      else if(op == '*') {
        resultado = multiplicar(n1,n2);
    } 

     else if (op == '/') {
        resultado = dividir(n1,n2);
    } 
    else{
        resultado ="Operação Invalida!"
    }

    document.getElementById('result').innerText = resultado;

}
function somar(x,y){
    return x + y;
}

function subtrair(x,y){
    return x - y;
}
function multiplicar(x,y){
    return x * y;
}
function dividir(x,y){
    return x / y;
}