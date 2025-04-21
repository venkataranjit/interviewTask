import React, { useState } from "react";
const data = ["one", "two", "three"];
const SamplePage = () => {
  const [checkBoxValues, setCheckBoxValues] = useState([]);

  const checkboxHandler = (e) => {
    const { value, checked } = e.target;
    checked
      ? setCheckBoxValues([...checkBoxValues, value])
      : setCheckBoxValues([...checkBoxValues.filter((c) => c !== value)]);
  };
  console.log(checkBoxValues);
  return (
    <>
      <h2>Checkbox Values Getting</h2>
      {data.map((c, index) => {
        return (
          <div key={index}>
            <label htmlFor={c}>{c}</label>
            <input
              type="checkbox"
              value={c}
              id={c}
              checked={checkBoxValues.includes(c)} // or checked={checkBoxValues.some((i) => i === c)}
              onChange={checkboxHandler}
            />
          </div>
        );
      })}
    </>
  );
};

export default SamplePage;

// import React, { useState } from "react";

// const SamplePage = () => {
//   const [checkBoxValues, setCheckBoxValues] = useState([]);
//   const checkboxHandler = (e) => {
//     const { value, checked } = e.target;
//     checked
//       ? setCheckBoxValues([...checkBoxValues, value])
//       : setCheckBoxValues([...checkBoxValues.filter((c) => c !== value)]);
//   };
//   console.log(checkBoxValues);
//   return (
//     <>
//       <h2>Sample Page</h2>
//       <h4>Checkbox Handler</h4>
//       <label htmlFor="c1">One</label>
//       <input
//         type="checkbox"
//         id="c1"
//         value="one"
//         checked={checkBoxValues.includes("one")}
//         onChange={checkboxHandler}
//       />
//       <label htmlFor="c2">Two</label>
//       <input
//         type="checkbox"
//         id="c2"
//         value="two"
//         checked={checkBoxValues.includes("two")}
//         onChange={checkboxHandler}
//       />
//       <label htmlFor="c3">three</label>
//       <input
//         type="checkbox"
//         id="c3"
//         value="three"
//         checked={checkBoxValues.includes("three")}
//         onChange={checkboxHandler}
//       />
//     </>
//   );
// };

// export default SamplePage;
