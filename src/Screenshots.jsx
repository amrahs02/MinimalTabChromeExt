import React from 'react';
import img1 from './assets/image1.png'
import img2 from './assets/image2.png'
import img3 from './assets/image3.png'

const Screenshots = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl font-bold text-white mb-8">Screenshots</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        <div className="bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 shadow-lg p-4">
          <img src={img1} alt="Screenshot 1" className="rounded-2xl" />
        </div>
        <div className="bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 shadow-lg p-4">
          <img src={img2} alt="Screenshot 2" className="rounded-2xl" />
        </div>
        <div className="bg-white/20 backdrop-blur-lg rounded-2xl border border-white/30 shadow-lg p-4">
          <img src={img3} alt="Screenshot 3" className="rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
