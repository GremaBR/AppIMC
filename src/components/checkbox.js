function verificarCheckBox() {
    const checkbox = document.querySelectorAll(".check")

    if (checkbox){
        criarCheckBox(checkbox)
    }
}

/**
 * @param {Array} checkbox
 */

function criarCheckBox() {
    checkbox.forEach(checkbox => {
        let label = document.createElement('input');
        checkbox.type =  'checkbox';
    }) 
    
}

verificarCheckBox();