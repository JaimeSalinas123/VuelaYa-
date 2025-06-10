document.addEventListener('DOMContentLoaded', function() {
    const idaVueltaBtn = document.getElementById('ida-vuelta');
    const soloIdaBtn = document.getElementById('solo-ida');
    const fechaRegresoCol = document.getElementById('fecha-regreso-col');
    const tipoViajeBtns = document.querySelectorAll('.tipo-viaje-btn');
    const presupuestoInput = document.getElementById('presupuesto-input');
    const opcionesPresupuesto = document.getElementById('opciones-presupuesto');
    const opciones = document.querySelectorAll('.opcion-presupuesto');

    function cambiarTipoViaje(tipo) {
        tipoViajeBtns.forEach(btn => btn.classList.remove('active'));
        
        if(tipo === 'ida-vuelta') {
            idaVueltaBtn.classList.add('active');
            fechaRegresoCol.style.display = 'block';
        } else {
            soloIdaBtn.classList.add('active');
            fechaRegresoCol.style.display = 'none';
        }
    }
    
    idaVueltaBtn.addEventListener('click', function() {
        cambiarTipoViaje('ida-vuelta');
    });
    
    soloIdaBtn.addEventListener('click', function() {
        cambiarTipoViaje('solo-ida');
    });
    
    presupuestoInput.addEventListener('click', function() {
        opcionesPresupuesto.classList.toggle('mostrar');
    });
    
    opciones.forEach(opcion => {
        opcion.addEventListener('click', function() {
            presupuestoInput.value = this.textContent;
            opcionesPresupuesto.classList.remove('mostrar');
        });
    });
    
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.presupuesto-selector')) {
            opcionesPresupuesto.classList.remove('mostrar');
        }
    });
    
    cambiarTipoViaje('ida-vuelta');
});