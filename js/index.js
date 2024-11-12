const checkboxes = document.querySelectorAll('#form .form-check-input');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => updateIngredientes(3, 800, 15000, 1000));
})

function updateIngredientes(maximoIngredientes = 3, costoIngredienteExtra = 800, costoBase = 15000, propinaBase = 1000) {
    let seleccionados = [];
    let extras = [];
    let costoExtra = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            if (seleccionados.length < maximoIngredientes) {
                seleccionados.push(checkbox.value || checkbox.id);
            } else {
                extras.push(checkbox.value || checkbox.id);
                costoExtra += costoIngredienteExtra;
            }
        }
    });

    document.getElementById('ingredientesSeleccionados').textContent =
        seleccionados.length > 0 ? seleccionados.join(", ") : "Ninguno";
    document.getElementById('ingredientesExtras').textContent =
        extras.length > 0 ? extras.join(", ") : "Ninguno";
    document.getElementById('costoExtras').textContent = `Costo de ingredientes extras: $${costoExtra}`;

    const propinaInput = document.getElementById('propinaTexto');
    let propina = parseFloat(propinaInput.value);
    if (isNaN(propina)) {
        propina = propinaBase
    }

    const propinatexto = document.getElementById('propina2');
    if(propinatexto) {
        propinatexto.textContent = `Propina: $${propina}`
    }
    let total = costoBase + costoExtra + propina;
    document.getElementById('total').textContent = `Total: $${total}`;
}

document.getElementById('propinaTexto').addEventListener('input', () => updateIngredientes(3, 800, 15000, 1000));

document.getElementById('botonpropina').addEventListener('click', () => {
    const propinaInput = document.getElementById('propinaTexto');
    if (!propinaInput.value || parseFloat(propinaInput.value) === 0) {
        propinaInput.value = 1000;
    }
    updateIngredientes(3, 800, 15000, 1000);
    const propina = parseFloat(propinaInput.value) || 0;
    alert(`Su propina de $${propina} ha sido enviada`)
})