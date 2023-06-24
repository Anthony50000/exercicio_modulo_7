const  form = document.getElementById('form');
const eValido = document.getElementById('eValido')
const naoeValido = document.getElementById('naoEValido')
let formEValido = false

function validarFormulario() {
    var campoA = document.getElementById("campoA").value;
    var campoB = document.getElementById("campoB").value;

    if (campoB <= campoA) {
        alert("O número B deve ser maior que o número A!");
    }
}
form.addEventListener('submit',function(e) {
    e.preventDefault();
    formEValido = validarFormulario(campoA, campoB);
})
