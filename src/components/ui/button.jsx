import React from "react";

function Button({content,onClick,type="button"}) {
  return (
    <div>
     
      <button type={type} onClick={onClick} className="bg-black rounded text-white btn ">{content}</button>
    </div>
  );
}

export default Button;
