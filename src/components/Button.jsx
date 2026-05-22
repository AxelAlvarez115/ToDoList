export default function Button({ children, onClick, variant, size }) {
  const base = {
    cursor: "pointer",
    borderRadius: 8,
    border: "1px solid #ddd",
    padding: size === "icon" ? "6px 8px" : "8px 12px",
    marginLeft: 4
  };

  let styles;
    if (variant === "add") {
      styles = { background: "#4caf50", color: "white", border: "none" };
    }
    else if (variant === "destructive") {
      styles = { background: "#ff4d4f", color: "white", border: "none" };
    } else {
      styles = { background: "#f5f5f5" };
    };

  return (
    <button onClick={onClick} style={{ ...base, ...styles }}>
      {children}
    </button>
  );
}