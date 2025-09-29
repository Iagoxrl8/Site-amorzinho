function responderSim() {
  document.getElementById("dialogo").innerText = "ihuuuuuul cuzinho esse final de semana!!";
  document.getElementById("fogos").style.display = "block";
  setTimeout(() => {
    document.getElementById("fogos").style.display = "none";
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
