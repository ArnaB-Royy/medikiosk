import { useState } from "react";

const LANGUAGES = [
  { code: "hi", label: "हिंदी" },
  { code: "bn", label: "বাংলা" },
  { code: "ta", label: "தமிழ்" },
  { code: "te", label: "తెలుగు" },
  { code: "mr", label: "मराठी" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "pa", label: "ਪੰਜਾਬੀ" },
  { code: "kn", label: "ಕನ್ನಡ" },
  { code: "ml", label: "മലയാളം" },
  { code: "or", label: "ଓଡ଼ିଆ" },
  { code: "as", label: "অসমীয়া" },
  { code: "en", label: "English" },
];

const CONTENT = {
  default: {
    chooseLang: "अपनी भाषा चुनें · Choose your language",
    chooseBtn: "Continue / जारी रखें",
    tagline: "Ministry of Ayush · All India Institute of Ayurveda · SIH 2026",
    welcome: "Welcome to MediKiosk",
    sub: "Complete your medical history before your appointment. We'll guide you step by step.",
    patientBtn: "I am a Patient",
    caretakerBtn: "I am a Caretaker",
    doctorBtn: "Doctor Login",
    howTitle: "What happens next",
    steps: [
      { icon: "🪪", label: "Login with ABHA" },
      { icon: "🎙️", label: "Speak your symptoms" },
      { icon: "📄", label: "Upload old reports" },
      { icon: "📋", label: "AI makes summary" },
      { icon: "🩺", label: "Doctor is ready" },
    ],
    modeLabel: "OPD Mode",
    ayushMode: "🌿 AYUSH / Dashavidha",
    alloMode: "💊 Allopathic / SOCRATES",
    stats: [
      { val: "22", unit: "+", label: "Indian Languages" },
      { val: "<30", unit: "s", label: "Doctor review time" },
      { val: "2–5", unit: " min", label: "Avg OPD slot saved" },
      { val: "10K", unit: "+", label: "Patients/day capacity" },
    ],
    footerLeft: "Team MindForge · SIH 2026 · PS ID 26047",
    footerRight: "DPDPA 2023 · ABDM Compliant",
  },
  hi: {
    chooseLang: "अपनी भाषा चुनें",
    chooseBtn: "जारी रखें",
    tagline: "आयुष मंत्रालय · अखिल भारतीय आयुर्वेद संस्थान · SIH 2026",
    welcome: "MediKiosk में आपका स्वागत है",
    sub: "अपनी अपॉइंटमेंट से पहले अपना मेडिकल इतिहास पूरा करें। हम आपको हर कदम पर गाइड करेंगे।",
    patientBtn: "मैं एक मरीज हूँ",
    caretakerBtn: "मैं एक केयरटेकर हूँ",
    doctorBtn: "डॉक्टर लॉगिन",
    howTitle: "आगे क्या होगा",
    steps: [
      { icon: "🪪", label: "ABHA से लॉगिन करें" },
      { icon: "🎙️", label: "अपने लक्षण बोलें" },
      { icon: "📄", label: "पुरानी रिपोर्ट अपलोड करें" },
      { icon: "📋", label: "AI सारांश बनाता है" },
      { icon: "🩺", label: "डॉक्टर तैयार हैं" },
    ],
    modeLabel: "OPD मोड",
    ayushMode: "🌿 AYUSH / दशविध",
    alloMode: "💊 एलोपैथिक / SOCRATES",
    stats: [
      { val: "22", unit: "+", label: "भारतीय भाषाएं" },
      { val: "<30", unit: "s", label: "डॉक्टर समीक्षा समय" },
      { val: "2–5", unit: " मिनट", label: "OPD स्लॉट बचाया" },
      { val: "10K", unit: "+", label: "मरीज/दिन क्षमता" },
    ],
    footerLeft: "टीम MindForge · SIH 2026 · PS ID 26047",
    footerRight: "DPDPA 2023 · ABDM अनुपालन",
  },
  bn: {
    chooseLang: "আপনার ভাষা বেছে নিন",
    chooseBtn: "চালিয়ে যান",
    tagline: "আয়ুষ মন্ত্রণালয় · সর্বভারতীয় আয়ুর্বেদ ইনস্টিটিউট · SIH 2026",
    welcome: "MediKiosk-এ স্বাগতম",
    sub: "আপনার অ্যাপয়েন্টমেন্টের আগে আপনার চিকিৎসা ইতিহাস সম্পূর্ণ করুন।",
    patientBtn: "আমি একজন রোগী",
    caretakerBtn: "আমি একজন কেয়ারটেকার",
    doctorBtn: "ডাক্তার লগইন",
    howTitle: "পরবর্তীতে কী হবে",
    steps: [
      { icon: "🪪", label: "ABHA দিয়ে লগইন" },
      { icon: "🎙️", label: "উপসর্গ বলুন" },
      { icon: "📄", label: "পুরনো রিপোর্ট আপলোড" },
      { icon: "📋", label: "AI সারসংক্ষেপ তৈরি করে" },
      { icon: "🩺", label: "ডাক্তার প্রস্তুত" },
    ],
    modeLabel: "OPD মোড",
    ayushMode: "🌿 AYUSH / দশবিধ",
    alloMode: "💊 অ্যালোপ্যাথিক / SOCRATES",
    stats: [
      { val: "22", unit: "+", label: "ভারতীয় ভাষা" },
      { val: "<30", unit: "s", label: "ডাক্তার পর্যালোচনা" },
      { val: "2–5", unit: " মিনিট", label: "OPD স্লট সাশ্রয়" },
      { val: "10K", unit: "+", label: "রোগী/দিন ক্ষমতা" },
    ],
    footerLeft: "Team MindForge · SIH 2026 · PS ID 26047",
    footerRight: "DPDPA 2023 · ABDM",
  },
};

