document.querySelector('.X').addEventListener('click', function() {
    document.querySelector('.tarjeta').style.display = 'none';
});

// Función para cambiar el color de fondo de la tarjeta
document.querySelector('.tarjeta').addEventListener('dblclick', function() {
    const colores = ['lightblue', 'lightgreen', 'lightpink', 'lightyellow', 'lightcoral'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    this.style.backgroundColor = colorAleatorio;
});

// Función para mostrar la edad y raza al pasar el mouse
document.querySelector('.imagen img').addEventListener('mouseover', function() {
    const edad = document.querySelector('.edad').innerText;
    const raza = document.querySelector('.raza').innerText;
    alert(edad + '\n' + raza);
});     