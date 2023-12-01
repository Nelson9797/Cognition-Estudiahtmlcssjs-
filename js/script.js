document.addEventListener("DOMContentLoaded", function() {
    const categorias = document.getElementById('categoria');
    const opcionesMenu = document.querySelectorAll('nav a');

    opcionesMenu.forEach(opcion => {
        opcion.addEventListener('click', function(event) {
            const textoOpcion = this.textContent.trim().toLowerCase();
            const categoriasOptions = categorias.options;

            for (let i = 0; i < categoriasOptions.length; i++) {
                if (categoriasOptions[i].textContent.toLowerCase() === textoOpcion) {
                    categorias.selectedIndex = i;
                    return; // Salir de la función aquí si se encontró la opción
                }
            }
            
            // Si no se encontró la opción, permitir el comportamiento predeterminado del enlace
        });
    });
});
