import React, { useState } from "react";
import { Search } from "react-bootstrap-icons";

export default function SearchBar({ onClick }) {
  const [keyword, setKeyword] = useState("");

  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <div style={{ display: "flex", justifyContent: "center", textAlign: "center", gap: "4px", margin: "12px" }}>
        <input
          type="text"
          placeholder="검색어"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => {
            e.key === "Enter" && onClick(keyword);
          }}
          style={{
            padding: "8px",
            paddingLeft: "16px",
            width: "20vw",
            border: "none",
            backgroundColor: "rgb(248 248 248)",
            borderRadius: "4px",
          }}
        />
        <button
          onClick={() => onClick(keyword)}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "4px",
            paddingLeft: "12px",
            paddingRight: "12px",
            border: "none",
            backgroundColor: "#ede8e4",
            color: "#5c5957",
            borderRadius: "4px",
          }}
        >
          <Search size={20} />
        </button>
      </div>
    </div>
  );
}
