import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

const jobs = [
  {
    title: "Senior Full Stack Developer",
    dept: "Engineering",
    location: "Remote / Noida",
    type: "Full Time"
  },
  {
    title: "HR Product Manager",
    dept: "Product",
    location: "Noida",
    type: "Full Time"
  },
  {
    title: "UI/UX Designer",
    dept: "Design",
    location: "Remote",
    type: "Full Time"
  },
  {
    title: "Customer Success Lead",
    dept: "Operations",
    location: "Noida",
    type: "Full Time"
  }
];

export default function CareersPage() {
  return (
    <main className="inner-page">
      <section className="inner-hero">
        <h1>Join the Hrxora Team</h1>
        <p>
          We&apos;re looking for passionate individuals to help us build the next generation 
          of workforce management tools.
        </p>
      </section>

      <section className="content-section">
        <div className="section-head">
          <h2>Open Positions</h2>
        </div>

        <div className="table-card">
          {jobs.map((job) => (
            <div className="table-row" key={job.title} style={{ gridTemplateColumns: '1.5fr 1fr 1fr 0.5fr', padding: '1.5rem' }}>
              <div>
                <strong style={{ display: 'block', fontSize: '1.1rem' }}>{job.title}</strong>
                <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{job.dept}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={16} color="var(--blue)" />
                <span>{job.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={16} color="var(--mint)" />
                <span>{job.type}</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <button className="btn ghost">Apply <ArrowRight size={16} /></button>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-card" style={{ marginTop: '4rem', padding: '3rem' }}>
          <h3>Don&apos;t see a fit?</h3>
          <p>We&apos;re always looking for great talent. Send your resume to careers@hrxora.com</p>
        </div>
      </section>
    </main>
  );
}
