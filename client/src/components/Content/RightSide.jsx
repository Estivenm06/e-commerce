import React from "react";

export const Right = ({ mostRated }) => {
  return (
    <>
      <img
        className="image"
        src={`${mostRated.image}?w=248&fit=crop&auto=format`}
        srcSet={`${mostRated.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={mostRated.title}
        style={{ width: "100%", height: "380px", objectFit: "fill" }}
      />
    </>
  );
};
