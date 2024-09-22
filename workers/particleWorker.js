self.onmessage = function(event) {
    const particles = event.data.particles;
    console.log("Partículas recibidas en el worker:", particles);

    // Procesar partículas: pequeño desplazamiento aleatorio
    const processedParticles = particles.map(particle => ({
        x: particle.x + (Math.random() * 10 - 5),  // Desplazamiento
        y: particle.y + (Math.random() * 10 - 5),
        velocityX: particle.velocityX,  // Mantener velocidad
        velocityY: particle.velocityY,
        lifetime: particle.lifetime
    }));

    console.log("Partículas procesadas en el worker:", processedParticles);

    // Enviar las partículas procesadas al hilo principal
    self.postMessage({ particles: processedParticles });
};
