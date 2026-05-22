export default function Card({ children }) {
  return (
    <div style={{ background: "white", borderRadius: 16, boxShadow: "0 10px 25px rgba(0,0,0,0.1)", width: "100%", maxWidth: 420, color: "black" }}>
      {children}
    </div>
  );
}