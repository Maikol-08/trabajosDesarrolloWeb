  const template = document.getElementById("card-template");
  const contenedor = document.getElementById("contenedor");

  const productos = [
     {titulo: "Laptop", desc: "16GB RAM", price: "$599 dls", img: "https://imggraficos.gruporeforma.com/2022/05/Laptops-gamer-asus-hot-sale-2022-2.png"},
  {titulo: "Mouse", desc: "Inalámbrico", price: "$115 dls", img: "https://corporativo.tecnoplaza.com.co/wp-content/uploads/2020/06/Logitech-G203-LIGHTSYNC-mejora-el-modelo-Prodigy-con-nuevo-sensor_2-600x623.jpg"},
  {titulo: "Teclado", desc: "Mecanico", price: "$200 dls", img: "https://www.computadoresenbogota.com/market/wp-content/uploads/2024/05/Teclado-Gamer-Mecanico-Redragon-Deimos-K599-KRS.png.webp"},
  {titulo: "Camara", desc: "Lente x15", price: "$800 dls", img: "https://i.ebayimg.com/images/g/5PQAAOSwpDdVdMUJ/s-l960.webp"},
  {titulo: "Grafica", desc: "RTX 5090", price: "$650 dls", img: "https://pcgamermedellin.com/wp-content/uploads/2025/02/gpu-tarjeta-grafica-nvidia-geforce-rtx-5090-msi-vanguard-32g-1.jpg"},
  ];

  productos.forEach(p => {
    const clon = template.content.cloneNode(true);
  clon.querySelector(".title").textContent = p.titulo;
  clon.querySelector(".desc").textContent = p.desc;
  clon.querySelector(".price").textContent = p.price;
  clon.querySelector("img").src = p.img;
  clon.querySelector("img").title = p.desc;
  contenedor.appendChild(clon);
  });

