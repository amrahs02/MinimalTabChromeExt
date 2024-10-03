import React from "react";
import Features from "./Features";
import Screenshots from "./Screenshots";
import FAQ from "./FAQ";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-purpl-700 via-indig bg-teal-800 min-h-screen">
      {/* Hero Section */}
      <header className="text-center py-32">
        <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl p-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6">
            MinimalTab Chrome Extension
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Boost your productivity with a minimalist design and useful
            features.
          </p>
          <a
            href="https://chrome.google.com/webstore/detail/your-extension-id"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/50 transition shadow-lg backdrop-blur-sm"
          >
            Download Now
          </a>
          {/* Disclaimer */}
          <p className="text-sm text-yellow-400 mt-4">
            * Soon, this extension will be available for download from the
            Chrome Web Store.
          </p>
        </div>
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
