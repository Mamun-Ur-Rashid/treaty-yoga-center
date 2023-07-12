import React, { useState } from 'react';
import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi';

const FrequentlyAskedQuestion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="shadow-md rounded-lg overflow-hidden  mx-auto md:w-3/4">
      <button
        className="flex items-center justify-between w-full focus:outline-none p-4 bg-gray-300 hover:bg-gray-300 transition-colors"
        onClick={toggleAnswer}
      >
        <h3 className="text-lg font-medium text-center">{question}</h3>
        {isOpen ? (
          <HiOutlineMinus className="text-gray-500" />
        ) : (
          <HiOutlinePlus className="text-gray-500" />
        )}
      </button>
      {isOpen && <p className="p-4">{answer}</p>}
    </li>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What are the dates of the summer camp?",
      answer: "The summer camp runs from July 1st to August 15th.",
    },
    {
      question: "What are the camp's operating hours?",
      answer: "The camp is open from 9:00 AM to 4:00 PM, Monday to Friday.",
    },
    {
      question: "Are meals provided at the camp?",
      answer: "Yes, we provide nutritious meals and snacks for all campers.",
    },
    {
      question: "What should my child bring to the camp?",
      answer:
        "Your child should bring comfortable clothing, a water bottle, sunscreen, a hat, and a yoga mat if available.",
    },
    {
      question: "Are there any age restrictions for the camp?",
      answer: "The camp is open to children aged 6-12 years.",
    },
    {
      question: "Do you offer financial assistance or scholarships?",
      answer:
        "We have limited financial assistance available. Please contact us for more information.",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <ul className="space-y-4">
        {faqs.map((faq, index) => (
          <FrequentlyAskedQuestion
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
