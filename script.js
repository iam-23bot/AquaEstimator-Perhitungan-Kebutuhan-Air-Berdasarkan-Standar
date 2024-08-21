function calculateWater() {
    const population = document.getElementById('population').value;
    const standard = document.getElementById('standard').value;

    let waterPerCapita;

    if (standard === 'SNI') {
        waterPerCapita = 120; // Nilai contoh SNI (liter per orang per hari)
    } else if (standard === 'PU') {
        waterPerCapita = 60; // Nilai contoh PU (liter per orang per hari)
    }

    const totalWater = population * waterPerCapita;
    const waterWithLoss = totalWater * 1.1; // Asumsi kehilangan 10%

    document.getElementById('result').innerHTML = `
        <p>Kebutuhan Air Total: ${totalWater.toFixed(2)} liter/hari</p>
        <p>Kebutuhan Air Bersih (dengan kehilangan): ${waterWithLoss.toFixed(2)} liter/hari</p>
    `;
}
