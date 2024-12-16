import React from "react";

function Card({
  img,
  name,
  onClick,
className
}) {
  return (
    <div
      className={`  p-2 m-2 cursor-pointer ${className} people`}
      onClick={() => onClick(name)}
    >
      {img && <img src={img} alt={name} className="h-12 mb-2" />}
      <p>{name}</p>
    </div>
  );
}

export default Card;
