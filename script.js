function responderSim() {
  document.getElementById("dialogo").innerText =
    "Senhor Iago, o destino sorriu-lhe com graça. Prepare o ambiente com velas, vinho e ternura — pois este fim de semana será de deleite e celebração amorosa, terás cuzinho!!.";

  // Mostrar fogos com fundo animado
  const fogos = document.getElementById("fogos");
  fogos.style.display = "block";

  // Ocultar fogos após 3 segundos
  setTimeout(() => {
    fogos.style.display = "none";
  }, 3000);
}

function responderNao() {
  const box = document.getElementById("pergunta-box");
  const x = Math.floor(Math.random() * window.innerWidth * 0.8);
  const y = Math.floor(Math.random() * window.innerHeight * 0.8);
  box.style.position = "absolute";
  box.style.left = x + "px";
  box.style.top = y + "px";
}
