export default function Input({ label, id, ...props }) {
  return (
    <p className="control">
      <label>{label}</label>
      <input id={id} name={id} required {...props} />
    </p>
  );
}
