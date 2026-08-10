const products = [
  {name:"LED Bulb",cat:"Lighting",icon:"💡",desc:"Energy-efficient LED lighting for everyday use."},
  {name:"Tube Light",cat:"Lighting",icon:"🔆",desc:"Bright and dependable tube lighting solutions."},
  {name:"Concealed Light",cat:"Lighting",icon:"◉",desc:"Clean, modern lighting for ceilings and interiors."},
  {name:"Strip Light",cat:"Lighting",icon:"〰️",desc:"Flexible decorative and ambient lighting."},
  {name:"Focus Light",cat:"Lighting",icon:"🔦",desc:"Focused illumination for shops, homes and projects."},
  {name:"Flood Light",cat:"Lighting",icon:"☀️",desc:"Powerful outdoor and area lighting."},
  {name:"Ceiling Fan",cat:"Fans",icon:"🌀",desc:"Reliable airflow for homes and commercial spaces."},
  {name:"Electrical Wire",cat:"Wires & Cables",icon:"〰️",desc:"Electrical wiring solutions for multiple applications."},
  {name:"Switch",cat:"Switches & Sockets",icon:"⏻",desc:"Everyday switches for electrical installations."},
  {name:"Socket",cat:"Switches & Sockets",icon:"🔲",desc:"Sockets for safe and convenient connections."},
  {name:"Plug",cat:"Switches & Sockets",icon:"🔌",desc:"Plugs for common electrical connections."},
  {name:"PVC Conduit Pipe",cat:"Fitting Materials",icon:"▯",desc:"PVC pipes for protected wire fitting and routing."},
  {name:"MCB",cat:"Protection",icon:"⚡",desc:"Circuit protection for electrical installations."},
  {name:"Extension Cord",cat:"Electrical Accessories",icon:"🔌",desc:"Convenient power extension for everyday use."},
  {name:"More Electrical Items",cat:"More",icon:"＋",desc:"Ask us about additional products and requirements."}
];

const categories = [
  ["💡","Lighting"],["🌀","Fans"],["〰️","Wires & Cables"],
  ["⏻","Switches & Sockets"],["⚡","Protection"],["🧰","Fitting Materials"]
];

const productGrid = document.getElementById("productGrid");
const categoryGrid = document.getElementById("categoryGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const emptyState = document.getElementById("emptyState");

function renderCategories(){
  categoryGrid.innerHTML = categories.map(([icon,name]) =>
    `<div class="category" onclick="setCategory('${name}')"><div class="icon">${icon}</div><h3>${name}</h3></div>`
  ).join("");
  [...new Set(products.map(p=>p.cat))].forEach(cat=>{
    const option=document.createElement("option");
    option.value=cat; option.textContent=cat;
    categoryFilter.appendChild(option);
  });
}

function renderProducts(){
  const term=searchInput.value.toLowerCase().trim();
  const cat=categoryFilter.value;
  const filtered=products.filter(p =>
    (cat==="All" || p.cat===cat) &&
    (p.name.toLowerCase().includes(term) || p.cat.toLowerCase().includes(term) || p.desc.toLowerCase().includes(term))
  );
  productGrid.innerHTML=filtered.map((p,i)=>`
    <article class="product-card">
      <div class="product-img">${p.icon}</div>
      <div class="product-info">
        <small>${p.cat}</small>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="product-actions">
          <button class="view-btn" onclick="showProduct(${products.indexOf(p)})">View</button>
          <button class="enquire-btn" onclick="enquireProduct('${p.name}')">Enquire</button>
        </div>
      </div>
    </article>`).join("");
  emptyState.hidden=filtered.length>0;
}

function setCategory(cat){
  categoryFilter.value=cat;
  document.getElementById("products").scrollIntoView({behavior:"smooth"});
  renderProducts();
}
function showProduct(index){
  const p=products[index];
  document.getElementById("modalContent").innerHTML=`
    <div class="modal-product-icon">${p.icon}</div>
    <span class="eyebrow">${p.cat}</span>
    <h2>${p.name}</h2>
    <p>${p.desc}</p>
    <button class="btn primary" style="margin-top:20px" onclick="enquireProduct('${p.name}')">Enquire About This Product →</button>`;
  document.getElementById("productModal").classList.add("active");
}
function closeModal(){document.getElementById("productModal").classList.remove("active")}
function openEnquiry(){document.getElementById("enquiryModal").classList.add("active")}
function closeEnquiry(){document.getElementById("enquiryModal").classList.remove("active")}
function enquireProduct(name){
  closeModal();
  openEnquiry();
  document.getElementById("customerMessage").value=`I want to enquire about: ${name}`;
}
document.getElementById("enquiryForm").addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("customerName").value;
  const phone=document.getElementById("customerPhone").value;
  const msg=document.getElementById("customerMessage").value;
  const shopWhatsApp="919368812699"; // CHANGE THIS
  const text=`Hello Shri Balaji Agencies,%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ARequirement: ${encodeURIComponent(msg)}`;
  window.open(`https://wa.me/${shopWhatsApp}?text=${text}`,"_blank");
});
searchInput.addEventListener("input",renderProducts);
categoryFilter.addEventListener("change",renderProducts);
document.getElementById("menuBtn").addEventListener("click",()=>document.getElementById("navLinks").classList.toggle("open"));
document.getElementById("year").textContent=new Date().getFullYear();
window.addEventListener("click",e=>{
  if(e.target.id==="productModal") closeModal();
  if(e.target.id==="enquiryModal") closeEnquiry();
});
renderCategories();
renderProducts();
