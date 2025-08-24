"use client"
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Droplet, Cog, Leaf, Users, ShieldCheck, Wrench } from "lucide-react";
export default function About() {
  return (
    <div>
      <Header/>
    <div className="bg-gray-50 text-slate-800"> {/* Hero / Page Title */} <section className="bg-[#001f4d] text-white py-20"> <div className="max-w-5xl mx-auto px-6 text-center"> <motion.h1 className="text-4xl font-bold mb-4" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} > About Fluid Management Service </motion.h1> <p className="text-lg opacity-90 max-w-3xl mx-auto"> Delivering innovative and sustainable total water & waste management solutions across industries. </p> </div> </section>

      {/* Mission Statement */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <motion.h2 
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our Mission
        </motion.h2>
        <motion.p 
          className="text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         The safe water demands and environmental pollution 
         are increasing in Pakistan. At <span className="font-semibold">Fluid Management Service (FMS)</span>,
          we offer superior water management solutions that help businesses stay <span className="text-[#001f4d] font-semibold"> 
            Green </span> and <span className="text-[#001f4d] font-semibold"> Competitive </span> 
         through deep expertise and best engineering practices.
        </motion.p>
      </section>

      {/* Integrated Solutions with icons */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center">Integrated Water Management Solutions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Droplet className="w-8 h-8 text-[#001f4d]" />, title: "Feasibility Studies", desc: "Comprehensive evaluations to design efficient water systems." },
              { icon: <Cog className="w-8 h-8 text-[#001f4d]" />, title: "Process Design", desc: "From effluent characterization to detailed engineering." },
              { icon: <Wrench className="w-8 h-8 text-[#001f4d]" />, title: "Project Management", desc: "End-to-end handling from vendor selection to commissioning." },
              { icon: <ShieldCheck className="w-8 h-8 text-[#001f4d]" />, title: "Effluent Characterization", desc: "Optimize plant operations with in-depth analysis." },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className=" p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center p-6 rounded-xl shadow-md text-center transition-transform hover:scale-105 border-blink"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                {item.icon}
                <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose FMS - Timeline style */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10">Why Choose FMS?</h2>
          <div className="relative border-l-4 border-[#001f4d] ml-6">
            {[
              { icon: <Users />, title: "Experienced Professionals", desc: "Engineers with 10+ years of expertise." },
              { icon: <Cog />, title: "Comprehensive Support", desc: "From plant start-up to emergency repairs." },
              { icon: <Leaf />, title: "Sustainable Practices", desc: "Focus on water recycling & conservation." },
            ].map((step, i) => (
              <motion.div 
                key={i}
                className="ml-6 mb-12 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.3, duration: 0.7 }}
              >
                <div className="absolute -left-12 top-1 bg-[#001f4d] text-white p-3 rounded-full">
                  {step.icon}
                </div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mb-8 bg-gradient-to-r from-[#001f4d] to-[#003366] text-white py-20 text-center">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Let’s Build a Sustainable Future Together
        </motion.h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Partner with us to create efficient, sustainable, and innovative water management solutions.
        </p>
        <motion.a 
          href="/contact"
          className="inline-block bg-white text-[#001f4d] px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
          whileHover={{ scale: 1.05 }}
        >
          Contact Us
        </motion.a>
      </section>
    
    <div>
    
    <Footer/>
    </div>
    </div>
    </div>
  )
}