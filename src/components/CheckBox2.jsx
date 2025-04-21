import { useState } from "react";

export default function CheckBox2() {
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const [selected, setSelected] = useState([]);

  const handleToggle = (e) => {
    console.log(e.target.value, e.target.checked);
    // if (e.target.checked) {
    //   setSelected([...selected, e.target.value]);
    // } else {
    //   setSelected([...selected.filter((item) => item !== e.target.value)]);
    // }

    e.target.checked
      ? setSelected([...selected, e.target.value])
      : setSelected([...selected.filter((item) => item !== e.target.value)]);
  };

  return (
    <div className="App">
      <h2>Select Fruits:</h2>
      {items.map((item) => (
        <label key={item} style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={selected.includes(item)}
            value={item}
            onChange={(e) => handleToggle(e)}
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

// import { useState } from "react";

// export default function CheckBox2() {
//   const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
//   const [selected, setSelected] = useState([]);

//   const handleToggle = (item) => {
//     setSelected((prev) =>
//       prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
//     );
//   };

//   return (
//     <div className="App">
//       <h2>Select Fruits:</h2>
//       {items.map((item) => (
//         <label key={item} style={{ display: "block" }}>
//           <input
//             type="checkbox"
//             checked={selected.includes(item)}
//             onChange={() => handleToggle(item)}
//           />
//           {item}
//         </label>
//       ))}

//       <h2>Selected:</h2>
//       <ul>
//         {selected.map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
