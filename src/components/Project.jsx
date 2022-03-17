import React, { Fragment } from "react";

export default function Project(props) {
  const { photos, stack, description } = props;
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl mb-[50px]">{props.children}</h1>
      <h2 className="mb-[50px] text-2xl"> {description}</h2>

      <div className="flex drop-shadow-lg border-2 border-black justify-center bg-black h-[650px] w-[1100px] w-max-none overflow-hidden">
        <img src={photos[0]} alt="" />
      </div>
      <h2 className="mt-[20px] text-xl flex">
        Crafted with:
        <ul className="flex ">
          {stack.map((el, index) => {
            if (index !== stack.length - 1) {
              return <li className="ml-[8px]"> {el}, </li>;
            } else {
              return <li className="ml-[8px]"> {el} </li>;
            }
          })}
        </ul>
      </h2>
    </div>
  );
}
