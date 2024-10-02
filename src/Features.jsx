import React from 'react';
// import { FiCheckCircle } from 'react-icons/fi';

const features = [
  { title: 'Customizable backgrounds', description: 'Choose from beautiful background themes.' },
  { title: 'Task Timer', description: 'Stay on track with an integrated task timer.' },
  { title: 'Quick Access', description: 'Access Gmail, Calendar, and Todoist with one click.' },
  { title: 'Inspirational Quotes', description: 'Start your day with motivation in every tab.' },
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-lg">
            {/* <FiCheckCircle className="text-indigo-600 text-4xl mb-4 mx-auto" /> */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
