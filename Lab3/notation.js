
function mean(notes) {
    if (notes.length === 0) return 0;
    const somme = notes.reduce((a, b) => a + b, 0);
    return somme / notes.length;
}

module.exports = mean;