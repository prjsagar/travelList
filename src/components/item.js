export default function Item({ item, onDeleteItems, onToggleItem }) {
  return (
    <ls>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}{" "}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </ls>
  );
}
