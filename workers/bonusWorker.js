let intervalId;
let bonusActive = false;  // Controlar si hay un bonus activo

function startGeneratingBonus() {
    if (!bonusActive) {  // Solo generar un bonus si no hay uno activo
        intervalId = setInterval(() => {
            const bonusX = Math.random() * 800; // Coordenada X aleatoria
            const bonusY = 0; // Siempre arriba de la pantalla
            postMessage({ x: bonusX, y: bonusY });
            bonusActive = true;  // Marcar como activo
        }, 5000); // Generar cada 5 segundos
    }
}

onmessage = function(event) {
    if (event.data === 'start') {
        startGeneratingBonus();
    } else if (event.data === 'bonusCollected' || event.data === 'bonusRemoved') {
        bonusActive = false;  // Permitir nuevo bonus al recogerlo o eliminarlo
    } else if (event.data === 'stop') {
        clearInterval(intervalId);
    }
};
