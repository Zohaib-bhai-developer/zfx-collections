document.addEventListener("DOMContentLoaded", () => {

  /* ===========================
     PRODUCT GRID RENDER
  ============================ */

  const grid = document.getElementById("productGrid");

  if (grid && typeof products !== "undefined") {
    grid.innerHTML = ""; // clean start

    products.forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.category}</p>
        <div class="price">PKR ${p.price}</div>
        <a class="cta" href="product.html?id=${p.id}" target="_blank">View</a>
      `;

      grid.appendChild(card);
    });
  }

  /* ===========================
     NEON ARROW CURSOR (DESKTOP ONLY)
  ============================ */

  const neonCursor = document.querySelector(".neon-cursor");

  if (neonCursor && window.innerWidth > 768) {
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function moveCursor() {
      neonCursor.style.transform = `translate(${mouseX + 4}px, ${mouseY + 4}px)`;
      requestAnimationFrame(moveCursor);
    }

    moveCursor();
  }

});
