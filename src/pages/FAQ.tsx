import  { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Navbar2 } from '../components/Navbar2.tsx';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How can I report illegal dumping or improper waste management?",
    answer: "Use the designated government helpline or mobile app to report violations, providing details like location and photos."
  },
  {
    question: "How can I volunteer for community waste management programs?",
    answer: "Contact your local waste management department to learn about volunteering opportunities, awareness drives, and clean-up events."
  },
  {
    question: "Where can I find updates on waste management initiatives in my area?",
    answer: "Visit the official municipal website, follow social media pages, or sign up for newsletters to stay informed about programs and updates."
  },
  {
    question: "What types of waste should be segregated?",
    answer: "Waste should be segregated into organic (food waste), recyclables (paper, plastic, glass), hazardous waste, and e-waste."
  },
  {
    question: "How can I start composting at home?",
    answer: "Begin with a composting bin, add green materials (food scraps) and brown materials (dry leaves), maintain moisture, and turn regularly."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (<div>
  
      <Navbar2 />
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}