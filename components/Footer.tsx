import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-mark">Hx</span>
            Hrxora
          </div>
          <p>Lightweight HRMS, Payroll and Production Tracking system.</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-group">
            <h4>Product</h4>
            <a href="#modules">Modules</a>
            <a href="#production">Production</a>
            <a href="#apis">APIs</a>
          </div>
          <div className="footer-group">
            <h4>Resources</h4>
            <a href="#">Documentation</a>
            <a href="#">Support</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footer-group">
            <h4>Contact</h4>
            <a href="mailto:support@hrxora.com">Email Us</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
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
