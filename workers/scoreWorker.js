self.onmessage = function(e) {
    const currentScore = e.data.currentScore;
    const pointsToAdd = e.data.points;
    const updatedScore = currentScore + pointsToAdd;

    // Enviar la nueva puntuación al hilo principal
    self.postMessage({ newScore: updatedScore });
};
