import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ContentSection from './components/ContentSection';
import NestedCheckbox from './components/NestedCheckbox';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <HeroSection />
        <ContentSection />
        <NestedCheckbox />
      </main>
    </div>
  );
}

export default App;
