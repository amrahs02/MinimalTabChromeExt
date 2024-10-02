import React from 'react';
import Features from './Features';
import Screenshots from './Screenshots';
import FAQ from './FAQ';
import Footer from './Footer';

const App = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">MinimalTab Chrome Extension</h1>
        <p className="text-lg mb-6">Boost your productivity with a minimalist design and useful features.</p>
        <a
          href="https://chrome.google.com/webstore/detail/your-extension-id"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-indigo-100 transition"
        >
          Download Now
        </a>
      </header>

      {/* Features Section */}
      <Features />

      {/* Screenshots Section */}
      <Screenshots />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
