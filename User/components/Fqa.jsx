

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Leaf } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className="mb-4 last:mb-0"
    >
      <motion.button
        className={`flex justify-between items-center w-full py-3 px-5 text-left rounded-lg transition-all duration-300 ${
          isOpen ? 'bg-green-600 text-white' : 'bg-white text-green-800 hover:bg-green-50'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-base font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </motion.button>
      {isOpen && (
        <motion.div
          className="mt-1 py-3 px-5 bg-white rounded-lg shadow-inner"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-sm text-gray-600">{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "What is the main goal of your organization?",
      answer: "Our main goal is to promote sustainable practices and raise awareness about environmental issues, particularly focusing on reducing plastic pollution and promoting eco-friendly alternatives."
    },
    {
      question: "How can I get involved in your initiatives?",
      answer: "There are many ways to get involved! You can volunteer for our local clean-up events, participate in our awareness campaigns, or donate to support our projects. Check our 'Get Involved' page for more details."
    },
    {
      question: "Do you offer educational programs for schools?",
      answer: "Yes, we offer tailored educational programs for schools to teach students about environmental conservation and sustainability. These programs include workshops, presentations, and hands-on activities."
    },
    {
      question: "How do you measure the impact of your work?",
      answer: "We measure our impact through various metrics, including the amount of plastic waste collected and recycled, the number of people reached through our awareness campaigns, and the adoption rates of sustainable practices in communities we work with."
    },
    {
      question: "Are you affiliated with any government organizations?",
      answer: "While we collaborate with various government agencies on specific projects, we are an independent non-profit organization. This allows us to maintain our focus and adapt quickly to emerging environmental challenges."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <Leaf className="w-12 h-12 text-green-500 mx-auto mb-2" />
          <h2 className="text-3xl font-bold text-green mb-2">Frequently Asked Questions</h2>
          <p className="text-base text-green">Find answers to common questions about our mission and initiatives</p>
        </div>
        <div className="bg-green bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-6">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
