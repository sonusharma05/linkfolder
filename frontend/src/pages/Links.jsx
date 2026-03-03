import React, { useEffect, useState } from "react";
import InputBox from "../components/InputBox";
import TopBar from "../components/TopBar";
import Button from "../components/Button";
import InputBoxToo from "../components/InputBoxToo";
import axios from "axios";

function CopyButton() {
  const [items,setItems] = useState([]);
  const [link,setLink]  = useState([])

  

  const onClick=()=>{
    setItems([...items,items.length+1])
  }

  useEffect(()=>{
    const fetch = async()=>{
      try{
        const token = localStorage.getItem("token")
        const res = await axios.get(
          "http://localhost:3000/links",{
            headers:{
              Authorization: `Bearer ${token}`
            }
          }
        )
        setLink(res.data.links)
      }
      
      catch(err){
        console.log("error fetching links",err)
      };
      
    }
    fetch();
  },[link])


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
        items.map((item)=>(<InputBoxToo  key={item} />))
      }
      {
        link.map((it)=>(<InputBox url = {it.link}/>))
      }
        
        
      </div>
    </div>
    

    </div>
   
  );
}

export default CopyButton;

