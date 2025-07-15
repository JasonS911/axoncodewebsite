import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AxonCodeWebsite = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const products = [
    {
      name: "FlashHanzi",
      status: "Live",
      statusClass: "status-live",
      description: "A comprehensive tool for learning Chinese.",
      features: [
        "Daily words and passages",
        "AI-Powered scanning and handwriting character recognition",
        "Spaced Repetition based review system",
        "Dictionary with over 100000 entries with example sentences and stroke order animations",
        "Ability to create personal notes and personal review cards"

      ]
    },
    // {
    //   name: "MindMapper",
    //   status: "In Development",
    //   statusClass: "status-development",
    //   description: "An innovative mobile app that helps users organize thoughts, create visual mind maps, and enhance creative thinking through intuitive design.",
    //   features: [
    //     "Drag-and-drop interface",
    //     "Cloud synchronization",
    //     "Collaborative editing",
    //     "Export to multiple formats"
    //   ]
    // },
    // {
    //   name: "EcoTracker",
    //   status: "In Development",
    //   statusClass: "status-development",
    //   description: "A sustainability-focused application that helps individuals and businesses track their environmental impact and discover eco-friendly alternatives.",
    //   features: [
    //     "Carbon footprint calculation",
    //     "Sustainable product recommendations",
    //     "Community challenges",
    //     "Impact visualization"
    //   ]
    // },
    // {
    //   name: "CodeMentor AI",
    //   status: "Planning",
    //   statusClass: "status-planning",
    //   description: "An intelligent coding assistant that provides personalized learning experiences, code reviews, and mentorship for developers at all levels.",
    //   features: [
    //     "AI-powered code analysis",
    //     "Personalized learning paths",
    //     "Real-time debugging assistance",
    //     "Multi-language support"
    //   ]
    // },
    // {
    //   name: "ConnectHub",
    //   status: "Planning",
    //   statusClass: "status-planning",
    //   description: "A next-generation networking platform that uses smart matching algorithms to connect professionals and foster meaningful business relationships.",
    //   features: [
    //     "AI-driven matching",
    //     "Virtual networking events",
    //     "Skill-based connections",
    //     "Integrated messaging system"
    //   ]
    // },
    // {
    //   name: "HealthVault",
    //   status: "Planning",
    //   statusClass: "status-planning",
    //   description: "A secure personal health management system that empowers users to take control of their health data and connect with healthcare providers seamlessly.",
    //   features: [
    //     "Encrypted health records",
    //     "Appointment scheduling",
    //     "Medication tracking",
    //     "Provider integration"
    //   ]
    // }
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          background: #ffffff;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Header */
        .header {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid #e5e5e5;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 0;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2563eb;
          letter-spacing: -0.02em;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
        }

        .nav-links a {
          color: #64748b;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .nav-links a:hover {
          color: #2563eb;
        }

        /* Hero Section */
        .hero {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          padding: 140px 0 100px;
          text-align: center;
        }

        .hero h1 {
          font-size: 4rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 1.5rem;
          letter-spacing: -0.04em;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: #64748b;
          margin-bottom: 3rem;
          font-weight: 400;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #2563eb;
          color: white;
          padding: 1rem 2rem;
          text-decoration: none;
          border-radius: 12px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
          cursor: pointer;
          border: none;
        }

        .cta-button:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.4);
        }

        /* Sections */
        .section {
          padding: 100px 0;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .section-subtitle {
          text-align: center;
          font-size: 1.2rem;
          color: #64748b;
          margin-bottom: 4rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Mission Section */
        .mission {
          background: #f8fafc;
        }

        .mission-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .mission-card {
          background: white;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
        }

        .mission-card p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #334155;
          margin-bottom: 1.5rem;
        }

        .mission-card p:last-child {
          margin-bottom: 0;
        }

        /* Products Grid */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 2rem;
        }

        .product-card {
          background: white;
          padding: 2.5rem;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-color: #cbd5e1;
        }

        .product-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .product-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.5rem;
        }

        .product-card p {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .product-features {
          list-style: none;
          margin-bottom: 2rem;
        }

        .product-features li {
          padding: 0.5rem 0;
          color: #475569;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .product-features li::before {
          content: '';
          width: 6px;
          height: 6px;
          background: #2563eb;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .product-status {
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.025em;
        }

        .status-live {
          background: #dcfce7;
          color: #166534;
        }

        .status-development {
          background: #fef3c7;
          color: #92400e;
        }

        .status-planning {
          background: #e0e7ff;
          color: #3730a3;
        }

        /* Footer */
        .footer {
          background: #f8fafc;
          padding: 3rem 0;
          border-top: 1px solid #e2e8f0;
          text-align: center;
        }

        .footer-content {
          color: #64748b;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-links a {
          color: #64748b;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .footer-links a:hover {
          color: #2563eb;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .hero h1 {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .products-grid {
            grid-template-columns: 1fr;
          }
          
          .footer-links {
            flex-direction: column;
            gap: 1rem;
          }
        }

        /* Animations */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .center {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
}
      `}</style>

      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="container">
          <div className="nav">
            <div className="logo">AxonCode</div>
            <ul className="nav-links">
              <li><a onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a onClick={() => scrollToSection('mission')}>Mission</a></li>
              <li><a onClick={() => scrollToSection('products')}>Products</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container">
            <h1>Building the Future,<br />One App at a Time</h1>
            <p className="hero-subtitle">
              We transform innovative ideas into powerful applications that create meaningful user experiences.
            </p>
            <button className="cta-button" onClick={() => scrollToSection('products')}>
              <span>View Our Work</span>
              <span>→</span>
            </button>
          </div>
        </section>

        <section id="mission" className="section mission">
          <div className="container">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-subtitle">Connecting brilliant ideas with exceptional execution</p>
            <div className="mission-content">
              <div className="mission-card animate-on-scroll">
                <p>
                  At AxonCode, we craft digital experiences that inspire, entertain, and empower. Whether it's a useful app or an engaging game, our focus is always on creating things people love to use.
                </p>

                <p>
                  We blend solid engineering with thoughtful design to build products that are intuitive, meaningful, and a little bit fun. From idea to launch, we collaborate closely with our partners—whether startups, studios, or solo creators—to bring bold ideas to life.

                </p>

                <p>
                  Technology should feel like magic, not machinery. We're here to make that happen.

                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="section">
          <div className="container">
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">Innovative solutions across multiple industries</p>
            <div className="products-grid">
              {products.map((product, index) => (
                <div key={index} className="product-card animate-on-scroll">
                  <div className="product-header">
                    <h3>{product.name}</h3>
                    <span className={`product-status ${product.statusClass}`}>
                      {product.status}
                    </span>
                  </div>
                  <p>{product.description}</p>
                  <ul className="product-features">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="container">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">We’d love to hear from you. Reach out anytime.</p>
            <div className="contact-details center">
              <p style={{ marginBottom: '3rem' }}>
                Email us at <a href="mailto:axoncode1@gmail.com">axoncode1@gmail.com</a></p>
              {/* <p>Or follow us on social media (coming soon!)</p> */}
            </div>
          </div>
        </section>


      </main>

      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <a onClick={() => scrollToSection('home')}>Home</a>
              <a onClick={() => scrollToSection('mission')}>Mission</a>
              <a onClick={() => scrollToSection('products')}>Products</a>
              <a onClick={() => scrollToSection('contact')}>Products</a>
            </div>
            <p>&copy; 2025 AxonCode. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AxonCodeWebsite;