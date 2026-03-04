
import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Signup(){
  const [username,SetUsername]=useState("")
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [Age,setAge] = useState(0);
  const [phoneno,setPhoneno] = useState("");
  const navigate = useNavigate()
  return(
    <div className="bg-gray-800">
      <div className="flex justify-center h-screen  items-center  ">
        <div className="shadow-2xl p-15 bg-gray-700 border-2 rounded-xl border-white" >
          <div className="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-15 w-15 text-white">
          <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
          </svg>
          </div>
          <div className="flex justify-center text-white">
              Hello, Please create a account
          </div>
          <div className=" bg-gray-600 m-2 rounded-md p-2 w-100 border-white border text-white">
            <input type="text" onChange={(e)=>{SetUsername(e.target.value)}} placeholder="username"></input>
          </div>
          <div className=" bg-gray-600 m-2 rounded-md p-2 w-100 border-white border text-white">
              <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="email"></input>
          </div>
          <div className=" bg-gray-600 m-2 rounded-md p-2 w-100 border-white border text-white">
              <input type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
          </div>
          <div className=" bg-gray-600 m-2 rounded-md p-2 w-100 border-white border text-white">
              <input type="number" placeholder="Age" onChange={(e)=>{setAge(Number(e.target.value))}}></input>
          </div>
          <div className=" bg-gray-600 m-2 rounded-md p-2 w-100 border-white border text-white">
              <input type="text" placeholder="phoneno" onChange={(e)=>{setPhoneno(e.target.value)}}></input>
          </div>
          <div>
            <button onClick={async()=>{
              try{
                const res = await axios.post("http://13.220.45.53:3000/signup",{
                  username,
                  Email: email,
                  password,
                  Age: Age,
                  phoneNo: phoneno
                });

                console.log("SUCCESS",res.data);
                if(res.data.msg=="account created successfully"){
                  navigate("/")
                }
                else{
                    navigate("/error")
                }
              }catch(err){
                console.log("ERROR",err.response?.data);
              }
            }}
            className="w-full border rounded-sm bg-gray-900 text-white py-2 mt-2">Create account</button>
          </div>
          <div className="flex justify-center mt-2">
            <span className="text-gray-500"> already have an account?</span>
            
            <button onClick={()=>{
              navigate("/")
            }} className="text-white">Sign In</button>
          </div>
        </div>
        
        
      </div>
    </div>
  )
}