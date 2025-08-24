export default function Industries() {
  return (
<div className="p-6 bg-[#f0f4f8]">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-slate-900 mb-10 text-center">Industries We Serve</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img src="/textile.png" alt="Textile Industry" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Textile</h3>
          <p className="text-slate-600 text-sm">Advanced wastewater and recycling solutions for textile dyeing and finishing processes.</p>
        </div>
      </div>

      
      <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img src="/images/residential.jpg" alt="Residential and Municipal" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Residential & Municipal</h3>
          <p className="text-slate-600 text-sm">Sewage and water treatment systems for cities and housing communities.</p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img src="/ultrapure.png" alt="Pharmaceuticals" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Pharmaceuticals</h3>
          <p className="text-slate-600 text-sm">High-purity water treatment solutions tailored for pharmaceutical production.</p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img src="/food.png" alt="Food & Beverages" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Food & Beverages</h3>
          <p className="text-slate-600 text-sm">Safe water treatment ensuring hygiene and compliance in food industries.</p>
        </div>
      </div>

      
      <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img src="/images/paper.jpg" alt="Pulp & Paper" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Pulp & Paper</h3>
          <p className="text-slate-600 text-sm">Recycling and wastewater minimization solutions for paper mills.</p>
        </div>
      </div>

   
      <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <img src="/images/power.jpg" alt="Power & Cogeneration" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Power & Cogeneration</h3>
          <p className="text-slate-600 text-sm">Water optimization and cooling tower solutions for power plants.</p>
        </div>
      </div>

    </div>

    
    <div className="grid grid-cols-1 justify-items-center mt-8">
      <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-1/2 lg:w-1/3">
        <img src="/images/automobile.jpg" alt="Automobiles" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Automobiles</h3>
          <p className="text-slate-600 text-sm">Effluent treatment and water reuse solutions for automobile industries.</p>
        </div>
      </div>
    </div>

  </div>
</div>

  )
}