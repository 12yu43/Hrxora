export default function FAQPage() {
  const faqs = [
    {
      q: "What is Hrxora?",
      a: "Hrxora is a modern HRMS platform designed to handle payroll, attendance, employee management, and unique production piece-rate tracking in one unified system."
    },
    {
      q: "Is my data secure?",
      a: "Yes, we use enterprise-grade AES/RSA encryption and perform daily automated backups to ensure your data is always safe and recoverable."
    },
    {
      q: "Can I use Hrxora on my mobile?",
      a: "Absolutely. Hrxora is a responsive web application that works perfectly on smartphones and tablets through our ESS (Employee Self-Service) portal."
    },
    {
      q: "How long does onboarding take?",
      a: "Most teams are up and running within 2-3 business days. Our support team provides free assistance with data migration and setup."
    },
    {
      q: "Do you support biometric integration?",
      a: "Yes, Hrxora supports auto-sync with most physical biometric clock-in devices for office employees."
    }
  ];

  return (
    <main className="inner-page">
      <section className="inner-hero">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about Hrxora&apos;s features, pricing, and security.</p>
      </section>

      <section className="content-section">
        <div className="prose" style={{ maxWidth: '800px', marginInline: 'auto' }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{ marginBottom: '3rem', paddingBottom: '2rem', borderBottom: '1px solid var(--line)' }}>
              <h3 style={{ color: 'var(--ink)', marginBottom: '1rem', fontSize: '1.3rem' }}>{faq.q}</h3>
              <p style={{ fontSize: '1.1rem' }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
