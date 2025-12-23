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

if (neonCursor) {
  document.addEventListener("mousemove", (e) => {
    neonCursor.style.left = e.clientX + "px";
    neonCursor.style.top = e.clientY + "px";
  });
}
