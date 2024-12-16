import React from "react";

function InputBox({
    label,
    onChange,
    type
}) {
  return (
    <div className="">
        <label htmlFor="des" className="block text-sm/6 font-medium text-gray-900">{label}</label>
        <div className="mt-2">
          <input type={type} name=""
           id="des" required 
           onChange={(e)=>{onChange(e.target.value)}}
           className="block w-full rounded h-9 bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-zinc-700 sm:text-sm/6"/>
        </div>
      </div>

  );
}

export default InputBox;
