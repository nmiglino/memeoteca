const imageInput = document.getElementById('imageInput');
const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');
const fontFamily = document.getElementById('fontFamily');
const textColor = document.getElementById('textColor');
const canvas = document.getElementById('memeCanvas');
const ctx = canvas.getContext('2d');
const downloadBtn = document.getElementById('downloadBtn');
const resetBtn = document.getElementById('resetBtn');

let activeImage = null;

function updateMeme() {
    if (!activeImage) return;

    canvas.width = activeImage.width;
    canvas.height = activeImage.height;

    ctx.drawImage(activeImage, 0, 0);

    const fontSize = canvas.width * 0.1;
    ctx.font = `bold ${fontSize}px ${fontFamily.value}`;
    ctx.textAlign = 'center';
    ctx.fillStyle = textColor.value;
    ctx.strokeStyle = 'black';
    ctx.lineWidth = fontSize / 15;

    // Dibujo textos
    ctx.textBaseline = 'top';
    drawStyledText(topText.value.toUpperCase(), canvas.width / 2, 20);
    
    ctx.textBaseline = 'bottom';
    drawStyledText(bottomText.value.toUpperCase(), canvas.width / 2, canvas.height - 20);
}

function drawStyledText(text, x, y) {
    ctx.fillText(text, x, y);
    ctx.strokeText(text, x, y);
}

// Eventos de entrada
imageInput.addEventListener('change', (e) => {
    const reader = new FileReader();
    reader.onload = (event) => {
        activeImage = new Image();
        activeImage.src = event.target.result;
        activeImage.onload = updateMeme;
    };
    reader.readAsDataURL(e.target.files[0]);
});

[topText, bottomText, fontFamily, textColor].forEach(el => {
    el.addEventListener('input', updateMeme);
});

// Botón Limpiar
resetBtn.addEventListener('click', () => {
    topText.value = '';
    bottomText.value = '';
    imageInput.value = '';
    textColor.value = '#ffffff';
    activeImage = null;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Descarga
downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'memeoteca.png';
    link.href = canvas.toDataURL();
    link.click();
});
