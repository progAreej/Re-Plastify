
// import React from 'react';
// import { motion } from 'framer-motion';

// export default function OurStorySection() {
//     return (
//         <section className="bg-white py-20 px-4 md:px-28">
//             <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
//                 {/* Text Column */}
//                 <div className="md:w-1/2 mb-8 md:mb-0 pr-12">
//                     <motion.h2 
//                         className="text-4xl font-bold mb-6 text-green"
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.3 }}
//                     >
//                         Our Story
//                     </motion.h2>
//                     <motion.p 
//                         className="text-lg mb-6"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.6 }}
//                     >
//                         Founded with a passion for sustainability, Re Plastify started its journey to combat the global plastic waste crisis. Our story began with a simple idea: to recycle plastic effectively and creatively, turning waste into valuable resources for future generations.
//                     </motion.p>
                    
//                     <motion.p 
//                         className="text-lg mb-6"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 1.2 }}
//                     >
//                         Join us on this journey as we continue to inspire change, educate communities, and create a cleaner, greener planet for everyone. Together, we can turn the tide against plastic pollution and promote a sustainable future.
//                     </motion.p>
//                     <motion.div 
//                         className="mt-8"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 1.5 }}
//                     >
//                         <a 
//                             href="/about" 
//                             className="inline-block bg-blue hover:bg-blueD text-white font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
//                         >
//                             Learn More About Our Journey
//                         </a>
//                     </motion.div>
//                 </div>

//                 {/* Image Column */}
//                 <div className="md:w-1/2">
//                     <motion.img 
//                         src="https://img.freepik.com/premium-photo/person-recycling-plastic-bottles-recycling-bin_693425-33809.jpg" 
//                         alt="Our Recycling Process" 
//                         className="rounded-lg shadow-lg"
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.6, delay: 1.5 }}
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// }


import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, RecycleIcon, Lightbulb, Globe } from 'lucide-react';

const FeatureBox = ({ Icon, title, description }) => (
  <motion.div 
    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    whileHover={{ y: -5 }}
  >
    <Icon className="w-12 h-12 text-green mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default function OurStorySection() {
  return (
    <section className="bg-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Our <span className="text-green">Recycling</span> Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming plastic waste into sustainable solutions, one innovation at a time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Recycling Process" 
              className="rounded-md shadow-lg w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-semibold mb-2">Our Impact</p>
              <p className="text-3xl font-bold">1M+ Tons Recycled</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blueD">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              Founded with a passion for sustainability, Re Plastify embarked on a mission to combat the global plastic waste crisis. Our journey began with a simple yet powerful idea: to recycle plastic effectively and creatively, turning waste into valuable resources for future generations.
            </p>
            <p className="text-gray-600 mb-6">
              Today, we continue to inspire change, educate communities, and create innovative solutions for a cleaner, greener planet. Join us as we turn the tide against plastic pollution and shape a sustainable future for all.
            </p>
            <motion.a 
              href="/about" 
              className="inline-flex items-center text-green font-semibold hover:text-blueD transition-colors duration-300"
              whileHover={{ x: 5 }}
            >
              Learn More About Our Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <FeatureBox 
            Icon={RecycleIcon}
            title="Innovative Recycling"
            description="Utilizing cutting-edge technology to transform plastic waste into valuable resources."
          />
          <FeatureBox 
            Icon={Lightbulb}
            title="Sustainable Products"
            description="Creating eco-friendly products that reduce environmental impact without compromising quality."
          />
          <FeatureBox 
            Icon={Globe}
            title="Global Impact"
            description="Collaborating with partners worldwide to tackle plastic pollution on a global scale."
          />
        </motion.div>
      </div>
    </section>
  );
}