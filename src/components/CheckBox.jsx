import React, { useState } from "react";

const items = [
  { name: "John", age: 25, id: 1 },
  { name: "Sara", age: 30, id: 2 },
  { name: "Tom", age: 35, id: 3 },
  { name: "Lily", age: 28, id: 4 },
];

export default function CheckBox() {
  // Array to keep track of selected items
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (item) => {
    if (selectedItems.find((i) => i.id === item.id)) {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    } else {
      // Add item to selectedItems
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className="App">
      <h1>Select Multiple Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              name={item.name}
              value={item.name}
              checked={selectedItems.some((i) => i.id === item.id)}
              onChange={() => handleCheckboxChange(item)}
            />
            {item.name}
          </li>
        ))}
      </ul>

      <h2>Selected Items:</h2>
      <ul>
        {selectedItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
