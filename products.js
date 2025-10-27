
const products = [
  {
    image: "laminated.webp",
    name: "Laminated Wooden Flooring",
    description: "Scratch-resistant and affordable flooring that mimics the look of real wood.",
    details: "Our laminated wooden flooring offers the timeless beauty of natural wood with added durability. It is scratch-resistant, easy to clean, and resistant to fading, making it perfect for high-traffic areas. Ideal for homes and offices, it provides a warm, inviting atmosphere while being budget-friendly and eco-conscious."
  },
  {
    image: "./WhatsApp Image 2025-10-24 at 12.32.45 PM (1).jpeg",
    name: "SPC Flooring",
    description: "Stone Plastic Composite flooring offering 100% water resistance and durability.",
    details: "SPC flooring combines the toughness of stone with the flexibility of plastic, creating a flooring solution that is 100% water-resistant, highly durable, and easy to maintain. It withstands heavy foot traffic and is perfect for kitchens, bathrooms, and commercial spaces, offering long-lasting beauty and performance."
  },
  {
    image: "./WhatsApp Image 2025-10-24 at 12.32.47 PM (2).jpeg",
    name: "Engineered Wood Flooring",
    description: "Multi-layered wood flooring that provides the elegance of hardwood with added stability.",
    details: "Engineered wood flooring features a multi-layered construction with a real hardwood veneer on top of a stable plywood core. This ensures the authentic look and feel of solid wood while preventing warping or expansion. It’s ideal for any room, including basements, offering elegance, stability, and a natural, warm aesthetic."
  },
  {
    image: "./WhatsApp Image 2025-10-24 at 12.32.43 PM.jpeg",
    name: "Solid Wood Flooring",
    description: "Authentic hardwood flooring that adds warmth, character, and long-lasting beauty.",
    details: "Solid wood flooring is made from 100% natural hardwood, providing unmatched warmth, character, and timeless appeal. Each plank is unique, enhancing the aesthetics of your home. With proper care, it can last for decades, making it a valuable and sustainable choice for both residential and commercial spaces."
  },
  {
    image: "./WhatsApp Image 2025-10-24 at 12.32.42 PM (1).jpeg",
    name: "WPC Deck Flooring",
    description: "Weatherproof WPC decking ideal for outdoor patios, balconies, and gardens.",
    details: "WPC deck flooring is a high-quality composite of wood fibers and plastic, making it weatherproof, termite-resistant, and easy to maintain. Its natural wood-like finish enhances outdoor spaces such as patios, balconies, and gardens, providing a stylish and long-lasting solution for any exterior environment."
  },
  {
    image: "./WhatsApp Image 2025-10-24 at 12.32.47 PM (1).jpeg",
    name: "Wallpaper Normal & Customized",
    description: "Premium wallpapers available in modern, classic, and textured designs for every interior.",
    details: "Our premium wallpapers are designed to transform interiors with style and elegance. Available in modern, classic, and textured designs, they are easy to apply and durable. We also offer customization options to match your personal taste, ensuring your space reflects your unique vision."
  },
  {
    image: "ipe.webp",
    name: "IPE Deck Flooring",
    description: "High-density hardwood decking known for extreme durability and natural beauty.",
    details: "IPE deck flooring is made from exotic, high-density hardwood that is naturally resistant to decay, termites, and harsh weather. Its rich color and fine grain provide an exquisite natural look. Perfect for premium outdoor decks, it combines longevity, elegance, and minimal maintenance."
  },
  {
    image: "louvers.webp",
    name: "Louvers Interior & Exterior",
    description: "Contemporary louver designs that enhance ventilation and elevate architectural appeal.",
    details: "Our louvers are engineered for both interior and exterior applications, enhancing airflow while offering privacy and aesthetic appeal. Available in multiple materials, finishes, and styles, they provide a sleek architectural element that adds both functionality and visual interest to any space."
  },
  {
    image: "./WhatsApp Image 2025-10-24 at 12.32.59 PM (2).jpeg",
    name: "Window Blinds",
    description: "Elegant and functional blinds for perfect light control and privacy.",
    details: "Window blinds combine practicality with elegance, allowing precise control over light and privacy. Available in a variety of materials, colors, and styles, they enhance the interior design while offering durability, ease of cleaning, and customizable options to suit every room’s ambiance."
  },
  {
    image: "lvt.webp",
    name: "LVT Vinyl Flooring",
    description: "Luxury Vinyl Tiles offering high durability, easy maintenance, and realistic wood textures.",
    details: "Luxury Vinyl Tiles (LVT) are designed to replicate the look and feel of natural wood or stone with superior durability. They are water-resistant, easy to install and maintain, and perfect for high-traffic areas. LVT flooring combines style, convenience, and long-lasting performance for both homes and businesses."
  },
  {
    image: "soffit.webp",
    name: "Soffit Panel",
    description: "Durable panels used for ceilings and eaves, ensuring protection and a clean finish.",
    details: "Soffit panels protect the underside of roofs while providing proper ventilation. Made from durable, weather-resistant materials, they ensure longevity and require minimal maintenance. Their clean, polished appearance enhances the overall architecture of your home or building."
  },
  {
    image: "sheera.webp",
    name: "Shera Plank",
    description: "Fiber cement planks that provide a natural wood look with superior weather resistance.",
    details: "Shera planks offer the natural aesthetic of wood combined with exceptional durability. Made from fiber cement, they resist moisture, termites, and weathering, making them ideal for exterior cladding and decking. They provide a sustainable, long-lasting alternative to traditional wood."
  },
  {
    image: "hpl.webp",
    name: "HPL Cladding",
    description: "High-pressure laminate cladding ideal for exterior facades with UV and weather protection.",
    details: "HPL cladding is engineered to withstand harsh environmental conditions while enhancing the building’s exterior. It is UV-resistant, weatherproof, and low-maintenance, providing a stylish, modern look for façades while ensuring long-term performance."
  },
  {
    image: "./WhatsApp Image 2025-10-24 at 12.32.51 PM (1).jpeg",
    name: "Window Curtains",
    description: "Stylish curtains that add warmth, texture, and privacy to your living spaces.",
    details: "Our curtains are crafted from high-quality fabrics to bring warmth, texture, and elegance to any room. Available in various styles, colors, and patterns, they offer privacy while complementing your interior décor. Customization options are available to match your unique taste."
  },
  {
    image: "./WhatsApp Image 2025-10-24 at 12.32.54 PM (1).jpeg",
    name: "Sofa",
    description: "Comfortable, modern sofas designed to complement any living room decor.",
    details: "Our sofas combine comfort, contemporary design, and durability. Available in multiple fabrics, colors, and configurations, they provide the perfect centerpiece for your living room. Designed for relaxation and style, they enhance the aesthetic appeal of any space while ensuring lasting comfort."
  },
  {
    image: "./grass.jpg",
    name: "Artificial Grass",
    description: "Premium synthetic turf that brings a lush, natural look to your space without the need for watering or maintenance.",
    details: "Our artificial grass offers the perfect blend of durability, realism, and low maintenance. Made with UV-resistant fibers and advanced drainage technology, it stays green and vibrant all year long—ideal for gardens, balconies, playgrounds, or commercial landscapes. Enjoy the look and feel of natural grass without the upkeep, mud, or mowing."
  },
];
const productInfoContainer = document.querySelector(".product-info-container");
if (productInfoContainer) {
  productInfoContainer.innerHTML = products.map((p, index) => {
    const isOddIndex = index % 2 === 0;
    return `
      <div class="product-info-card">
        ${isOddIndex ? `
          <div class="product-info-details">
            <h2>${p.name}</h2>
            <p>${p.details}</p>
          </div>
          <div class="product-info-image">
            <img src="${p.image}" alt="${p.name}">
          </div>
        ` : `
          <div class="product-info-image-two">
            <img src="${p.image}" alt="${p.name}">
          </div>
          <div class="product-info-details-two">
            <h2>${p.name}</h2>
            <p>${p.details}</p>
          </div>
        `}
      </div>
    `;
  }).join("");
}

const back = document.getElementById('back-btn')
back.onclick = () => {
  window.location.href = 'index.html'
}

// Animate elements when they enter the viewport
function animateOnScroll() {
  const elements = document.querySelectorAll(
    '.product-header, .product-services, .product-info-card'
  );

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}

// Trigger on load and scroll
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
