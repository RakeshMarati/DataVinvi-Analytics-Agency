import React from 'react';
import './ContentSection.css';

const ContentSection = () => {
  return (
    <section className="content-section" id="about">
      <div className="content-container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive data solutions for modern businesses</p>
          <div className="section-divider"></div>
        </div>
        
        <div className="content-grid">
          <div className="content-card featured">
            <div className="card-header">
              <div className="icon primary">📈</div>
              <div className="card-badge">Most Popular</div>
            </div>
            <h3>Data Analytics</h3>
            <p>Transform raw data into actionable insights with our advanced analytics platform. Identify trends, patterns, and opportunities that drive business growth.</p>
            <ul className="feature-list">
              <li>Real-time dashboards and reporting</li>
              <li>Predictive analytics and machine learning</li>
              <li>Custom KPI tracking and alerts</li>
              <li>Advanced data modeling and ETL</li>
            </ul>
            <button className="card-btn">Learn More</button>
          </div>

          <div className="content-card">
            <div className="card-header">
              <div className="icon secondary">🎨</div>
            </div>
            <h3>Data Visualization</h3>
            <p>Create stunning, interactive visualizations that make complex data easy to understand and share with stakeholders across your organization.</p>
            <ul className="feature-list">
              <li>Interactive charts and graphs</li>
              <li>Custom dashboard creation</li>
              <li>Mobile-responsive designs</li>
              <li>Real-time data updates</li>
            </ul>
            <button className="card-btn">Learn More</button>
          </div>

          <div className="content-card">
            <div className="card-header">
              <div className="icon accent">🔒</div>
            </div>
            <h3>Data Security</h3>
            <p>Enterprise-grade security measures to protect your sensitive data with encryption, access controls, and compliance standards.</p>
            <ul className="feature-list">
              <li>End-to-end encryption</li>
              <li>Role-based access control</li>
              <li>GDPR and SOC 2 compliance</li>
              <li>Regular security audits</li>
            </ul>
            <button className="card-btn">Learn More</button>
          </div>

          <div className="content-card">
            <div className="card-header">
              <div className="icon success">🚀</div>
            </div>
            <h3>Performance Optimization</h3>
            <p>Optimize your data processing pipelines for maximum speed and efficiency with our performance tuning expertise.</p>
            <ul className="feature-list">
              <li>Query optimization and tuning</li>
              <li>Index management and strategy</li>
              <li>Scalability planning and implementation</li>
              <li>Performance monitoring and alerts</li>
            </ul>
            <button className="card-btn">Learn More</button>
          </div>
        </div>

        <div className="section-cta">
          <h3>Ready to Transform Your Data?</h3>
          <p>Join thousands of businesses already using DataVinci to make better decisions</p>
          <button className="cta-btn">Start Free Trial</button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