function getLang(code) {
  return CONTENT[code] || CONTENT["default"];
}

export default function Home({ goTo }) {
  const [step, setStep] = useState("lang"); // "lang" | "main"
  const [selectedLang, setSelectedLang] = useState(null);
  const [opdMode, setOpdMode] = useState("ayush"); // "ayush" | "allo"

  const tx = selectedLang ? getLang(selectedLang) : getLang("default");

  const styles = {
    page: {
      fontFamily: "'Segoe UI', Arial, sans-serif",
      background: "#f8fafc",
      color: "#1a1a1a",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },

    // NAV
    nav: {
      background: "#1a56a0",
      padding: "0.85rem 2.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "4px solid #f59e0b",
      position: "sticky",
      top: 0,
      zIndex: 100,
      boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
    },
    navLogo: { fontWeight: "700", fontSize: "1.3rem", color: "#fff" },
    navSub: { fontSize: "0.6rem", color: "#bfdbfe", marginTop: "1px" },
    navRight: { display: "flex", gap: "0.5rem", alignItems: "center" },
    doctorNavBtn: {
      padding: "0.45rem 1rem",
      borderRadius: "6px",
      border: "1.5px solid rgba(255,255,255,0.6)",
      background: "transparent",
      color: "#fff",
      fontWeight: "600",
      fontSize: "0.8rem",
      cursor: "pointer",
    },

    // GOV STRIP
    govStrip: {
      background: "#f0f7ff",
      borderBottom: "1px solid #bfdbfe",
      padding: "0.4rem 2.5rem",
      display: "flex",
      alignItems: "center",
      gap: "0.6rem",
      fontSize: "0.72rem",
      color: "#1a56a0",
      fontWeight: "600",
    },

    // LANG SCREEN
    langScreen: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "3rem 2rem",
      background: "#f8fafc",
    },
    langTitle: {
      fontSize: "1.3rem",
      fontWeight: "700",
      color: "#0f2d5e",
      marginBottom: "0.4rem",
      textAlign: "center",
    },
    langSubtitle: {
      fontSize: "0.85rem",
      color: "#64748b",
      marginBottom: "2rem",
      textAlign: "center",
    },
    langGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "0.75rem",
      maxWidth: "480px",
      width: "100%",
      marginBottom: "2rem",
    },
    langBtnBase: {
      padding: "0.85rem 0.5rem",
      borderRadius: "8px",
      fontSize: "1rem",
      fontWeight: "600",
      textAlign: "center",
      cursor: "pointer",
      border: "1.5px solid #bfdbfe",
      background: "#fff",
      color: "#1a56a0",
      transition: "all 0.15s",
    },
    langBtnActive: {
      background: "#1a56a0",
      color: "#fff",
      border: "1.5px solid #1a56a0",
    },
    continueBtn: {
      padding: "1rem 3rem",
      borderRadius: "10px",
      border: "none",
      background: "#1a56a0",
      color: "#fff",
      fontWeight: "700",
      fontSize: "1.05rem",
      cursor: "pointer",
      opacity: selectedLang ? 1 : 0.4,
    },

    // MAIN SCREEN
    mainScreen: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2.5rem 2rem 0",
      background: "#f8fafc",
    },
    emblem: { fontSize: "2.8rem", marginBottom: "0.5rem" },
    taglineText: {
      fontSize: "0.72rem",
      color: "#1a56a0",
      fontWeight: "600",
      marginBottom: "0.6rem",
      textAlign: "center",
    },
    h1: {
      fontSize: "1.75rem",
      fontWeight: "700",
      color: "#0f2d5e",
      marginBottom: "0.5rem",
      textAlign: "center",
    },
    subText: {
      fontSize: "0.9rem",
      color: "#64748b",
      lineHeight: 1.6,
      marginBottom: "2rem",
      textAlign: "center",
      maxWidth: "360px",
    },
    btnsWrap: {
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
      width: "100%",
      maxWidth: "320px",
      marginBottom: "2.5rem",
    },
    btnPatient: {
      padding: "1.1rem",
      borderRadius: "12px",
      border: "none",
      background: "#1a56a0",
      color: "#fff",
      fontWeight: "700",
      fontSize: "1.05rem",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.6rem",
      boxShadow: "0 4px 14px rgba(26,86,160,0.3)",
    },
    btnCaretaker: {
      padding: "1rem",
      borderRadius: "12px",
      border: "2px solid #1a56a0",
      background: "#fff",
      color: "#1a56a0",
      fontWeight: "700",
      fontSize: "1rem",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.6rem",
    },
    btnDoctor: {
      padding: "1rem",
      borderRadius: "12px",
      border: "1.5px solid #cbd5e1",
      background: "#fff",
      color: "#475569",
      fontWeight: "600",
      fontSize: "1rem",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.6rem",
    },

    // HOW IT WORKS
    howSection: {
      width: "100%",
      background: "#fff",
      borderTop: "1px solid #e2e8f0",
      borderBottom: "1px solid #e2e8f0",
      padding: "1.5rem 2rem",
    },
    howTitle: {
      fontSize: "0.78rem",
      fontWeight: "700",
      color: "#0f2d5e",
      textAlign: "center",
      marginBottom: "1.2rem",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
    howSteps: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      maxWidth: "560px",
      margin: "0 auto",
      position: "relative",
    },
    howStep: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
    },
    howLine: {
      position: "absolute",
      top: "1.3rem",
      left: "55%",
      width: "90%",
      height: "1.5px",
      background: "#bfdbfe",
      zIndex: 0,
    },
    howCircle: {
      width: "2.6rem",
      height: "2.6rem",
      borderRadius: "50%",
      background: "#1a56a0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.1rem",
      marginBottom: "0.5rem",
      position: "relative",
      zIndex: 1,
    },
    howLabel: {
      fontSize: "0.65rem",
      color: "#0f2d5e",
      fontWeight: "600",
      textAlign: "center",
      maxWidth: "64px",
      lineHeight: 1.4,
    },

    // AYUSH MODE
    modeSection: {
      width: "100%",
      background: "#f0f7ff",
      borderBottom: "1px solid #bfdbfe",
      padding: "0.75rem 2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.75rem",
    },
    modeLabel: { fontSize: "0.75rem", color: "#475569", fontWeight: "600" },
    modePillActive: {
      padding: "0.4rem 1rem",
      borderRadius: "99px",
      fontSize: "0.78rem",
      fontWeight: "700",
      background: "#1a56a0",
      color: "#fff",
      cursor: "pointer",
      border: "none",
    },
    modePillInactive: {
      padding: "0.4rem 1rem",
      borderRadius: "99px",
      fontSize: "0.78rem",
      fontWeight: "600",
      background: "#fff",
      color: "#64748b",
      border: "1px solid #e2e8f0",
      cursor: "pointer",
    },

    // STATS BAR
    statsBar: {
      width: "100%",
      background: "#0f2d5e",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    statCell: {
      textAlign: "center",
      padding: "1rem 0.5rem",
      borderRight: "1px solid rgba(255,255,255,0.12)",
    },
    statVal: { fontSize: "1.5rem", fontWeight: "700", color: "#fff", lineHeight: 1 },
    statUnit: { color: "#f59e0b" },
    statLabel: { fontSize: "0.62rem", color: "#bfdbfe", marginTop: "3px", textTransform: "uppercase", letterSpacing: "0.5px" },

    // FOOTER
    footer: {
      background: "#0f2d5e",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      padding: "0.9rem 2.5rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    footerText: { fontSize: "0.68rem", color: "#7cb9f6" },
  };

  return (
    <div style={styles.page}>

      {/* NAV */}
      <nav style={styles.nav}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ fontSize: "1.6rem" }}>🏥</span>
          <div>
            <div style={styles.navLogo}>MediKiosk</div>
            <div style={styles.navSub}>AI Clinical History Platform</div>
          </div>
        </div>
        {step === "main" && (
          <button
            onClick={() => setStep("lang")}
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "none",
              color: "#bfdbfe",
              fontSize: "0.75rem",
              padding: "0.35rem 0.9rem",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            🌐 {LANGUAGES.find(l => l.code === selectedLang)?.label || "Language"}
          </button>
        )}
        <div style={styles.navRight}>
          <button onClick={() => goTo("doctor")} style={styles.doctorNavBtn}>
            🩺 Doctor Login
          </button>
        </div>
      </nav>

      {/* GOV STRIP */}
      <div style={styles.govStrip}>
        <span style={{ fontSize: "1rem" }}>🇮🇳</span>
        <span>{tx.tagline}</span>
      </div>

      {/* ── LANGUAGE SELECTION SCREEN ── */}
      {step === "lang" && (
        <div style={styles.langScreen}>
          <div style={styles.langTitle}>अपनी भाषा चुनें</div>
          <div style={styles.langSubtitle}>Choose your language · ভাষা বেছে নিন · மொழியை தேர்ந்தெடுக்கவும்</div>

          <div style={styles.langGrid}>
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLang(lang.code)}
                style={{
                  ...styles.langBtnBase,
                  ...(selectedLang === lang.code ? styles.langBtnActive : {}),
                }}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <button
            disabled={!selectedLang}
            onClick={() => selectedLang && setStep("main")}
            style={styles.continueBtn}
          >
            {selectedLang ? getLang(selectedLang).chooseBtn : "Continue / जारी रखें"} →
          </button>
        </div>
      )}

      {/* ── MAIN SCREEN ── */}
      {step === "main" && (
        <>
          {/* AYUSH MODE TOGGLE */}
          <div style={styles.modeSection}>
            <span style={styles.modeLabel}>{tx.modeLabel}:</span>
            <button
              onClick={() => setOpdMode("ayush")}
              style={opdMode === "ayush" ? styles.modePillActive : styles.modePillInactive}
            >
              {tx.ayushMode}
            </button>
            <button
              onClick={() => setOpdMode("allo")}
              style={opdMode === "allo" ? styles.modePillActive : styles.modePillInactive}
            >
              {tx.alloMode}
            </button>
          </div>

          {/* HERO */}
          <div style={styles.mainScreen}>
            <div style={styles.emblem}>🏥</div>
            <div style={styles.taglineText}>{tx.tagline}</div>
            <h1 style={styles.h1}>{tx.welcome}</h1>
            <p style={styles.subText}>{tx.sub}</p>

            {/* 3 BUTTONS */}
            <div style={styles.btnsWrap}>
              <button onClick={() => goTo("login")} style={styles.btnPatient}>
                🎙️ {tx.patientBtn}
              </button>
              <button onClick={() => goTo("caretaker")} style={styles.btnCaretaker}>
                👨‍👩‍👦 {tx.caretakerBtn}
              </button>
              <button onClick={() => goTo("doctor")} style={styles.btnDoctor}>
                🩺 {tx.doctorBtn}
              </button>
            </div>
          </div>

          {/* HOW IT WORKS */}
          <div style={styles.howSection}>
            <div style={styles.howTitle}>{tx.howTitle}</div>
            <div style={styles.howSteps}>
              {tx.steps.map((step, i) => (
                <div key={i} style={styles.howStep}>
                  {i < tx.steps.length - 1 && <div style={styles.howLine} />}
                  <div style={styles.howCircle}>{step.icon}</div>
                  <div style={styles.howLabel}>{step.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* STATS BAR */}
          <div style={styles.statsBar}>
            {tx.stats.map((s, i) => (
              <div
                key={i}
                style={{
                  ...styles.statCell,
                  borderRight: i < tx.stats.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
                }}
              >
                <div style={styles.statVal}>
                  {s.val}<span style={styles.statUnit}>{s.unit}</span>
                </div>
                <div style={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* FOOTER */}
      <footer style={styles.footer}>
        <span style={styles.footerText}>{tx.footerLeft}</span>
        <span style={styles.footerText}>{tx.footerRight}</span>
      </footer>

    </div>
  );
}