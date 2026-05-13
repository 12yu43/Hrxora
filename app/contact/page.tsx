import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="inner-page">
      <section className="inner-hero">
        <h1>Get in Touch</h1>
        <p>
          Have questions about Hrxora? Our team is here to help you simplify your HR operations.
        </p>
      </section>

      <section className="content-section">
        <div className="payroll-panel">
          <div className="panel">
            <h3>Send us a Message</h3>
            <form className="form-grid">
              <div className="field">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="field">
                <label>Work Email</label>
                <input type="email" placeholder="john@company.com" />
              </div>
              <div className="field" style={{ gridColumn: 'span 2' }}>
                <label>Company Name</label>
                <input type="text" placeholder="Acme Inc" />
              </div>
              <div className="field" style={{ gridColumn: 'span 2' }}>
                <label>Message</label>
                <textarea 
                  style={{ 
                    width: '100%', 
                    minHeight: '120px', 
                    padding: '1rem', 
                    borderRadius: '0.6rem', 
                    border: '1px solid var(--line)',
                    background: 'var(--bg)',
                    color: 'var(--ink)',
                    font: 'inherit'
                  }} 
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button className="btn primary" style={{ gridColumn: 'span 2' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

          <div className="panel">
            <h3>Contact Information</h3>
            <div className="prose">
              <p>Feel free to reach out to us through any of these channels. We typically respond within 24 hours.</p>
              
              <div className="contact-item" style={{ marginTop: '2rem' }}>
                <Mail size={20} />
                <div style={{ marginLeft: '1rem' }}>
                  <strong>Email</strong>
                  <p>support@hrxora.com</p>
                </div>
              </div>

              <div className="contact-item" style={{ marginTop: '1.5rem' }}>
                <Phone size={20} />
                <div style={{ marginLeft: '1rem' }}>
                  <strong>Phone</strong>
                  <p>+91 99999 00000</p>
                </div>
              </div>

              <div className="contact-item" style={{ marginTop: '1.5rem' }}>
                <MapPin size={20} />
                <div style={{ marginLeft: '1rem' }}>
                  <strong>Office</strong>
                  <p>Sector 62, Noida, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
