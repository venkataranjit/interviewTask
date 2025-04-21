import React, { useState } from "react";

const initialValues = {
  CheckBoxValue: [],
  color: "",
  date: "",
  datetime: "",
  email: "",
  month: "",
  number: "",
  password: "",
  range: "",
  tel: "",
  text: "",
  time: "",
  url: "",
  week: "",
  search: "",
  radio: "",
  hidden: "Ranjit",
  file: "",
  files: [],
  imagesubmit: {
    x: "",
    y: "",
  },
};
const Form = () => {
  const [inputValues, setInputValues] = useState(initialValues);

  // const checkboxHandle = (e) => {
  // e.target.checked
  //   ? setInputValues({
  //       ...inputValues,
  //       CheckBoxValue: [...inputValues.CheckBoxValue, e.target.value],
  //     })
  //   : setInputValues({
  //       ...inputValues,
  //       CheckBoxValue: inputValues.CheckBoxValue.filter(
  //         (item) => item !== e.target.value
  //       ),
  //     });

  // if (e.target.checked) {
  //   setInputValues({
  //     ...inputValues,
  //     CheckBoxValue: [...inputValues.CheckBoxValue, e.target.value],
  //   });
  // } else {
  //   setInputValues({
  //     ...inputValues,
  //     CheckBoxValue: inputValues.CheckBoxValue.filter(
  //       (i) => i !== e.target.value
  //     ),
  //   });
  // }
  // };

  // const inputHandler = (e) => {
  //   const { value, name, type, files, checked } = e.target;
  //   if (type === "number") {
  //     setInputValues((prev) => ({ ...prev, [name]: Number(value) }));
  //   } else if (type === "file") {
  //     setInputValues((prev) => ({ ...prev, [name]: files[0] }));
  //   } else if (type === "checkbox") {
  //     checked
  //       ? setInputValues({
  //           ...inputValues,
  //           CheckBoxValue: [...inputValues.CheckBoxValue, value],
  //         })
  //       : setInputValues({
  //           ...inputValues,
  //           CheckBoxValue: inputValues.CheckBoxValue.filter(
  //             (item) => item !== value
  //           ),
  //         });
  //   } else {
  //     setInputValues((prev) => ({ ...prev, [name]: value }));
  //   }
  // };

  const inputHandler = (e) => {
    const { value, name, type, files, checked } = e.target;

    switch (type) {
      case "number":
        setInputValues((prev) => ({ ...prev, [name]: Number(value) }));
        break;
      case "file":
        setInputValues((prev) => ({ ...prev, [name]: files[0] }));
        break;
      case "checkbox":
        checked
          ? setInputValues({
              ...inputValues,
              CheckBoxValue: [...inputValues.CheckBoxValue, value],
            })
          : setInputValues({
              ...inputValues,
              CheckBoxValue: inputValues.CheckBoxValue.filter(
                (item) => item !== value
              ),
            });
        break;
      default:
        setInputValues((prev) => ({ ...prev, [name]: value }));
    }
  };

  const inputHandler2 = (e) => {
    const { files, name } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: files }));
  };
  return (
    <>
      <h2>Form Values</h2>
      <div>
        <input
          type="checkbox"
          value="checkbox 1"
          name="checkBoxValue"
          checked={inputValues.CheckBoxValue.includes("checkbox 1")}
          id="checkbox1"
          onChange={inputHandler}
        />
        <label htmlFor="checkbox1">Checkbox 1</label>
        <input
          type="checkbox"
          value="checkbox 2"
          name="checkBoxValue"
          checked={inputValues.CheckBoxValue.includes("checkbox 2")}
          id="checkbox2"
          onChange={inputHandler}
        />
        <label htmlFor="checkbox2">Checkbox 2</label>
        <input
          type="checkbox"
          value="checkbox 3"
          name="checkBoxValue"
          checked={inputValues.CheckBoxValue.includes("checkbox 3")}
          id="checkbox3"
          onChange={inputHandler}
        />
        <label htmlFor="checkbox3">Checkbox 3</label>
        <br /> <br />
      </div>
      <div>
        <label htmlFor="color">Color </label>
        <input
          id="color"
          type="color"
          onChange={inputHandler}
          name="color"
          value={inputValues.color}
        />
        <br /> <br />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={inputValues.date}
          onChange={inputHandler}
        />
        <br /> <br />
      </div>
      <div>
        <label htmlFor="datetime">Date Time</label>
        <input
          id="datetime"
          type="datetime-local"
          name="datetime"
          value={inputValues.datetime}
          onChange={inputHandler}
        />
        <br /> <br />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={inputHandler.email}
          id="email"
          onChange={inputHandler}
        />
        <br /> <br />
      </div>
      <div>
        <label htmlFor="month">Month</label>
        <input
          type="month"
          name="month"
          value={inputValues.month}
          id="month"
          onChange={inputHandler}
        />
        <br /> <br />
      </div>
      <div>
        <label htmlFor="nuumber">Number</label>
        <input
          type="number"
          id="number"
          value={inputValues.number}
          name="number"
          onChange={inputHandler}
        />
        <br /> <br />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={inputValues.password}
          onChange={inputHandler}
        />
        <br /> <br />
      </div>
      <div>
        <label htmlFor="range">Range</label>
        <input
          type="range"
          id="range"
          value={inputValues.range}
          name="range"
          onChange={inputHandler}
          min="250"
          max="8000"
          //default 1 - 100
        />
        <br /> <br />
      </div>
      <div>
        <label htmlFor="tel">Telephone</label>
        <input
          type="tel"
          id="tel"
          name="tel"
          value={inputValues.tel}
          onChange={inputHandler}
        />
        <br /> <br />
      </div>
      <div>
        <label htmlFor="text">Text Feild</label>
        <input
          type="text"
          id="text"
          name="text"
          value={inputValues.text}
          onChange={inputHandler}
        />
        <br /> <br />
      </div>
      <div>
        <label htmlFor="time">Time</label>
        <input
          type="time"
          id="time"
          name="time"
          value={inputValues.time}
          onChange={inputHandler}
        />
        <br /> <br />
      </div>
      <div>
        <label htmlFor="url">Url</label>
        <input
          type="url"
          id="url"
          name="url"
          value={inputValues.url}
          onChange={inputHandler}
        />
        <br /> <br />
      </div>
      <div>
        <label htmlFor="week">Week</label>
        <input
          type="week"
          id="week"
          name="week"
          value={inputValues.week}
          onChange={inputHandler}
        />
        <br /> <br />
      </div>
      <div>
        <label htmlFor="search">Search</label>
        <input
          type="search"
          name="search"
          id="search"
          value={inputValues.search}
          onChange={inputHandler}
        />
        <br /> <br />
      </div>
      <div>
        <label htmlFor="radio1">Radio 1</label>
        <input
          type="radio"
          id="radio1"
          name="radio"
          value="radio 1"
          checked={inputValues.radio === "radio 1"}
          onChange={inputHandler}
        />
        <br />
        <label htmlFor="radio2">Radio 2</label>
        <input
          type="radio"
          id="radio2"
          name="radio"
          value="radio 2"
          checked={inputValues.radio === "radio 2"}
          onChange={inputHandler}
        />
        <br />
        <label htmlFor="radio3">Radio 3</label>
        <input
          type="radio"
          id="radio3"
          name="radio"
          value="radio 3"
          checked={inputValues.radio === "radio 3"}
          onChange={inputHandler}
        />
        <br /> <br />
      </div>
      <div>
        <label htmlFor="hidden">Hidden Feild</label>
        <input
          type="hidden"
          id="hidden"
          value={inputValues.hidden}
          name="hidden"
        />
        <br /> <br />
      </div>
      <div>
        <label htmlFor="file">File</label>
        <input type="file" id="file" name="file" onChange={inputHandler} />
        <br /> <br />
      </div>
      <div>
        <label htmlFor="files">Multiple Files</label>
        <input
          type="file"
          id="files"
          name="files"
          onChange={inputHandler2}
          multiple
        />
        <br /> <br />
      </div>
      <div>
        <label htmlFor="imagesubmit">Image Submit</label>
        <br />
        <input
          type="image"
          src="istockphoto-1403500817-612x612.jpg"
          height="200"
          name="imageSubmit"
          onClick={(e) => {
            const clickX = e.nativeEvent.offsetX;
            const clickY = e.nativeEvent.offsetY;
            console.log("Clicked at:", clickX, clickY);
            setInputValues((prev) => ({
              ...prev,
              imagesubmit: { x: clickX, y: clickY },
            }));
          }}
        />
        <br /> <br />
      </div>
      <input type="reset" onClick={() => setInputValues(initialValues)} />
      <br /> <br />
      <input type="submit" />
      <br /> <br />
      <div
        style={{
          position: "absolute",
          top: "50px",
          right: "50px",
          background: "#ddd",
          padding: "25px",
          width: "300px",
        }}
      >
        <pre>{JSON.stringify(inputValues, null, 2)}</pre>
        {inputValues.file.name} <br />
        {inputValues.file && inputValues.file.type.startsWith("image/") && (
          <img
            src={URL.createObjectURL(inputValues.file)}
            alt="Preview"
            width="150"
            style={{ marginTop: "10px" }}
          />
        )}
        {[...inputValues.files].map((t) => t.name)} <br />
        {inputValues.files &&
          Array.from(inputValues.files).map((file, index) =>
            file.type.startsWith("image/") ? (
              <img
                key={index}
                src={URL.createObjectURL(file)}
                alt={`Preview ${index + 1}`}
                width="100"
                style={{ marginRight: "10px" }}
              />
            ) : null
          )}
      </div>
    </>
  );
};

export default Form;

{
  /* <pre>
          {JSON.stringify(
            inputValues,
            (key, value) => {
              if (value instanceof File) {
                return {
                  name: value.name,
                  type: value.type,
                  size: value.size,
                };
              }
              if (value instanceof FileList || Array.isArray(value)) {
                return Array.from(value).map((file) =>
                  file instanceof File
                    ? { name: file.name, type: file.type, size: file.size }
                    : file
                );
              }
              return value;
            },
            2
          )}
        </pre> */
}
