const  form = document.getElementById('form');
const eValido = document.getElementById('eValido')
const naoeValido = document.getElementById('naoEValido')


form.addEventListener('submit',function(e) {
    e.preventDefault();
    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');

    if ((campoA.value) <= (campoB.value)) {
        alert('eValido');
    } else {
        alert('nao e valido')
    }
}) 
