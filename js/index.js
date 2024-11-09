const checkboxes = document.querySelectorAll('#form .form-check-input');
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', updateIngredientes);
}
let valorbase = 15000;
let ingredientesextras = 800; 


function updateIngredientes() {
    let selecionados = [];
    let maximoIngredientes = 3; 
    let costoIngredientes = 0; 

    for(let i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            if(selecionados.length < maximoIngredientes) {
                selecionados.push(checkboxes[i].value || checkboxes[i].id);
                costoIngredientes += ingredientesextras;
            }
        }
    }

    let ingredientes = ""; 
    if (selecionados.length > 0) {
        for (let i = 0; i < selecionados.length; i++) {
            ingredientes += selecionados[i];
            if(i < selecionados.length - 1) {
                ingredientes += ", "
            }
            
        }
    } else {
        ingredientes = "Ninguno";
    }
    const ingredientestexto = document.getElementById('ingredientesselecionados');
    ingredientestexto.textContent = ingredientes;
}

// function ingredientesextras() {
//     let extras = [];
//     for (let i = 0; i < checkboxes.length; i++) {
//         if(checkboxes[i].checked){
//             extras.push(checkboxes[i].value || checkboxes[i].id);
//         }
//     }

//     let extrastexto = "";
//     if(extras.length > 0) {
//         for(let i = 0; i < extras.length; i++){
//             extrastexto += extras[i];
//             if(i < extras.length - 1){
//                 extrastexto += ", "
//             }
//         }
//     } else {
//         extrastexto = "Ninguno";
//     }
//     const ingredientesextrastexto = document.getElementById ('ingredientesextras');
//     ingredientesextrastexto.textContent = ingredientesextras;
//     return ingredientesextras;
// }