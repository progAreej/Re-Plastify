

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/legacy/image";
import {
  Building2,
  Users,
  Globe,
  Target,
  Award,
  RefreshCcw,
  Leaf,
  Trash2,
  Package,
  AlertTriangle,
} from "lucide-react";
import HighResEarth from "../components/HighResEarth";
import HeroSlideshow from "../components/HeroSlideshow";
import PlasticInfoSection from "../components/PlasticInfoSection";
import logo1 from "../public/textures/schneiderLogo.png";
import logo2 from "../public/textures/necLogo.png";
import logo3 from "../public/textures/Logo3.png";
import logo4 from "../public/textures/Logo4.png";
import logo5 from "../public/textures/Logo5.png";
import FAQ from "@/components/Fqa";
import PrizeList from "@/components/PrizeList";
import AwardedPrizes from "@/components/AwardedPrizes";
import OurStorySection from "@/components/OurStory";

export default function HomePage() {
  const [isScrolling, setIsScrolling] = useState(true);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [prizes, setPrizes] = useState([]);
  const [awardedPrizes, setAwardedPrizes] = useState([]);

  useEffect(() => {
    fetchPrizes();
    fetchAwardedPrizes();
  }, []);

  const fetchPrizes = async () => {
    try {
      const response = await fetch("/api/prizes");
      const data = await response.json();
      setPrizes(data);
    } catch (error) {
      console.error("Error fetching prizes:", error);
    }
  };

  // const fetchAwardedPrizes = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/api/user-prizes");
  //     const data = await response.json();
  //     setAwardedPrizes(data);
  //   } catch (error) {
  //     console.error("Error fetching awarded prizes:", error);
  //   }
  // };

  const fetchAwardedPrizes = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/user-prizes");
      const data = await response.json();
  
      // Limit to the first three items
      const limitedData = data.slice(0, 3); 
      setAwardedPrizes(limitedData);
    } catch (error) {
      console.error("Error fetching awarded prizes:", error);
    }
  };
  

  const partners = [
    {
      name: "Schneider Electric",
      logo: logo1,
      description: "A global leader in energy management and automation...",
      details: {
        founded: "1836",
        headquarters: "Rueil-Malmaison, France",
        sustainability: "Committed to carbon neutrality by 2025...",
        initiatives: [
          "Energy efficient solutions",
          "Smart grid technology",
          "Sustainable resource management",
          "Green building solutions",
        ],
      },
      email: "contact@schneider-electric.com",
      phone: "+1 555 123 4567",
    },
    {
      name: "NEC Corporation",
      logo: logo2,
      description:
        "NEC Corporation is a leader in the integration of IT and network technologies...",
      details: {
        founded: "1899",
        headquarters: "Tokyo, Japan",
        sustainability: "Committed to reducing CO2 emissions by 55% by 2030...",
        initiatives: [
          "Smart city solutions",
          "Biometric authentication systems",
          "AI-driven sustainability solutions",
          "Digital transformation technologies",
        ],
      },
      email: "info@nec.com",
      phone: "+81 3-1234-5678",
    },
    {
      name: "Moncler",
      logo: logo3,
      description: "Moncler is a luxury fashion brand...",
      details: {
        founded: "1952",
        headquarters: "Milan, Italy",
        sustainability: "Aims to be carbon neutral by 2025...",
        initiatives: [
          "Sustainable materials sourcing",
          "Responsible down standard",
          "Circular economy practices",
          "Supply chain transparency",
        ],
      },
      email: "support@moncler.com",
      phone: "+39 02 1234 5678",
    },
    {
      name: "SGS",
      logo: logo4,
      description:
        "SGS is the world's leading testing, inspection and certification company...",
      details: {
        founded: "1878",
        headquarters: "Geneva, Switzerland",
        sustainability:
          "Provides crucial sustainability certification services globally...",
        initiatives: [
          "Environmental certification",
          "Supply chain audits",
          "Quality assurance",
          "Sustainability consulting",
        ],
      },
      email: "sustainability@sgs.com",
      phone: "+41 22 123 4567",
    },
    {
      name: "Sanofi",
      logo: logo5,
      description: "Sanofi is a global biopharmaceutical company...",
      details: {
        founded: "2004",
        headquarters: "Paris, France",
        sustainability: "Committed to carbon neutrality by 2030...",
        initiatives: [
          "Healthcare accessibility",
          "Sustainable drug development",
          "Eco-friendly packaging",
          "Water conservation in operations",
        ],
      },
      email: "info@sanofi.com",
      phone: "+33 1 1234 5678",
    },
  ];

  const handlePartnerClick = (partner) => {
    setIsScrolling(false);
    setSelectedPartner(partner);
  };

  const handleCloseInfo = () => {
    setIsScrolling(true);
    setSelectedPartner(null);
  };

  return (
    <div>
      {/* Hero Slideshow Section */}
      <HeroSlideshow />
      <OurStorySection />
<AwardedPrizes awardedPrizes={awardedPrizes}/>
      {/* Plastic Info Section */}
      <PlasticInfoSection />
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <PrizeList prizes={prizes} />
        </div>
      </section>

      {/* How It Works Section - Updated with blue theme */}
      {/* <section className="bg-blue-20 py-16">
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
      </section> */}

      {/* Carbon Reduction Impact Section - New Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue mb-8">
            Impact on Carbon Reduction
          </h2>
          <p className="text-gray-600 mb-12">
            Our recycling efforts contribute significantly to reducing carbon
            emissions. Here's how:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green mb-4">
                3 Tons CO2 Saved
              </h3>
              <p className="text-gray-600">
                For every ton of plastic recycled, we prevent 3 tons of CO2 from
                entering the atmosphere.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green mb-4">
                80% Energy Reduction
              </h3>
              <p className="text-gray-600">
                Recycling plastic uses 80% less energy than producing new
                plastic, significantly reducing carbon emissions.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green mb-4">
                1,000 Trees Equivalent
              </h3>
              <p className="text-gray-600">
                Our annual recycling efforts have the same carbon-reducing
                effect as planting 1,000 trees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Damage Section - Updated with blue theme */}
      {/* <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue mb-8">
            Plastic Damage in Zarqa, Jordan
          </h2>
          <p className="text-gray-600 mb-12">
            The environmental impact of plastic waste in Zarqa is devastating.
            Here are the numbers:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
              <AlertTriangle className="text-blue-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-blue mb-4">
                500 Tons
              </h3>
              <p className="text-gray-600">
                Amount of plastic waste generated annually in Zarqa.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
              <AlertTriangle className="text-blue-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-blue mb-4">80%</h3>
              <p className="text-gray-600">
                Percentage of plastic waste that ends up in landfills and open
                spaces.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
              <AlertTriangle className="text-blue-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-blue mb-4">
                300 Years
              </h3>
              <p className="text-gray-600">
                Estimated time it takes for plastic waste to decompose, causing
                long-term environmental damage.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Earth Section */}
      <section className="bg-white text-gray-800 py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8">
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-blue mb-8">
                Our Planet, Our Responsibility
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                🌍 Every action we take today helps secure a better future for
                our planet.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                ♻️ Recycling plastic reduces waste and prevents pollution.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                🚴 Opting for eco-friendly transportation can significantly
                lower CO2 emissions.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                🌿 Planting trees helps combat climate change and purifies our
                air.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                💧 Conserving water ensures a healthier ecosystem for all living
                beings.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 h-[600px]">
            <HighResEarth />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue text-center mb-8">
            Our Global Partners
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We collaborate with industry leaders who share our commitment to
            sustainability and environmental protection.
          </p>
          <div className="relative">
            <div className={`flex ${isScrolling ? "animate-scroll" : ""}`}>
              {[1, 2].map((set) => (
                <div key={set} className="flex space-x-16 mx-8">
                  {partners.map((partner, index) => (
                    <div
                      key={index}
                      className="w-40 h-20 flex items-center justify-center cursor-pointer transform transition-transform duration-300 hover:scale-110"
                      onClick={() => handlePartnerClick(partner)}
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={160}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedPartner && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-green">
                  {selectedPartner.name}
                </h3>
                <button
                  onClick={handleCloseInfo}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-green-20 p-6 rounded-lg">
                    <Image
                      src={selectedPartner.logo}
                      alt={selectedPartner.name}
                      width={200}
                      height={100}
                      className="object-contain mb-4"
                    />
                    <p className="text-gray-700 text-lg">
                      {selectedPartner.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Building2 className="text-green" />
                      <span className="font-semibold">Founded:</span>
                      <span>{selectedPartner.details.founded}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="text-green" />
                      <span className="font-semibold">Headquarters:</span>
                      <span>{selectedPartner.details.headquarters}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-green mb-4 flex items-center">
                      <Target className="mr-2" />
                      Sustainability Commitment
                    </h4>
                    <p className="text-gray-700">
                      {selectedPartner.details.sustainability}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-green mb-4 flex items-center">
                      <Award className="mr-2" />
                      Key Initiatives
                    </h4>
                    <ul className="space-y-2">
                      {selectedPartner.details.initiatives.map(
                        (initiative, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-green rounded-full mr-3"></span>
                            {initiative}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Contact Details Section */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-green mb-4 flex items-center">
                      <Users className="mr-2" />
                      Contact Information
                    </h4>
                    <p className="text-gray-700">
                      <strong>Email: </strong>
                      {selectedPartner.email}
                    </p>
                    <p className="text-gray-700">
                      <strong>Phone: </strong>
                      {selectedPartner.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* <section>
        <FAQ />
      </section> */}

<section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue mb-8">
            Plastic Damage in Zarqa, Jordan
          </h2>
          <p className="text-gray-600 mb-12">
            The environmental impact of plastic waste in Zarqa is devastating.
            Here are the numbers:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
              <AlertTriangle className="text-blue-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-blue mb-4">
                500 Tons
              </h3>
              <p className="text-gray-600">
                Amount of plastic waste generated annually in Zarqa.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
              <AlertTriangle className="text-blue-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-blue mb-4">80%</h3>
              <p className="text-gray-600">
                Percentage of plastic waste that ends up in landfills and open
                spaces.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
              <AlertTriangle className="text-blue-600 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-blue mb-4">
                300 Years
              </h3>
              <p className="text-gray-600">
                Estimated time it takes for plastic waste to decompose, causing
                long-term environmental damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
