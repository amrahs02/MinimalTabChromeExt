import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const features = [
  { title: 'Customizable backgrounds', description: 'Choose from beautiful background themes.' },
  { title: 'Task Timer', description: 'Stay on track with an integrated task timer.' },
  { title: 'Quick Access', description: 'Access Gmail, Calendar, and Todoist with one click.' },
  { title: 'Inspirational Quotes', description: 'Start your day with motivation in every tab.' },
  { title: 'Inspirational Quotes', description: 'Start your day with motivation in every tab.' },
];

const Features = () => {
  return (
    <section className="py-16 bg-white/10 backdrop-blur-lg text-center">
      <h2 className="text-4xl font-bold text-white mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/30 hover:bg-white/30 transition"
          >
            <FiCheckCircle className="text-white text-4xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
