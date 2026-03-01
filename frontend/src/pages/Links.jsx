import React, { useState } from "react";
import InputBox from "../components/InputBox";
import TopBar from "../components/TopBar";
import Button from "../components/Button";
import InputBoxToo from "../components/InputBoxToo";

function CopyButton() {
  const [items,setItems] = useState([]);
  const [link,setLink]  = useState("")

  

  const onClick=()=>{
    setItems([...items,items.length+1])
  }
  const textToCopy = "Hello Sonu 🚀";

  


  return (
    <div className="bg-gray-800">
      <div className="flex justify-between border-b p-3 border-white">
                  <p className="text-3xl font-bold text-white">Link Folder</p>
                  <Button onClick={onClick} buttonText="Add New"></Button>
                  <Button buttonText="Sign Out"></Button>
              </div>
    <div className="flex h-screen  p-10">
      <div>
      {
        items.map((item)=>(<InputBoxToo key={item} />))
      }
        
        
      </div>
    </div>

    </div>
    // <div>
    //   <div>
    //     <p>{textToCopy}</p>
      
    //   <button onClick={handleCopy}>
    //     {copied ? "Copied!" : "Copy"}
    //   </button>
    //   </div>

    //   <div>
    //     <input type="text" placeholder="enter the link"></input>

    //   </div>
    // </div>
    
  );
}

export default CopyButton;

