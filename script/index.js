let imprime = document.querySelector('#imprime');
document.querySelector('#clear')
    .addEventListener('click', function(){
        imprime.value = 0;
})
document.querySelector('#borrar')
    .addEventListener('click', function(){
        imprime.value = imprime.value.substring(0, (imprime.value.length -1));
       
})
function addNumeros(value){
    const operationSigns = ['*','+','-','/','.'];
    imprime.value += value;

    if (operationSigns.includes(value)){
        let valorAnterior = imprime.value.length - 2;
        console.log(imprime.value.length)
        console.log(imprime.value)
            console.log(valorAnterior)
            console.log(imprime.value[valorAnterior])
        if (operationSigns.includes(imprime.value[valorAnterior])){
            imprime.value = imprime.value.substring(0, (imprime.value.length - 2));
            imprime.value = imprime.value + value;
        }
    }console.log(imprime.value[0])
    switch (imprime.value[0]){
        
        case '*':
            imprime.value = '';
        case '/':
            imprime.value = '';
        case '.':
            imprime.value = '';
    }
}
function result(){
    imprime.value = eval(imprime.value);
}

