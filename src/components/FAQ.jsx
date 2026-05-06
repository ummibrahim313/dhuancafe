import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      question: "Do you take reservations?",
      answer: "Yes! We highly recommend reservations on weekends. You can book via WhatsApp or call us directly."
    },
    {
      question: "Do you have parking available?",
      answer: "Yes, we have dedicated parking spaces available for our customers right outside the cafe."
    },
    {
      question: "Do you offer delivery?",
      answer: "Currently we offer delivery through WhatsApp orders for nearby areas. Full delivery service coming soon!"
    },
    {
      question: "Are you open on holidays?",
      answer: "We're open on most holidays with slightly adjusted hours. Please check our social media for special holiday schedules."
    }
  ];

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-chai-bg">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-chai-dark uppercase mb-4">Frequently Asked Questions</h2>
          <p className="text-chai-dark/80 text-lg font-body max-w-2xl mx-auto">
            Everything you need to know about Dhuan Cafe
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden border border-chai-light/30"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-chai-dark hover:bg-chai-main transition-colors"
              >
                <span className="font-heading text-lg font-semibold text-white">{faq.question}</span>
                {expandedFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-chai-light" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-chai-light" />
                )}
              </button>
              
              {expandedFaq === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-4 bg-white"
                >
                  <p className="text-chai-dark/80 font-body">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
