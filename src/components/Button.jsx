import React from "react";

export default function Button(props) {
  return (
    <button className="rounded py-[10px] px-[20px] bg-[orange]">
      {props.children}
    </button>
  );
}
