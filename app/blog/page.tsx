import { Calendar, User, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "How to Automate Payroll for Manufacturing Teams",
    excerpt: "Learn how piece-rate tracking and automated attendance can save hours of manual work every month.",
    author: "Amit Sharma",
    date: "May 10, 2026",
    category: "Payroll"
  },
  {
    title: "The Future of Employee Self-Service in 2026",
    excerpt: "Discover how AI-powered ESS portals are changing the way employees interact with HR departments.",
    author: "Neha Gupta",
    date: "May 05, 2026",
    category: "Technology"
  },
  {
    title: "Top 5 HR Trends for Growing Startups",
    excerpt: "From remote culture to performance-linked appraisals, here's what you need to focus on this year.",
    author: "Vikram Singh",
    date: "April 28, 2026",
    category: "Culture"
  }
];

export default function BlogPage() {
  return (
    <main className="inner-page">
      <section className="inner-hero">
        <h1>HR Insights & Updates</h1>
        <p>
          Expert advice, industry trends, and the latest news from the world of HR and technology.
        </p>
      </section>

      <section className="content-section">
        <div className="module-grid">
          {posts.map((post) => (
            <article className="module-card" key={post.title} style={{ height: 'auto' }}>
              <div style={{ marginBottom: '1rem' }}>
                <span className="pill">{post.category}</span>
              </div>
              <h3>{post.title}</h3>
              <p style={{ marginBottom: '1.5rem' }}>{post.excerpt}</p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--line)', paddingTop: '1rem', marginTop: 'auto' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                    <User size={14} /> {post.author}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Calendar size={14} /> {post.date}
                  </div>
                </div>
                <button className="btn ghost" style={{ marginLeft: 'auto', padding: '0.5rem' }}>
                  <ArrowRight size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
