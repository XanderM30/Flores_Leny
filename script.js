const field = document.getElementById("field");

function createFlower() {
  const flower = document.createElement("div");
  flower.className = "flower";

  const size = 30 + Math.random() * 50;
  const delay = Math.random() * 5;

  // Margen para que nunca se salga
  const margin = size / 2;

  const x = margin + Math.random() * (window.innerWidth - size);
  const y = margin + Math.random() * (window.innerHeight - size);

  flower.style.left = x + "px";
  flower.style.top = y + "px";
  flower.style.width = size + "px";
  flower.style.height = size + "px";
  flower.style.animationDelay = delay + "s";

  flower.innerHTML = `
    <svg viewBox="0 0 100 100">
      <circle class="petal" cx="50" cy="25" r="18"/>
      <circle class="petal" cx="75" cy="50" r="18"/>
      <circle class="petal" cx="50" cy="75" r="18"/>
      <circle class="petal" cx="25" cy="50" r="18"/>
      <circle class="center" cx="50" cy="50" r="14"/>
    </svg>

  `;

  field.appendChild(flower);
}

// 🌸 Muchas flores
for (let i = 0; i < 80; i++) {
  createFlower();
}









