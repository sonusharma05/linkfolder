import { useState } from "react";
import axios from "axios";

export default function InputBoxToo( {Text,onChange}){
    const [text,setText] = useState("");
    const token = localStorage.getItem("token")
    const save =async() => {
        try{await axios.post(
                    "http://localhost:3000/links",
                    {
                      link:text
                    },
                    {
                      headers: {
                        "Content-Type": "application/json",
                         Authorization: `Bearer ${token}`
                      }
                    }
                  );}
                  catch(err){

                    console.log(err)
                  }

    };
     return(
        <div className=" bg-gray-600 m-2 rounded-md p-2 w-200 border-white border">
            <div className="flex justify-between">
                <input  className="w-190 text-white" defaultValue={Text} type="text" placeholder="Enter link" onChange={(e)=>setText(e.target.value)}></input>
                
                <button className=" hover:text-white hover:cursor-pointer " onClick={save}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="size-6">
                        <path  d="m4.5 12.75 6 6 9-13.5" />
                    </svg>

                </button>

            </div>
           

        </div>
    )

}