const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.animate({
    left: e.clientX + 'px',
    top: e.clientY + 'px'
  }, { duration:120, fill:'forwards' });
});

const grid = document.getElementById('productGrid');
if (grid && typeof products !== 'undefined') {
  products.forEach(p => {
    grid.innerHTML += `
      <div class="product-card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>${p.category}</p>
        <div class="price">PKR ${p.price}</div>
        <a class="cta" href="product.html?id=${p.id}" target="_blank">View</a>
      </div>
    `;
  });
}
