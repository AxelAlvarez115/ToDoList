export default function Input({ value, onChange, onKeyDown, placeholder }) {
  return (
    <input
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      style={{
        flex: 1,
        padding: "8px 10px",
        borderRadius: 8,
        border: "1px solid #ccc"
      }}
    />
  );
}