import React, { useState } from 'react';

const faqs = [
  { question: 'How do I install the extension?', answer: 'Click the download button above to install the extension from the Chrome Web Store.' },
  { question: 'Is it free to use?', answer: 'Yes, MinimalTab is completely free to use.' },
  { question: 'How do I customize the background?', answer: 'You can change the background by clicking the settings icon in the extension.' },
  { question: 'Is my data safe?', answer: 'We don’t collect any personal data. Your information is completely secure.' },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="py-16 bg-white/10  backdrop-blur-lg  text-center ">
      <h2 className="text-4xl font-bold text-white mb-8">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full text-left bg-white/20 backdrop-blur-lg shadow-lg p-4 rounded-2xl border border-white/30"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold text-white">
                {faq.question}
                <span className="float-right">{open === index ? '-' : '+'}</span>
              </h3>
            </button>
            {open === index && (
              <p className="p-4 text-gray-200">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
