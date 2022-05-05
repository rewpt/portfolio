import React from "react";

export const Stack = (stack) => {
  return (
    <>
      {stack.map((el, index) => {
        if (index !== stack.length - 1) {
          return (
            <li key={index} className="ml-[8px]">
              {" "}
              {el},{" "}
            </li>
          );
        } else {
          return (
            <li key={index} className="ml-[8px]">
              {" "}
              {el}{" "}
            </li>
          );
        }
      })}
    </>
  );
};
