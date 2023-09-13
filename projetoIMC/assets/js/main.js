//Capturar o evento de submit do formulário

const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value/100);

    if(!peso){ //se o peso for diferente de true
        setResultado('Peso inválido', false);
        return
    }

    if(!altura){ //se altura for diferente de true
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);
    //Continua o código...
});

// Menos do que 18,5	Abaixo do peso
// Entre 18.5 e 24.9	Peso normal
// Entre 25 e 29,9	Sobrepeso
// Entre 30 e 34,9	Obesidade grau 1
// Entre 35 e 39,9	Obesidade grau 2
// Mais do que 40	Obesidade grau 3


function getNivelImc (imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesividade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    // Podemos usar apenas o if, sabemos que quando usamos o if a função continua rodando mesmo que a condição seja aceita, porém quando usamos return a função pararia de qualquer forma mesmo usando o if

    //quando for apenas uma linha de código, usando o return podemos abdicar das aspas

    
    if(imc >= 39.9) return nivel[5];
    
    
    if (imc >= 34.9) return nivel[4];
    
    
    if (imc >= 29.9) return nivel[3];
    
    
    if (imc >= 24.9) return nivel[2];
    
    if (imc >= 18.5) return nivel[1];
    
    if (imc < 18.5) return nivel[0];}


function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP (){
    const p = document.createElement('p');
    return p;


}

//quando ela for executada, o parâmetro passado irá ser escrito no html #resultado
function setResultado (msg, isValid){ 
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';


    const p = criaP();

    //paragrafo-resultado é uma class que muda cor
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else{
        p.classList.add('bad')
    } 

    p.innerHTML = msg;
    resultado.appendChild(p);

    
    
}



