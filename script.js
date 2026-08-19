<<<<<<< HEAD
function cambiarHoja(idHojaTarget) {
        // Ocultar todas las cartas
        document.querySelectorAll('.carta').forEach(carta => {
            carta.classList.add('oculta');
        });
        
        // Mostrar la hoja seleccionada
        const hojaTarget = document.getElementById(idHojaTarget);
        hojaTarget.classList.remove('oculta');

        // Reiniciar la animación CSS
        hojaTarget.style.animation = 'none';
        hojaTarget.offsetHeight; /* trigger reflow */
        hojaTarget.style.animation = null;
=======
function cambiarHoja(idHojaTarget) {
        // Ocultar todas las cartas
        document.querySelectorAll('.carta').forEach(carta => {
            carta.classList.add('oculta');
        });
        
        // Mostrar la hoja seleccionada
        const hojaTarget = document.getElementById(idHojaTarget);
        hojaTarget.classList.remove('oculta');

        // Reiniciar la animación CSS
        hojaTarget.style.animation = 'none';
        hojaTarget.offsetHeight; /* trigger reflow */
        hojaTarget.style.animation = null;
>>>>>>> 0234489a2c8a714bb21b6c3730d195b0171b4e1b
    }