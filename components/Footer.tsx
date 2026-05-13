import { 
  Heart, 
  Linkedin, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  Send 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div className="newsletter-content">
          <h3>Subscribe for HR updates & product news</h3>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" aria-label="Email for newsletter" />
            <button className="btn primary">
              Subscribe <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-mark">Hx</span>
            Hrxora
          </div>
          <p>
            Smart HRMS platform for payroll, attendance, employee management & recruitment. 
            Simplifying HR operations for modern teams.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
          </div>
        </div>
        
        <div className="footer-links-grid">
          <div className="footer-group">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/features">Features</a>
            <a href="/pricing">Pricing</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/careers">Careers</a>
            <a href="/blog">Blog</a>
          </div>
          <div className="footer-group">
            <h4>HRMS Features</h4>
            <a href="/features">Payroll Management</a>
            <a href="/features">Attendance Tracking</a>
            <a href="/features">Leave Management</a>
            <a href="/features">Recruitment</a>
            <a href="/features">Employee Self Service</a>
            <a href="/features">Performance Management</a>
            <a href="/features">Mobile App</a>
          </div>
          <div className="footer-group">
            <h4>Resources</h4>
            <a href="/faq">Help Center</a>
            <a href="/faq">Documentation</a>
            <a href="/faq">FAQs</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-and-conditions">Terms & Conditions</a>
            <a href="/contact">Support</a>
          </div>
          <div className="footer-group">
            <h4>Contact Details</h4>
            <div className="contact-item">
              <Mail size={16} />
              <span>support@hrxora.com</span>
            </div>
            <div className="contact-item">
              <Phone size={16} />
              <span>+91 99999 00000</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <span>Noida, India</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Hrxora. All rights reserved.</p>
        <p className="made-with">
          Made with <Heart size={14} fill="currentColor" /> for HR Teams
        </p>
      </div>
    </footer>
  );
}
