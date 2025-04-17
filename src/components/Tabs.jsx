import React, { useState } from "react";

const data = [
  { label: "Tab 1", content: "This is First Tab" },
  { label: "Tab 2", content: "This is Second Tab" },
  { label: "Tab 3", content: "This is Third Tab" },
];
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <h2>Tabs</h2>
      {data.map((t, index) => {
        return (
          <button key={index} onClick={() => setActiveTab(index)}>
            {t.label}
          </button>
        );
      })}
      <div>{data[activeTab].content}</div>
    </>
  );
};

export default Tabs;
