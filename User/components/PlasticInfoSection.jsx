


import React, { useState } from 'react';
import { Recycle, Sun, Leaf } from 'lucide-react';

export default function PlasticInfoSection() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    const topics = [
        {
            title: 'Plastic Recycling Techniques',
            description: 'Learn about the advanced techniques used to recycle plastic materials and reduce waste.',
            details: 'Advanced recycling techniques include mechanical recycling, chemical recycling, and energy recovery. Mechanical recycling involves breaking down plastic waste into reusable raw materials, while chemical recycling converts plastics into monomers and other chemical substances. Energy recovery involves converting non-recyclable plastics into usable energy through processes like pyrolysis.',
            icon: <Recycle size={48} />,
            emoji: '♻️'
        },
        {
            title: 'Plastic Pollution Reduction',
            description: 'Discover ways to reduce plastic pollution in our oceans and environment.',
            details: 'Reducing plastic pollution involves using fewer single-use plastics, supporting policies that limit plastic production, and participating in beach clean-ups and other community activities. Biodegradable plastics and better waste management systems are also crucial in reducing the impact of plastic pollution on our ecosystems.',
            icon: <Sun size={48} />,
            emoji: '☀️'
        },
        {
            title: 'Eco-Friendly Plastic Alternatives',
            description: 'Explore alternatives to plastic that are biodegradable and environmentally friendly.',
            details: 'Eco-friendly alternatives include materials like bamboo, glass, and compostable bioplastics made from plant-based sources. These alternatives help reduce our dependency on conventional plastics and provide sustainable options for everyday use, from packaging to consumer products.',
            icon: <Leaf size={48} />,
            emoji: '🍃'
        }
    ];

    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto text-center px-4">
                <h2 className="text-4xl font-bold text-blue mb-4">Let's save our mother Earth</h2>
                <p className="text-gray-600 mb-12">
                Together, we can create a future where every choice we make helps restore and preserve our planet for generations to come. Lets turn small actions into a global impact.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {topics.map((topic, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out relative overflow-hidden"
                        >
                            <div className="mb-6 relative flex justify-center text-green">{topic.icon}</div>
                            <h3 className="text-xl font-semibold mb-4 relative  text-blue">{topic.title}</h3>
                            <p className="text-gray-600 mb-4 relative ">{topic.description}</p>
                            <button
                                onClick={() => handleToggle(index)}
                                className="text-green font-semibold hover:text-green-600 focus:outline-none transition-colors duration-300 relative "
                            >
                                {expandedIndex === index ? 'Show Less' : 'Read More'}
                            </button>
                            <div
                                className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out relative z-10 ${
                                    expandedIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="bg-green-50 p-6 rounded-lg text-left shadow-md">
                                    <p className="text-gray-700 leading-relaxed">{topic.details}</p>
                                </div>
                            </div>
                            <div 
                                className={`absolute inset-0 transition-all duration-500 ease-in-out opacity-15 flex items-center justify-center overflow-hidden ${
                                    expandedIndex === index ? 'scale-100' : 'scale-0'
                                }`}
                            >
                                <span className="text-[400px] leading-none text-green-100">
                                    {topic.emoji}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}