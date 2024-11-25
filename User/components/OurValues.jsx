import React from 'react';
import { Leaf, Users, Target } from 'lucide-react';

export default function OurValues() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-blue mb-8">Our Values</h2>
                <p className="text-lg text-gray-700 mb-12">
                    We believe in a sustainable future built on the principles of innovation, responsibility, and community.
                    Our core values guide every decision we make as we strive to protect the environment and uplift society.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-center justify-center mb-4">
                            <Leaf className="text-green w-12 h-12" />
                        </div>
                        <h3 className="text-xl font-semibold text-blueD mb-2">Sustainability</h3>
                        <p className="text-gray-700">
                            We are committed to reducing our environmental footprint and helping our partners and customers achieve their sustainability goals.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-center justify-center mb-4">
                            <Users className="text-green w-12 h-12" />
                        </div>
                        <h3 className="text-xl font-semibold text-blueD mb-2">Community</h3>
                        <p className="text-gray-700">
                            Building strong communities is at the heart of what we do, ensuring inclusivity and positive impact in every project we undertake.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-center justify-center mb-4">
                            <Target className="text-green w-12 h-12" />
                        </div>
                        <h3 className="text-xl font-semibold text-blueD mb-2">Innovation</h3>
                        <p className="text-gray-700">
                            By harnessing the power of technology, we aim to drive forward solutions that tackle today's most pressing environmental challenges.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
