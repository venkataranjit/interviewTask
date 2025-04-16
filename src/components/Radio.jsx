import { useState } from "react";

const arr = [
  { name: "ranjit", age: 35, id: 1 },
  { name: "victory", age: 30, id: 2 },
  { name: "Printo", age: 28, id: 3 },
];
export default function Radio() {
  const [selectedData, setSelectedData] = useState({});

  return (
    <div className="App">
      <h1>Names are</h1>
      <ul>
        {arr.map((value) => {
          return (
            <>
              <li key={value.id}>
                <input
                  type="radio"
                  name={value.name}
                  checked={value.id === selectedData.id}
                  onChange={() => setSelectedData(value)}
                />
                {value.name}
              </li>
            </>
          );
        })}
      </ul>
      <Inner age={selectedData.age} />
    </div>
  );
}

function Inner(props) {
  return (
    <>
      <p>Age is {props.age}</p>
    </>
  );
}
