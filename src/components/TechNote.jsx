export default function TechNote({ demo, production, privacy }) {
  return (
    <div style={{
      width: "280px",
      minHeight: "100vh",
      background: "#162032",
      borderLeft: "1px solid #334155",
      padding: "1.5rem",
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }}>
      <div>
        <h3 style={{ color: "#3b82f6", fontSize: "0.85rem", fontWeight: "700", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          🔧 Tech Note
        </h3>
        <p style={{ fontSize: "0.7rem", color: "#64748b" }}>
          This is a demo. See how real production differs below.
        </p>
      </div>

      <div style={{ background: "#1e293b", borderRadius: "0.5rem", padding: "0.75rem", borderLeft: "3px solid #f59e0b" }}>
        <p style={{ fontSize: "0.72rem", fontWeight: "700", color: "#f59e0b", marginBottom: "0.3rem" }}>⚡ Demo Uses</p>
        <p style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{demo}</p>
      </div>

      <div style={{ background: "#1e293b", borderRadius: "0.5rem", padding: "0.75rem", borderLeft: "3px solid #22c55e" }}>
        <p style={{ fontSize: "0.72rem", fontWeight: "700", color: "#22c55e", marginBottom: "0.3rem" }}>✅ Production Will Use</p>
        <p style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{production}</p>
      </div>

      <div style={{ background: "#1e293b", borderRadius: "0.5rem", padding: "0.75rem", borderLeft: "3px solid #3b82f6" }}>
        <p style={{ fontSize: "0.72rem", fontWeight: "700", color: "#3b82f6", marginBottom: "0.3rem" }}>🔒 Privacy & Compliance</p>
        <p style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{privacy}</p>
      </div>

      <div style={{ marginTop: "auto", padding: "0.75rem", background: "#1e293b", borderRadius: "0.5rem", textAlign: "center" }}>
        <p style={{ fontSize: "0.7rem", color: "#64748b" }}>MediKiosk — SIH 2026</p>
        <p style={{ fontSize: "0.7rem", color: "#64748b" }}>PS ID: 26047</p>
        <p style={{ fontSize: "0.7rem", color: "#3b82f6", marginTop: "0.3rem" }}>Team MindForge</p>
      </div>
    </div>
  );
}