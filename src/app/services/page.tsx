// app/components/Services.tsx
"use client";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// export default function Services() {
//   const services = [
//     {
//       title: "Design & Engineering Services",
//       description:
//         "We provide end-to-end design and engineering solutions tailored to your industrial and water management needs.",
//       img: "/design1.png"
//        },
//     {
//       title: "Up-gradation of Existing Water Treatment Facilities",
//       description:
//         "Enhancing the efficiency, reliability, and sustainability of existing water and wastewater treatment systems.",
//       img: "/design2.png" },
//     {
//       title: "Operation & Maintenance",
//       description:
//         "Our expert team ensures smooth operation and long-term maintenance of industrial water and wastewater treatment facilities.",
//       img: "/design.png" },
//   ];

//   return (
//     <section className="p-8 bg-gray-100" id="services">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
//           Our Services
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
//             >
//               <div className="bg-gray-50 aspect-[23/16]">
//                 <img
//                   src={service.img}
//                   alt={service.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-lg font-semibold text-slate-900 mb-3">
//                   {service.title}
//                 </h3>
//                 <p className="text-slate-600 text-[15px] leading-relaxed">
//                   {service.description}
//                 </p>
//                 <a
//                   href="/services"
//                   className="mt-6 inline-block px-3 py-1.5 rounded-md tracking-wider bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
export default function ServicesPage() {
  return (
    <div className="bg-gray-50 text-slate-800">
      {/* Hero Section */}
      <section className="bg-[#001f4d] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Delivering sustainable, innovative and cost-effective water & waste
            management solutions across industries.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Mission Statement</h2>
        <p className="text-lg text-slate-700 leading-relaxed text-center max-w-4xl mx-auto">
          The safe water demands and environmental pollution are increasing in
          Pakistan. At{" "}
          <span className="font-semibold">Fluid Management Service (FMS)</span>,
          we offer superior total water management solutions to help businesses
          stay <span className="text-[#001f4d] font-semibold">Green</span> and{" "}
          <span className="text-[#001f4d] font-semibold">Competitive</span>{" "}
          through deep expertise and best engineering practices.
        </p>
      </section>

      {/* Integrated Solutions */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            Integrated Water Management Solutions
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Fluid Management Service (FMS) is a collaborative provider of
            industrial water & waste management solutions. Founded by
            quality-driven professionals, FMS goes beyond problem solving by
            delivering holistic consulting and treatment that focus on waste
            reduction, effluent minimization, water usage reduction, and energy
            conservation.
          </p>

          <ul className="grid sm:grid-cols-2 gap-6 text-slate-700">
            <li className="p-5 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold mb-2">Feasibility Studies</h3>
              <p>
                Comprehensive evaluations to design efficient water & wastewater
                treatment systems.
              </p>
            </li>
            <li className="p-5 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold mb-2">Effluent Characterization</h3>
              <p>
                In-depth study of effluent quality, process impact, and
                recommendations for optimized treatment plants.
              </p>
            </li>
            <li className="p-5 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold mb-2">Process Design & Engineering</h3>
              <p>
                From process calculations and P&ID layouts to procurement
                support and vendor evaluation.
              </p>
            </li>
            <li className="p-5 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold mb-2">Project Management</h3>
              <p>
                End-to-end handling from equipment procurement to erection,
                commissioning, and supervision.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Products & Industries */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Our Offerings</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-3">Products</h3>
              <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                <li>Desalination Plants</li>
                <li>RO, DM, UF, NF, STP, ETP Plants</li>
                <li>Membranes & Pressure Vessels</li>
                <li>Centrifugal Pumps, Air Blowers</li>
                <li>Filtration Systems</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-3">Industries Served</h3>
              <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                <li>Textile & Paper</li>
                <li>Pharmaceuticals</li>
                <li>Food & Beverages</li>
                <li>Power & Cogeneration</li>
                <li>Automobiles</li>
                <li>Residential & Municipal</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-3">Supplies Offered</h3>
              <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                <li>Chemicals & Dosing Systems</li>
                <li>Membranes & Pressure Vessels</li>
                <li>Filter Press & Centrifuge Systems</li>
                <li>Froth Flotation & DAF Units</li>
                <li>Multiple Effect Evaporators</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consultancy */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Consultancy Services</h2>
          <p className="text-slate-700 mb-6">
            Our consultancy services cover feasibility studies, process design,
            proposal making, and complete plant overhauls, ensuring sustainable
            solutions.
          </p>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Feasibility Studies for large scale WTP, ETP, STP</li>
            <li>Design & proposal making for plants ranging from 1 MLD to 50 MLD</li>
            <li>Detailed engineering: P&ID, layouts, GA drawings</li>
            <li>Procurement specifications & vendor evaluation</li>
            <li>Emergency repair & maintenance services</li>
          </ul>
        </div>
      </section>

      {/* Plants & Components */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Plants & Components</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-3">Plants</h3>
              <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                <li>Reverse Osmosis Systems</li>
                <li>Sewage & Effluent Treatment</li>
                <li>Demineralization & Softening Plants</li>
                <li>Dye Purification & ZLD Systems</li>
                <li>Chemical Cleaning Skids</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-3">Components</h3>
              <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                <li>Membranes & Pressure Vessels</li>
                <li>Centrifugal Pumps & Air Blowers</li>
                <li>Instrumentation & Control Systems</li>
                <li>Chemical Dosing Systems</li>
                <li>Filter Press & Sludge Handling Equipment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#001f4d] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
          <p className="mb-6 text-lg">
            Work with our experienced professionals to build reliable, efficient,
            and sustainable water management solutions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#001f4d] px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}



