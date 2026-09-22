import { useState } from "react";
import TechNote from "../components/TechNote";

export default function Login({ goTo, setIsCaretaker, isCaretaker, mode, setMode, setPatientData }) {
  const [abhaId, setAbhaId] = useState("");
  const [language, setLanguage] = useState("english");
  const [consent, setConsent] = useState(false);
  const [step, setStep] = useState(1); // 1: login, 2: consent

  const languages = [
    { code: "english", label: "English" },
    { code: "hindi", label: "हिन्दी" },
    { code: "bengali", label: "বাংলা" },
    { code: "tamil", label: "தமிழ்" },
    { code: "telugu", label: "తెలుగు" },
    { code: "marathi", label: "मराठी" },
  ];

  const handleLogin = () => {
    if (!abhaId) return alert("Please enter ABHA ID or Aadhaar number");
    setStep(2);
  };

  const handleConsent = () => {
    if (!consent) return alert("Please give consent to proceed");
    setPatientData({ abhaId, language, isCaretaker, mode });
    goTo("interview");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#3b82f6" }}>🏥 MediKiosk</h1>
          <p style={{ color: "#94a3b8", marginTop: "0.5rem" }}>AI-Powered Clinical History Platform</p>
          <p style={{ color: "#64748b", fontSize: "0.85rem" }}>Ministry of Ayush | All India Institute of Ayurveda</p>
        </div>

        {step === 1 && (
          <div style={{ background: "#1e293b", borderRadius: "1rem", padding: "2rem", width: "100%", maxWidth: "480px", border: "1px solid #334155" }}>
            
            {/* Mode Toggle */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ fontSize: "0.85rem", color: "#94a3b8", marginBottom: "0.5rem", display: "block" }}>Select OPD Mode</label>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <button
                  onClick={() => setMode("socrates")}
                  style={{
                    flex: 1, padding: "0.6rem", borderRadius: "0.5rem", border: "none", cursor: "pointer",
                    background: mode === "socrates" ? "#3b82f6" : "#334155",
                    color: "white", fontWeight: "600", fontSize: "0.85rem"
                  }}>
                  Allopathic (SOCRATES)
                </button>
                <button
                  onClick={() => setMode("ayush")}
                  style={{
                    flex: 1, padding: "0.6rem", borderRadius: "0.5rem", border: "none", cursor: "pointer",
                    background: mode === "ayush" ? "#22c55e" : "#334155",
                    color: "white", fontWeight: "600", fontSize: "0.85rem"
                  }}>
                  AYUSH (Dashavidha)
                </button>
              </div>
              <p style={{ fontSize: "0.75rem", color: "#64748b", marginTop: "0.4rem" }}>
                In production this is set by hospital admin per department
              </p>
            </div>

            {/* ABHA ID */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ fontSize: "0.85rem", color: "#94a3b8", marginBottom: "0.5rem", display: "block" }}>ABHA ID or Aadhaar Number</label>
              <input
                type="text"
                placeholder="Enter your ABHA ID or Aadhaar"
                value={abhaId}
                onChange={(e) => setAbhaId(e.target.value)}
                style={{
                  width: "100%", padding: "0.75rem", borderRadius: "0.5rem",
                  background: "#0f172a", border: "1px solid #334155",
                  color: "white", fontSize: "1rem", outline: "none"
                }}
              />
            </div>

            {/* Language Selection */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ fontSize: "0.85rem", color: "#94a3b8", marginBottom: "0.5rem", display: "block" }}>Select Language</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    style={{
                      padding: "0.4rem 0.8rem", borderRadius: "2rem", border: "none", cursor: "pointer",
                      background: language === lang.code ? "#3b82f6" : "#334155",
                      color: "white", fontSize: "0.85rem"
                    }}>
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Caretaker Mode */}
            <div style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.75rem", background: "#0f172a", padding: "0.75rem", borderRadius: "0.5rem" }}>
              <input
                type="checkbox"
                id="caretaker"
                checked={isCaretaker}
                onChange={(e) => setIsCaretaker(e.target.checked)}
                style={{ width: "1.2rem", height: "1.2rem", cursor: "pointer" }}
              />
              <label htmlFor="caretaker" style={{ cursor: "pointer" }}>
                <span style={{ fontWeight: "600" }}>Caretaker Mode</span>
                <span style={{ display: "block", fontSize: "0.75rem", color: "#94a3b8" }}>I am filling this on behalf of the patient</span>
              </label>
            </div>

            <button
              onClick={handleLogin}
              style={{
                width: "100%", padding: "0.85rem", borderRadius: "0.5rem", border: "none",
                background: "#3b82f6", color: "white", fontSize: "1rem",
                fontWeight: "700", cursor: "pointer"
              }}>
              Continue →
            </button>
          </div>
        )}

        {step === 2 && (
          <div style={{ background: "#1e293b", borderRadius: "1rem", padding: "2rem", width: "100%", maxWidth: "480px", border: "1px solid #334155" }}>
            <h2 style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>📋 Consent & Privacy</h2>
            
            {/* Illustrated consent panels */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
              {[
                { icon: "🎤", title: "Voice Recording", desc: "Your voice will be recorded only to understand your symptoms. Audio is deleted after processing." },
                { icon: "📄", title: "Document Scanning", desc: "Your medical documents will be scanned and structured. Originals are never stored." },
                { icon: "🔒", title: "Data Security", desc: "All data stays within hospital servers. Nothing is sent to external services." },
                { icon: "🏥", title: "Shared with Doctor", desc: "Only your doctor will see your summary. You can revoke consent at any time." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", background: "#0f172a", padding: "0.75rem", borderRadius: "0.5rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
                  <div>
                    <p style={{ fontWeight: "600", fontSize: "0.9rem" }}>{item.title}</p>
                    <p style={{ fontSize: "0.78rem", color: "#94a3b8", marginTop: "0.2rem" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <input
                type="checkbox"
                id="consent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                style={{ width: "1.2rem", height: "1.2rem", cursor: "pointer" }}
              />
              <label htmlFor="consent" style={{ cursor: "pointer", fontSize: "0.9rem" }}>
                I understand and give my consent for data collection
              </label>
            </div>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              <button
                onClick={() => setStep(1)}
                style={{
                  flex: 1, padding: "0.85rem", borderRadius: "0.5rem", border: "1px solid #334155",
                  background: "transparent", color: "white", fontSize: "0.9rem", cursor: "pointer"
                }}>
                ← Back
              </button>
              <button
                onClick={handleConsent}
                style={{
                  flex: 2, padding: "0.85rem", borderRadius: "0.5rem", border: "none",
                  background: "#22c55e", color: "white", fontSize: "1rem",
                  fontWeight: "700", cursor: "pointer"
                }}>
                I Agree & Proceed →
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Tech Note Sidebar */}
      <TechNote
        demo="Mock ABHA login with dummy ID entry"
        production="Real ABHA Aadhaar e-KYC via ABDM sandbox APIs with OTP verification"
        privacy="In production, identity verification happens entirely through Government of India ABDM infrastructure. No patient data touches external servers."
      />
    </div>
  );
}