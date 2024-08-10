// Cargar el contenido de la barra de navegación y el footer
fetch('../Includes/Navegacion.html').then(response => response.text()).then(data => {
    document.getElementById('navbar').innerHTML = data;
    // Cargar el script de la barra de navegación
    const script = document.createElement('script');
    script.src = 'JS/Navegacion.js';
    document.body.appendChild(script);
});

fetch('../Includes/Footer.html').then(response => response.text()).then(data => {
    document.getElementById('footer').innerHTML = data;
    // Cargar el script del footer
    const script = document.createElement('script');
    script.src = 'JS/Footer.js';
    document.body.appendChild(script);
});
