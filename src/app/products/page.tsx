"use client";

import { motion } from "framer-motion";

export default function Products() {
  return (
    <section className="p-4 bg-gray-50" id="products">
      <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
        <motion.h2
          className="text-3xl font-bold text-slate-900 mb-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Products
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-md overflow-hidden shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 aspect-[23/16]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-slate-600 text-[15px] leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ✅ Your product data (clean & reusable)
const products = [
  {
    title: "Desalination Plants",
    description:
      "Advanced desalination systems for converting seawater into fresh, usable water.",
    image: "/images/desalination.jpg",
  },
  {
    title: "Nano Filtration",
    description:
      "High-efficiency nano filtration membranes for industrial and municipal use.",
    image: "/images/nanofiltration.jpg",
  },
  {
    title: "Industrial / Waste Water Reuse",
    description:
      "Eco-friendly wastewater treatment and reuse solutions for industries.",
    image: "/images/wastewater.jpg",
  },
  {
    title: "MBBR",
    description:
      "Moving Bed Biofilm Reactor technology for efficient biological wastewater treatment.",
    image: "/images/mbbr.jpg",
  },
  {
    title: "Ultra-Filtration",
    description:
      "Advanced filtration systems to remove suspended solids and bacteria effectively.",
    image: "/images/ultrafiltration.jpg",
  },
  {
    title: "Water Supply System",
    description: "Design and installation of efficient water supply systems.",
    image: "/images/water-supply.jpg",
  },
  {
    title: "Demineralization",
    description:
      "Ion exchange-based demineralization plants for high-purity water.",
    image: "/images/demineralization.jpg",
  },
  {
    title: "Softening through Ions Exchange",
    description:
      "Cost-effective ion exchange softening systems for hard water treatment.",
    image: "/images/softening.jpg",
  },
  {
    title: "Lime Soda Softening",
    description:
      "Traditional lime soda softening for removing carbonate hardness.",
    image: "/images/lime-soda.jpg",
  },
  {
    title: "Conventional Filtration",
    description:
      "Reliable conventional filtration systems for a variety of industries.",
    image: "/images/conventional-filtration.jpg",
  },
];
