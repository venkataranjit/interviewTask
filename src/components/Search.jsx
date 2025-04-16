import React, { useState } from "react";

const users = [
  { id: 1, name: "Ranjit" },
  { id: 2, name: "Ramesh" },
  { id: 3, name: "Suresh" },
  { id: 4, name: "Pooja" },
  { id: 5, name: "Rani" },
];
export default function Search() {
  const [search, setSearch] = useState("");
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const highlightMatch = (name) => {
    const index = name.toLowerCase().indexOf(search.toLowerCase());
    if (index === -1 || !search) return name;
    const before = name.substring(0, index);
    const match = name.substring(index, index + search.length);
    const after = name.substring(index + search.length);
    return (
      <>
        {before}
        <mark>{match}</mark>
        {after}
      </>
    );
  };

  return (
    <>
      <h2>Search</h2>
      <input
        type="text"
        placeholder="search"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredUsers.map((name) => (
          <li>{highlightMatch(name.name)} </li>
        ))}
      </ul>
      {filteredUsers.length === 0 ? "No User Found" : ""}
    </>
  );
}
