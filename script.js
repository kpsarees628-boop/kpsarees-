let phone = "919347746280";   // Put your WhatsApp number

let html = "";
products.forEach(p => {
 html += `
 <div class="card">
   <img src="${p.img}">
   <h3>${p.name}</h3>
   <p>${p.price}</p>
   <button onclick="window.open('https://wa.me/${phone}?text=I want to buy ${p.name}')">
   Buy on WhatsApp</button>
 </div>`;
});
document.getElementById("products").innerHTML = html;
