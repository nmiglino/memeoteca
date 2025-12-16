:root {
    --accent: #ffb347; /* Naranja suave */
    --glass: rgba(255, 255, 255, 0.05);
    --border-glass: rgba(255, 255, 255, 0.12);
    --text: #ffffff;
    --font-main: 'Outfit', sans-serif;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: var(--font-main);
    color: var(--text);
    overflow-x: hidden;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Imagen de fondo con desenfoque */
.bg-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), 
                url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop');
    background-size: cover;
    background-position: center;
    z-index: -1;
    filter: blur(5px);
    transform: scale(1.1);
}

.app-wrapper {
    width: 90%;
    max-width: 1100px;
    padding: 40px 0;
}

.main-header {
    text-align: center;
    margin-bottom: 40px;
}

.main-header h1 {
    font-size: 4rem;
    font-weight: 900;
    color: var(--accent);
    text-transform: uppercase;
    line-height: 1;
}

.main-header h1 span { color: #fff; }

.main-header p {
    color: rgba(255,255,255,0.6);
    font-weight: 400;
    margin-top: 10px;
}

/* Efecto Vidrio (Glassmorphism) */
.glass-layout {
    display: grid;
    grid-template-columns: 350px 1fr;
    gap: 30px;
}

.card-glass {
    background: var(--glass);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid var(--border-glass);
    border-radius: 24px;
    padding: 30px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}

.input-field {
    margin-bottom: 25px;
}

label {
    display: block;
    font-weight: 700;
    margin-bottom: 10px;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--accent);
}

input[type="text"], .custom-file-input {
    width: 100%;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 15px;
    border-radius: 12px;
    color: white;
    outline: none;
    transition: 0.3s;
}

input[type="text"]:focus {
    background: rgba(255,255,255,0.15);
    border-color: var(--accent);
}

/* Botón con brillo */
.glow-button {
    width: 100%;
    padding: 18px;
    border: none;
    border-radius: 14px;
    background: var(--accent);
    color: #000;
    font-weight: 900;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.4s ease;
    box-shadow: 0 0 20px rgba(255, 179, 71, 0.4);
}

.glow-button:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 0 30px rgba(255, 179, 71, 0.6);
}

.canvas-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.2);
    border-radius: 16px;
    overflow: hidden;
    min-height: 400px;
}

canvas {
    max-width: 100%;
    height: auto;
    display: block;
}

/* Responsive */
@media (max-width: 850px) {
    .glass-layout {
        grid-template-columns: 1fr;
    }
    .main-header h1 { font-size: 2.5rem; }
}