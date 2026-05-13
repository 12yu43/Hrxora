import { CheckCircle2, IndianRupee } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "₹2,999",
    duration: "per month",
    description: "Ideal for small teams up to 50 employees.",
    features: ["Employee Management", "Attendance Tracking", "Leave Management", "ESS Mobile App", "Standard Reports"],
    color: "var(--blue)",
    btnClass: "ghost",
  },
  {
    name: "Professional",
    price: "₹7,499",
    duration: "per month",
    description: "Best for growing businesses with advanced needs.",
    features: ["Everything in Starter", "Automated Payroll", "Statutory Compliance", "Performance Mgmt", "Production Tracking", "API Access"],
    color: "var(--blue)",
    btnClass: "primary",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    duration: "contact sales",
    description: "For large organizations requiring full control.",
    features: ["Everything in Professional", "Custom Workflows", "Dedicated Support", "On-premise Option", "Advanced Security", "Unlimited History"],
    color: "var(--ink)",
    btnClass: "ghost",
  },
];

export default function PricingPage() {
  return (
    <main className="inner-page">
      <section className="inner-hero">
        <h1>Simple, Transparent Pricing</h1>
        <p>
          Choose the plan that fits your company&apos;s size and needs. No hidden fees, 
          cancel or upgrade at any time.
        </p>
      </section>

      <section className="content-section">
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={plan.name}>
              {plan.popular && <span className="popular-badge">Most Popular</span>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="duration">{plan.duration}</span>
              </div>
              <p className="plan-desc">{plan.description}</p>
              <div className="plan-features">
                {plan.features.map((f) => (
                  <div className="plan-feature" key={f}>
                    <CheckCircle2 size={18} color="var(--blue)" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <button className={`btn ${plan.btnClass}`}>Get Started</button>
            </div>
          ))}
        </div>

        <div className="prose" style={{ marginTop: '5rem', textAlign: 'center' }}>
          <h2>Frequently Asked Questions</h2>
          <div className="module-grid" style={{ textAlign: 'left', marginTop: '3rem' }}>
            <div className="module-card">
              <h4>Can I change plans later?</h4>
              <p>Yes, you can upgrade or downgrade your plan at any time from your billing dashboard.</p>
            </div>
            <div className="module-card">
              <h4>Is there a setup fee?</h4>
              <p>No, there are no hidden setup fees. Our team will help you onboard for free.</p>
            </div>
            <div className="module-card">
              <h4>Do you offer discounts for non-profits?</h4>
              <p>Yes, we offer special pricing for non-profit organizations. Contact our sales team.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
