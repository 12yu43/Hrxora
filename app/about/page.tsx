import { Users, Target, Shield, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="inner-page">
      <section className="inner-hero">
        <h1>Building the Future of HR Management</h1>
        <p>
          Hrxora is on a mission to simplify workplace management for growing enterprises 
          through innovative technology and user-centric design.
        </p>
      </section>

      <section className="content-section">
        <div className="module-grid">
          <div className="module-card">
            <span className="module-icon" style={{ background: 'var(--blue)' }}>
              <Users size={22} />
            </span>
            <h3>Our Story</h3>
            <p>Started in 2024, Hrxora was built to solve the complexities of manual HR processes in manufacturing and service sectors.</p>
          </div>
          <div className="module-card">
            <span className="module-icon" style={{ background: 'var(--mint)' }}>
              <Target size={22} />
            </span>
            <h3>Our Mission</h3>
            <p>To provide a unified platform that connects employees, managers, and HR teams through real-time data and automation.</p>
          </div>
          <div className="module-card">
            <span className="module-icon" style={{ background: 'var(--lavender)' }}>
              <Shield size={22} />
            </span>
            <h3>Our Values</h3>
            <p>Transparency, security, and continuous innovation are at the core of everything we build at Hrxora.</p>
          </div>
        </div>

        <div className="prose" style={{ marginTop: '4rem' }}>
          <h2>Why Choose Hrxora?</h2>
          <p>
            Unlike traditional HRMS systems that are bloated and hard to use, Hrxora focuses on 
            efficiency. We understand that manufacturing teams need piece-rate tracking just as 
            much as office teams need payroll automation.
          </p>
          <p>
            Our platform is designed to be lightweight, fast, and accessible from any device, 
            ensuring that your workforce stays connected no matter where they are.
          </p>
        </div>
      </section>
    </main>
  );
}
