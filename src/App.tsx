import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Biography } from './components/Biography';
import { Journey } from './components/Journey';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-900">
      <Navigation />
      <Hero />
      <Biography />
      <Journey />
      <Footer />
    </div>
  );
}

export default App;