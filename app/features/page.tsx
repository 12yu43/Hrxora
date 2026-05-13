import { 
  UsersRound, 
  UserCog, 
  Fingerprint, 
  Clock3, 
  FileSpreadsheet, 
  CalendarCheck, 
  BadgeIndianRupee, 
  BarChart3, 
  LayoutDashboard, 
  Activity, 
  ShieldCheck, 
  Settings,
  Check
} from "lucide-react";

const allFeatures = [
  {
    icon: UsersRound,
    title: "Employee Management",
    color: "#2563eb",
    text: "Complete lifecycle management from onboarding to resignation.",
    features: ["Auto Employee ID", "Document Upload (PAN/Aadhaar)", "Searchable Directory", "CSV/Excel Export"]
  },
  {
    icon: UserCog,
    title: "Role & Access",
    color: "#7567e8",
    text: "Define granular permissions for Admin, HR, Manager, and Employees.",
    features: ["RBAC Controls", "Module Permissions", "JWT Authentication", "Activity Logs"]
  },
  {
    icon: Fingerprint,
    title: "Attendance & Time",
    color: "#06a7c9",
    text: "Hybrid tracking with Biometric sync and Mobile ESS punch.",
    features: ["Biometric Auto-Sync", "Mobile Punch (ESS)", "Unified Logs", "Import/Export"]
  },
  {
    icon: Clock3,
    title: "Shift & Overtime",
    color: "#27b887",
    text: "Manage complex shifts and 8-hour workday rules.",
    features: ["Shift Configuration", "Auto OT Calculation", "Late/Early Tracking", "Mid-day Status"]
  },
  {
    icon: FileSpreadsheet,
    title: "Timesheet Management",
    color: "#f5aa28",
    text: "Detailed work activity logging for accurate billing.",
    features: ["Daily/Weekly Logs", "Project Tracking", "Approval Workflow", "Sign-off Reports"]
  },
  {
    icon: CalendarCheck,
    title: "Leave Management",
    color: "#ff7b6b",
    text: "Configure leave types, carry-forward rules, and encashment.",
    features: ["Policy Setup", "Workflow Notifications", "Auto-Balance", "Usage Analytics"]
  },
  {
    icon: BadgeIndianRupee,
    title: "Payroll Management",
    color: "#2563eb",
    text: "Automated calculation engine for Basic, HRA, TDS, PF, ESI.",
    features: ["Salary Templates", "Statutory Deductions", "PDF Payslips", "Bank Disbursal Report"]
  },
  {
    icon: BarChart3,
    title: "Performance",
    color: "#7567e8",
    text: "Goal and KPI tracking with self and manager reviews.",
    features: ["Goal/KPI Setting", "Rating System", "Appraisal History", "Promotion Records"]
  }
];

export default function FeaturesPage() {
  return (
    <main className="inner-page">
      <section className="inner-hero">
        <h1>Everything you need to manage your workforce</h1>
        <p>
          Hrxora provides a comprehensive suite of HR tools designed to automate 
          your daily operations and focus on what matters most—your people.
        </p>
      </section>

      <section className="content-section">
        <div className="module-grid">
          {allFeatures.map((module) => {
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
    </main>
  );
}
