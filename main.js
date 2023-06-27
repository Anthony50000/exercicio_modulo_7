const  form = document.getElementById('form');
const eValido = document.getElementById('eValido');
const naoeValido = document.getElementById('naoEValido');

eValido.style = "display:none";
naoeValido.style = "display:none";

function validarFormulario() {
    const campoA = parseInt(document.getElementById('campo-a').value);
    const campoB = parseInt(document.getElementById('campo-b').value);
    if (campoA < campoB){
        return true
    }
    else{ 
        return false
    }
}

form.addEventListener('submit',function(e) {
    e.preventDefault();
    var result = validarFormulario();
    if(result){
        eValido.style = "display:block";
        naoeValido.style = "display:none";
    }
    else{
        eValido.style = "display:none";
        naoeValido.style = "display:block";
    }
});

