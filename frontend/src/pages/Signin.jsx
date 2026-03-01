import { useState } from "react"
import axios from "axios";

export default function Signin(){
    const [email,setEmail]  = useState("");
    const [password,setPassword] = useState("");
    const [remember,setRemember] = useState(false);

    return(
       <div className="bg-gray-800">
  <div className="flex h-screen items-center justify-center">
    <div className="rounded-xl border-3 border-white p-5 shadow-2xl bg-gray-700">
      <div className="flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-15 w-15 text-white">
          <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
        </svg>
      </div>
      <div>
        <div className="flex justify-center text-2xl font-bold text-white">Sign In</div>
        <div className=" text-sm ml-20 my-2 text-white">Welcome back! Please enter your details.</div>



        <div>
          <input className=" bg-gray-600 m-2 rounded-md p-2  border-white border w-100 text-white" type="text" placeholder=" username " onChange={(e)=>setEmail(e.target.value)} />
        </div>

        <div className=" bg-gray-600 m-2 rounded-md p-2  border-white border w-100 flex justify-between text-white">
          <input className="w-60" type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
          <button className="text-white hover:text-black"> forgot password?</button>
        </div>


        
        <div className="py-2">
          <input type="checkbox" onChange={(e)=>setRemember(e.target.checked)} />
          <span className="text-white"> remember me </span>
        </div>

          <div>
            <div>
              <button className=" w-full rounded-md border-2 text-xl border-white bg-gray-600 px-18 py-2 text-white hover:text-black hover:text-2xl hover:font-bold" onClick={async()=>{
                const res =await axios.post(
                    "http://localhost:3000/signin",
                    {
                      username: email,
                      password: password
                    },
                    {
                      headers: {
                        "Content-Type": "application/json"
                      }
                    }
                  );
                  localStorage.setItem("token",res.data.token)
                  console.log(res.data)
                
              }}>Sign In</button>
            </div>
          </div>
          <div className="flex justify-center pt-2">
            <span className="text-gray-500 mr-1"> don't have a account? </span>
            <a href="#" className=" text-white hover:text-black "> signup </a>
          
        </div>
      </div>
    </div>
  </div>
</div>

    )
}