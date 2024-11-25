

// import React from 'react';
// import { Leaf, Recycle, Wind, TreePine, ChevronRight, Shield } from 'lucide-react';

// export default function EcoAboutUs() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
//       {/* Hero Section */}
//       <div className="relative h-[500px] overflow-hidden">
//         <div className="absolute inset-0 bg-green-900/90">
//           <img 
//             src="data:image/jpeg;base64,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"
//             className="w-full h-full object-cover mix-blend-overlay"
//             alt="Nature background"
//           />
//         </div>
//         <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
//           <h1 className="text-5xl md:text-6xl font-bold text-green mb-6">For a Greener Tomorrow</h1>
//           <p className="text-xl text-gray-200 max-w-2xl">
//             Since 2010, we've been at the forefront of environmental conservation. 
//             More than just a company, we're a movement dedicated to reducing carbon 
//             emissions and preserving our planet for future generations.
//           </p>
//           <button className="mt-8 inline-flex items-center px-6 py-3 bg-white text-green rounded-full font-semibold hover:bg-green-50 transition-colors">
//             Join Our Mission <ChevronRight className="ml-2 h-5 w-5" />
//           </button>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <FeatureCard 
//             icon={<Leaf />}
//             title="Carbon Reduction"
//             description="Our initiatives have helped reduce carbon emissions by thousands of tons annually."
//           />
//           <FeatureCard 
//             icon={<Recycle />}
//             title="Waste Management"
//             description="Innovative recycling programs turning waste into valuable resources."
//           />
//           <FeatureCard 
//             icon={<Wind />}
//             title="Clean Energy"
//             description="Powered by 100% renewable energy sources across all our operations."
//           />
//           <FeatureCard 
//             icon={<Shield />}
//             title="Eco Certification"
//             description="Internationally recognized for our environmental standards and practices."
//           />
//         </div>
//       </div>

//       {/* Mission Statement */}
//       <div className="bg-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center">
//             <h2 className="text-3xl font-bold text-green mb-8">Our Green Mission</h2>
//             <p className="text-xl text-gray-600 leading-relaxed">
//               We're committed to leading the charge against climate change. By implementing 
//               sustainable practices and innovative green technologies, we're working to 
//               significantly reduce carbon dioxide emissions. Every decision we make is 
//               guided by our commitment to environmental stewardship and creating a 
//               sustainable future for all.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <StatCard number="50K+" label="Trees Planted" />
//           <StatCard number="30%" label="Carbon Reduction" />
//           <StatCard number="100%" label="Renewable Energy" />
//         </div>
//       </div>
//     </div>
//   );
// }

// function FeatureCard({ icon, title, description }) {
//   return (
//     <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
//       <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
//         {React.cloneElement(icon, { className: "h-6 w-6" })}
//       </div>
//       <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   );
// }

// function StatCard({ number, label }) {
//   return (
//     <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
//       <div className="text-4xl font-bold text-green mb-2">{number}</div>
//       <div className="text-gray-600">{label}</div>
//     </div>
//   );
// }








import React from 'react';
import { Leaf, Recycle, Wind, TreePine, ChevronRight, Shield, Trash2, Globe, Zap ,Package,RefreshCcw} from 'lucide-react';

