import React from "react";
import { HasgTags } from "../Feed/styles";
import { FiTrash2 } from "react-icons/fi";

export default function Item({ onDelete, value }) {
  return (
    <div style={{ display: "inline" }}>
      <HasgTags>
        <a
          style={{ textDecoration: "none", color: "#1a8acf" }}
          href={`https://twitter.com/hashtag/${value}?src=hashtag_click`}
          target="blank"
        >
          {`#${value}`}
        </a>
        <button
          style={{ margin: "5px", cursor: "pointer" }}
          type="button"
          onClick={onDelete}
        >
          <FiTrash2 size={11} color="#e8265e" />
        </button>
      </HasgTags>
    </div>
  );
}
