"use client";

import { LockKeyhole, ArrowRight, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = savedTheme || systemTheme;
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <nav className="nav">
      <a className="brand" href="#top" aria-label="Hrxora home">
        <span className="brand-mark">Hx</span>
        Hrxora
      </a>
      <div className="nav-links" aria-label="Primary navigation">
        <a href="/">Home</a>
        <a href="/features">Features</a>
        <a href="/pricing">Pricing</a>
        <a href="/about">About</a>
      </div>
      <div className="nav-actions">
        <button 
          className="btn ghost theme-toggle" 
          onClick={toggleTheme} 
          aria-label="Toggle theme"
          style={{ padding: '0.5rem', borderRadius: '0.5rem' }}
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        <a className="btn ghost" href="/api/roles">
          <LockKeyhole size={17} /> Login API
        </a>
        <a className="btn primary" href="#production">
          Demo <ArrowRight size={17} />
        </a>
      </div>
    </nav>
  );
}
