import React, { useState, useEffect } from "react";

const AxonCodeContact = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitStatus("success");
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitStatus("");
    }, 5000);
  };

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
          text-decoration: none;
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
          padding: 140px 0 80px;
          text-align: center;
        }

        .hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 1.5rem;
          letter-spacing: -0.04em;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: #64748b;
          margin-bottom: 2rem;
          font-weight: 400;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Contact Section */
        .contact-section {
          padding: 80px 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info {
          padding: 2rem;
        }

        .contact-info h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .contact-info p {
          font-size: 1.1rem;
          color: #64748b;
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        .contact-details {
          space-y: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .contact-icon {
          width: 48px;
          height: 48px;
          background: #2563eb;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          flex-shrink: 0;
        }

        .contact-item-content h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 0.25rem;
        }

        .contact-item-content p {
          color: #64748b;
          margin: 0;
        }

        .contact-item-content a {
          color: #2563eb;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-item-content a:hover {
          color: #1d4ed8;
        }

        /* Form */
        .contact-form {
          background: white;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.5rem;
        }

        .form-input {
          width: 100%;
          padding: 0.875rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: #ffffff;
        }

        .form-input:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .form-textarea {
          min-height: 120px;
          resize: vertical;
        }

        .form-submit {
          width: 100%;
          background: #2563eb;
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }

        .form-submit:hover:not(:disabled) {
          background: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.4);
        }

        .form-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .submit-status {
          margin-top: 1rem;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-weight: 500;
          text-align: center;
        }

        .submit-status.success {
          background: #dcfce7;
          color: #166534;
          border: 1px solid #bbf7d0;
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
        }

        .footer-links a:hover {
          color: #2563eb;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .hero h1 {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
          
          .contact-form {
            padding: 2rem;
          }
          
          .contact-info {
            padding: 1rem;
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
      `}</style>

      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <nav className="container">
          <div className="nav">
            <a href="#" className="logo">
              AxonCode
            </a>
            <ul className="nav-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Mission</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#" style={{ color: "#2563eb" }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Get in Touch</h1>
            <p className="hero-subtitle">
              Ready to bring your ideas to life? Let's start a conversation
              about your next project.
            </p>
          </div>
        </section>

        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info animate-on-scroll">
                <h2>Let's Build Something Amazing</h2>
                <p>
                  Whether you have a groundbreaking app idea, need a custom
                  solution, or want to collaborate on your next big project,
                  we're here to help turn your vision into reality.
                </p>

                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">@</div>
                    <div className="contact-item-content">
                      <h3>Email</h3>
                      <p>
                        <a href="mailto:hello@axoncode.com">
                          hello@axoncode.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">📍</div>
                    <div className="contact-item-content">
                      <h3>Location</h3>
                      <p>
                        Remote & On-site
                        <br />
                        Serving clients worldwide
                      </p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">⚡</div>
                    <div className="contact-item-content">
                      <h3>Response Time</h3>
                      <p>We typically respond within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form animate-on-scroll">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-input form-textarea"
                    placeholder="Tell us about your project, ideas, or how we can help..."
                    required
                  />
                </div>

                <button
                  type="button"
                  className="form-submit"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitStatus === "success" && (
                  <div className="submit-status success">
                    ✓ Thank you for your message! We'll get back to you soon.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <a href="#">Home</a>
              <a href="#">Mission</a>
              <a href="#">Products</a>
              <a href="mailto:hello@axoncode.com">Contact</a>
            </div>
            <p>&copy; 2025 AxonCode. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AxonCodeContact;
