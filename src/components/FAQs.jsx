import React, { useState } from 'react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why is this service free, where's the catch?",
      answer: "HR360 is free for employees with limited access. Free sign up allows a company to evaluate HR360 before making their purchase."
    },
    {
      question: "Is the purchase one time, monthly or annual ?",
      answer: "HR360 is a monthly subscription service. However if you pre-pay for a yearly plan, you get over 30% discount."
    },
    {
      question: "How soon will my HR360 be ready after making the purchase ?",
      answer: "As soon as you contact for HR360, for either free of a paid plan, your HR360 account will be ready."
    },
    {
      question: "How long does it take to get a response from HR360 Support ?",
      answer: "HR360's standard response time is 1-2 business days, but we try our best to respond to all queries within the several hours or maximum by the next business day."
    },
    {
      question: "Do you offer phone support?",
      answer: "HR360 does provide Phone Support to all of our Paid clients. Please email us a callback number and an appropriate time to call (including your timezone) and one of our Support Representative will give you a call."
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div className="pt-6" key={index}>
                <dt className="text-lg">
                  <button
                    type="button"
                    className="text-left w-full flex justify-between items-start text-gray-400"
                    onClick={() => toggleFAQ(index)}
                    aria-controls={`faq-${index}`}
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <span className="ml-6 h-7 flex items-center">
                      <svg
                        className={`h-6 w-6 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="mt-2 pr-12" id={`faq-${index}`}>
                    <p className="text-base text-gray-500">{faq.answer}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
