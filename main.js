const resultado = document.querySelector('.result');
const confirmar = document.querySelector('.equal');

insert = (valor) =>{
  resultado.innerHTML += valor
}
        
clean = () =>{
  resultado.innerHTML = ' ' 
}

backspace = () =>{
  //Se o conteúdo textual que está sendo inserido no resultado
  if(resultado.textContent){
    //Aqui criei a variável result que irá armazenar tudo que vai dentro do id no (p) html 
    let result = document.getElementById('resultado').innerHTML
    resultado.innerHTML = result.substring(0, result.length -1)
  }
}

confirma = () => {
  if(resultado.textContent != 'Erro'){
    //função Eval avalia o expressão de cadeia de caracteres e retorna seu valor.
    document.getElementById('resultado').innerHTML = eval(resultado.innerHTML)
  }
}