export default function EcoRecyclingLandingPage() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/90">
          <img 
            src="https://img.freepik.com/premium-photo/beach-full-plastic-waste-recycle-bin-water-pollution-recycling-concept_966938-342.jpg"
            className="w-full h-full object-cover mix-blend-overlay "
            alt="Plastic recycling"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold  mb-6 text-green">Recycle Today for a Cleaner Tomorrow</h1>
          <p className="text-xl text-gray-800 max-w-2xl">
            Join our mission to reduce plastic waste and protect our oceans. 
            Every piece of plastic recycled is a step towards a sustainable future.
          </p>
          <button className="mt-8 w-[250px] inline-flex items-center px-6 py-3 bg-green text-white rounded-md font-semibold hover:bg-blueD transition-colors">
            Start Recycling Now <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-blue mb-12">Our Recycling Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
          className=" text-blueD"
            icon={<Trash2 />}
            title="Collection"
            description="We collect plastic waste from homes, businesses, and public spaces."
          />
          <FeatureCard 
            icon={<Recycle />}
            title="Sorting"
            description="Advanced technology sorts plastics by type for efficient recycling."
          />
          <FeatureCard 
            icon={<Zap />}
            title="Processing"
            description="Plastics are cleaned, shredded, and transformed into raw materials."
          />
          <FeatureCard 
            icon={<Globe />}
            title="Reuse"
            description="Recycled materials are used to create new products, reducing waste."
          />
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue mb-8">Our Environmental Impact</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Through our recycling efforts, we've made significant strides in reducing plastic pollution. 
              By transforming waste into valuable resources, we're not just cleaning up our environment – 
              we're building a circular economy that benefits both nature and society.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard 
  number="10M+" 
  label="Plastic Bottles Recycled" 
  numberColor="text-green"  // Pass color for the number
  labelColor="text-gray-700"    // Pass color for the label
/>
          <StatCard number="50K+" label="Trees Saved" />
          <StatCard number="30%" label="Carbon Footprint Reduced" />
        </div>
      </div>

      <section className="bg-blue-20 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue mb-8">
            How the Recycling Process Works
          </h2>
          <p className="text-gray-600 mb-12">
            Learn how we work with our partners to make the world a greener
            place through the recycling process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue">
              <Trash2 className="text-blue w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue mb-4">
                Plastic Collection
              </h3>
              <p className="text-gray-600">
                We work with local communities to collect used plastic materials
                for recycling.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue">
              <RefreshCcw className="text-blue w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue mb-4">
                Processing & Sorting
              </h3>
              <p className="text-gray-600">
                Our partners sort and process the collected plastics into
                reusable materials.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue">
              <Package className="text-blue w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue mb-4">
                Product Manufacturing
              </h3>
              <p className="text-gray-600">
                Recycled plastic is transformed into new products, minimizing
                environmental impact.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue">
              <Leaf className="text-blue w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue mb-4">
                Eco-Friendly Products
              </h3>
              <p className="text-gray-600">
                These products are introduced back into the market, promoting
                sustainable choices.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      {/* <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard 
  number="10M+" 
  label="Plastic Bottles Recycled" 
  numberColor="text-green"  // Pass color for the number
  labelColor="text-gray-700"    // Pass color for the label
/>
          <StatCard number="50K+" label="Trees Saved" />
          <StatCard number="30%" label="Carbon Footprint Reduced" />
        </div>
      </div> */}

      {/* How It Works Section */}
      {/* <div className="bg-blue-50 py-16"> */}
  {/* <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-blue mb-12">How It Works</h2> {/* Changed title color to blue */}
    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */} 
      {/* <ProcessStep
        number="1"
        title="Collect"
        description="Gather your plastic waste and bring it to our collection points or schedule a pickup."
        iconColor="text-green" // Pass the color class for the icon
      />
      <ProcessStep
        number="2"
        title="Recycle"
        description="We process the collected plastic using state-of-the-art recycling technology."
        iconColor="text-yellow-500" // Pass a different color for another icon
      /> */}
      {/* <ProcessStep
        number="3"
        title="Reuse"
        description="The recycled material is used to create new products, completing the cycle."
        iconColor="text-purple-500" // Another color option for the icon
      />
    </div>
  </div>
</div> */}


      {/* Call to Action */}
      <div className="bg-green py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Join the Recycling Revolution</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Every piece of plastic recycled makes a difference. Start your recycling journey today 
            and be part of the solution to plastic pollution.
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-white text-green rounded-md font-semibold hover:bg-green-50 transition-colors">
            Get Started <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
        {React.cloneElement(icon, { className: "h-6 w-6" })}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

function ProcessStep({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}