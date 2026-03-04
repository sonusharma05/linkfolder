import React, { useEffect, useState } from "react";
import InputBox from "../components/InputBox";
import TopBar from "../components/TopBar";
import InputBoxToo from "../components/InputBoxToo";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CopyButton() {
  const [items,setItems] = useState([]);
  const [link,setLink]  = useState([])
  const navigate = useNavigate();

   const onClickLogout = ()=>{
    localStorage.removeItem("token")
    navigate("/")
    console.log("button clicked")

}

  const onClick=()=>{
    setItems([...items,items.length+1])
  }

  useEffect(()=>{
    const fetch = async()=>{
      try{
        const token = localStorage.getItem("token")
        const res = await axios.get(
          "http://13.220.45.53:3000/links",{
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
      
       <div className="pt-10"><TopBar onClickOne={onClick} onClickLogout={onClickLogout}/></div>       
    <div className="flex h-screen  p-10">
      <div>
      {
        items.map((item)=>(<InputBoxToo  key={item._id} Text ={item.item} />))
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

