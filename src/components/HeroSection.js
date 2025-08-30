import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Welcome to <span className="highlight">DataVinci</span>
            </h1>
            <p className="hero-subtitle">
              Transforming data into meaningful insights with cutting-edge analytics and visualization. 
              Our platform empowers businesses to make data-driven decisions with confidence.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
              <button className="btn btn-outline">View Demo</button>
            </div>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-card primary">
            <div className="card-icon">📊</div>
            <h3>Advanced Analytics</h3>
            <p>Real-time insights and predictive modeling for informed decision-making</p>
            <div className="card-features">
              <span className="feature-tag">AI-Powered</span>
              <span className="feature-tag">Real-time</span>
            </div>
          </div>
          
          <div className="hero-card secondary">
            <div className="card-icon">🎨</div>
            <h3>Data Visualization</h3>
            <p>Beautiful, interactive charts and dashboards that tell your data story</p>
            <div className="card-features">
              <span className="feature-tag">Interactive</span>
              <span className="feature-tag">Customizable</span>
            </div>
          </div>
          
          <div className="hero-card accent">
            <div className="card-icon">🔒</div>
            <h3>Enterprise Security</h3>
            <p>Bank-level security with compliance and data protection standards</p>
            <div className="card-features">
              <span className="feature-tag">GDPR Ready</span>
              <span className="feature-tag">SOC 2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
