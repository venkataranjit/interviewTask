import { useState } from "react";

export default function CheckBox2() {
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const [selected, setSelected] = useState([]);

  const handleToggle = (item) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="App">
      <h2>Select Fruits:</h2>
      {items.map((item) => (
        <label key={item} style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={selected.includes(item)}
            onChange={() => handleToggle(item)}
          />
          {item}
        </label>
      ))}

      <h2>Selected:</h2>
      <ul>
        {selected.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
