function verificarInputs(){
  const inputs = document.querySelectorAll('.input');

  if(inputs){
    criarInput(inputs)
  }
}

/**
 * @param {Array} inputs
 */

function criarInput(inputs){
  inputs.forEach(inputParam => {
    let input = document.createElement('input');
    input.classList.add("input");
    input.type = tipoInput(inputParam);
    input.placeholder = placeholder(inputParam)
    inputParam.appendChild(input);
  })
}

/**
 * @param {Element} input
 */

function tipoInput(input){
  const tipo = input.getAttribute('data-input');

  const tiposPermitidos = {
    'text': 'text',
    'email': 'email',
    'password': 'password'
  };

  return tiposPermitidos[tipo] || 'text'
}

function placeholder(input){
  return input.getAttribute("data-placeholder") || "";
}

verificarInputs()



