function procurarButton(){
    const buttons = document.querySelectorAll(".button")

    if(buttons){
        criarButton(buttons)
    }
}

/**
 * @param {Array} buttons
 */

function criarButton(buttons){
    buttons.forEach(buttonParam => {
        let button = document.createElement('button');
        button.innerHTML = tipoButton(buttonParam);
        button.classList.add = tipoButton(buttonParam);
        buttonParam.appendChild(button);
    });

}
procurarButton();

function tipoButton(button){
    const tipo = button.getAttribute("data-button");

    if(tipo === "calcular-meu-IMC"){
        return "Calcular meu IMC";
    }
    else if(tipo === "calculo"){
        return "Entenda o cálculo"
    }
}


