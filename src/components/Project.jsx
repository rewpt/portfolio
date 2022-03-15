import React, { Fragment } from "react";

export default function Project(props) {
  const { photos } = props;
  return (
    <Fragment>
      <h1 className="text-5xl mb-[15px]">{props.children}</h1>
      <div className="flex justify-center bg-black h-[70%] w-[70%] overflow-hidden">
        <img src={photos[0]} alt="" />
      </div>
    </Fragment>
  );
}
