import {
  Activity,
  ArrowRight,
  BadgeIndianRupee,
  BarChart3,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Clock3,
  DatabaseBackup,
  FileText,
  Fingerprint,
  Gauge,
  IndianRupee,
  LockKeyhole,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  UserCog,
  UsersRound,
  Zap,
  Check,
  Settings,
  Shield,
  LayoutDashboard,
  FileSpreadsheet,
} from "lucide-react";

const modules = [
  {
    icon: UsersRound,
    title: "Employee Management",
    color: "#2563eb",
    text: "Complete lifecycle management from onboarding to resignation. Personal/professional records, document vault, and searchable directory.",
    features: ["Auto Employee ID", "Document Upload (PAN/Aadhaar)", "Searchable Directory", "CSV/Excel Export"],
  },
  {
    icon: UserCog,
    title: "Role & Access",
    color: "#7567e8",
    text: "Define granular permissions for Admin, HR, Manager, and Employees. Secure JWT/OAuth authentication with audit trails.",
    features: ["RBAC Controls", "Module Permissions", "JWT Authentication", "Activity Logs"],
  },
  {
    icon: Fingerprint,
    title: "Attendance & Time",
    color: "#06a7c9",
    text: "Hybrid tracking with Biometric sync and Mobile ESS punch. Real-time sync for office and field staff.",
    features: ["Biometric Auto-Sync", "Mobile Punch (ESS)", "Unified Logs", "Import/Export"],
  },
  {
    icon: Clock3,
    title: "Shift & Overtime",
    color: "#27b887",
    text: "Manage complex shifts and 8-hour workday rules. Automated overtime category split for payroll processing.",
    features: ["Shift Configuration", "Auto OT Calculation", "Late/Early Tracking", "Mid-day Status"],
  },
  {
    icon: FileSpreadsheet,
    title: "Timesheet Management",
    color: "#f5aa28",
    text: "Detailed work activity logging for accurate billing. Project-wise tracking with multi-level manager approvals.",
    features: ["Daily/Weekly Logs", "Project Tracking", "Approval Workflow", "Sign-off Reports"],
  },
  {
    icon: CalendarCheck,
    title: "Leave Management",
    color: "#ff7b6b",
    text: "Configure leave types, carry-forward rules, and encashment. Automated balances and approval workflows.",
    features: ["Policy Setup", "Workflow Notifications", "Auto-Balance", "Usage Analytics"],
  },
  {
    icon: BadgeIndianRupee,
    title: "Payroll Management",
    color: "#2563eb",
    text: "Automated calculation engine for Basic, HRA, TDS, PF, ESI, and advances. One-click PDF payslips.",
    features: ["Salary Templates", "Statutory Deductions", "PDF Payslips", "Bank Disbursal Report"],
  },
  {
    icon: BarChart3,
    title: "Performance",
    color: "#7567e8",
    text: "Goal and KPI tracking with self and manager reviews. Link appraisals directly to salary revisions.",
    features: ["Goal/KPI Setting", "Rating System", "Appraisal History", "Promotion Records"],
  },
  {
    icon: LayoutDashboard,
    title: "Employee Self-Service",
    color: "#06a7c9",
    text: "Personal dashboard for employees to view attendance, download payslips, and apply for leaves.",
    features: ["Personal Dashboard", "Leave Application", "HR Chat/Ticket", "Profile Updates"],
  },
  {
    icon: Activity,
    title: "Reports & Analytics",
    color: "#27b887",
    text: "Visual dashboards for headcount, attrition, and salary trends. Detailed summaries for compliance.",
    features: ["Analytics Dashboard", "Attrition Rate", "Salary Cost Trend", "Custom Reports"],
  },
  {
    icon: ShieldCheck,
    title: "Security & Backup",
    color: "#ff7b6b",
    text: "Enterprise-grade AES/RSA encryption. Daily automated database backups with one-click restore.",
    features: ["AES/RSA Encryption", "Daily Backup", "One-click Restore", "Security Audit"],
  },
  {
    icon: Settings,
    title: "System Admin",
    color: "#f5aa28",
    text: "System-wide rule configuration, automated notifications, and comprehensive audit logs.",
    features: ["Settings Management", "System Alerts", "Audit Logs", "Global Config"],
  },
];

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

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero" id="top">
        <div>
          <span className="eyebrow">
            <Sparkles size={16} /> HR, payroll and production in one system
          </span>
          <h1>Modern HRMS for Modern Teams</h1>
          <p className="hero-copy">
            Eliminate manual HR work. Manage employee records, attendance, payroll, 
            performance, and production tracking with Hrxora&apos;s unified platform.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#modules">
              Explore Features <ArrowRight size={18} />
            </a>
            <a className="btn ghost" href="https://hrone-kappa.vercel.app/" target="_blank" rel="noopener noreferrer">
              Open Web App <Zap size={18} />
            </a>
          </div>
          <div className="hero-metrics">
            <div className="metric">
              <strong>20+</strong>
              <span>Core Modules</span>
            </div>
            <div className="metric">
              <strong>100%</strong>
              <span>Cloud Secure</span>
            </div>
            <div className="metric">
              <strong>24/7</strong>
              <span>Support Ready</span>
            </div>
          </div>
        </div>

        <div className="product-shot" aria-label="Hrxora dashboard preview">
          <div className="shot-top">
            <strong>Hrxora Enterprise Dashboard</strong>
            <span className="window-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </div>
          <div className="shot-body">
            <aside className="side-menu">
              <div className="active">
                <Gauge size={15} /> Dashboard
              </div>
              <div>
                <UsersRound size={15} /> Employees
              </div>
              <div>
                <Clock3 size={15} /> Attendance
              </div>
              <div>
                <IndianRupee size={15} /> Payroll
              </div>
              <div>
                <BriefcaseBusiness size={15} /> Production
              </div>
              <div>
                <ShieldCheck size={15} /> Security
              </div>
            </aside>
            <div className="dash">
              <div className="dash-grid">
                <div className="mini-card">
                  <span>Present Today</span>
                  <b>186</b>
                  <div className="progress">
                    <span style={{ width: "82%" }} />
                  </div>
                </div>
                <div className="mini-card">
                  <span>Payroll May</span>
                  <b>₹42.8L</b>
                  <div className="progress">
                    <span style={{ width: "68%" }} />
                  </div>
                </div>
              </div>
              <div className="table-card">
                <div className="table-row">
                  <strong>Activity</strong>
                  <strong>Owner</strong>
                  <strong>Status</strong>
                </div>
                <div className="table-row">
                  <span>Production Log</span>
                  <span>Ravi M.</span>
                  <span className="pill">Approved</span>
                </div>
                <div className="table-row">
                  <span>Sick Leave</span>
                  <span>Anita S.</span>
                  <span className="pill">Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt" id="modules">
        <div className="section-head">
          <div>
            <span className="eyebrow">
              <ClipboardList size={16} /> Powerful Modules
            </span>
            <h2>1 Platform. 127+ HR Processes.</h2>
          </div>
          <p className="section-lead">
            Hrxora is built to handle everything from attendance capture to 
            complex production-linked payroll. One system, one source of truth.
          </p>
        </div>
        <div className="module-grid">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <article className="module-card" key={module.title}>
                <span className="module-icon" style={{ background: module.color }}>
                  <Icon size={22} />
                </span>
                <h3>{module.title}</h3>
                <p>{module.text}</p>
                <div className="feature-list-mini">
                  {module.features.map((f) => (
                    <div className="feature-item" key={f}>
                      <Check size={14} color={module.color} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section" id="production">
        <div className="section-head">
          <div>
            <span className="eyebrow">
              <BriefcaseBusiness size={16} /> Piece-Rate Tracking
            </span>
            <h2>Production-Linked Earnings</h2>
          </div>
          <p className="section-lead">
            Unique piece-rate tracking for manufacturing. Admin sets item rates, 
            employees log production, and earnings flow directly to payroll.
          </p>
        </div>
        <div className="workflow">
          {[
            ["Item Master", "Admin defines items (e.g. CENTER RULA) and fixed rates."],
            ["ESS Entry", "Employees enter daily quantities with real-time pay preview."],
            ["Review", "Managers verify physical output and approve/reject logs."],
            ["Auto Payroll", "Approved amounts sync automatically as 'Production Earnings'."],
          ].map(([title, text], index) => (
            <article className="flow-card" key={title}>
              <span className="flow-num">{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt" id="pricing">
        <div className="section-head center">
          <div>
            <span className="eyebrow">
              <IndianRupee size={16} /> Transparent Pricing
            </span>
            <h2>Plans for every stage of growth</h2>
          </div>
        </div>
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
      </section>

      <section className="section" id="reports">
        <div className="section-head">
          <div>
            <span className="eyebrow">
              <BarChart3 size={16} /> Analytics & Reports
            </span>
            <h2>Data-Driven HR Insights</h2>
          </div>
          <p className="section-lead">
            From attrition rates to payroll expense trends, get the data you 
            need to make informed decisions for your workforce.
          </p>
        </div>
        <div className="report-grid">
          <div className="panel">
            <h3>Workforce Analytics</h3>
            <div className="bars">
              {[
                ["Headcount", "84%", "84"],
                ["Attendance", "91%", "91"],
                ["Payroll Efficiency", "68%", "68"],
                ["Leave Utilization", "42%", "42"],
                ["Production Target", "76%", "76"],
              ].map(([label, width, value]) => (
                <div className="bar-line" key={label}>
                  <span>{label}</span>
                  <span className="bar-track">
                    <span style={{ width }} />
                  </span>
                  <strong>{value}%</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="panel">
            <h3>Security & Compliance</h3>
            <p className="section-lead">
              Role-based access, daily automated backups, and AES-256 encryption 
              ensure your data is always safe and compliant.
            </p>
            <div className="tag-row">
              {[
                "RBAC Permissions",
                "AES Encryption",
                "Daily Backups",
                "Audit Trails",
                "Secure ESS",
              ].map((tag) => (
                <span className="tag" key={tag}>
                  <CheckCircle2 size={13} /> {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="cta-card">
          <div className="cta-content">
            <h2>Ready to simplify HR operations?</h2>
            <p>Join 2000+ leading brands using Hrxora to build the perfect workplace.</p>
            <div className="cta-actions">
              <button className="btn primary large">Book Demo</button>
              <button className="btn ghost large">Start Free Trial</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
