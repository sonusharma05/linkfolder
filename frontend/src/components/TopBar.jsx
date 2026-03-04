import Button from "./Button";
// import {useNavigate}   from "react-router-dom"


export default function TopBar({onClickOne,onClickLogout}){
 
    return(
        <div className=" fixed top-0 left-0 w-full flex justify-between border-b p-3 border-white">
            <p className="text-3xl font-bold text-white">Link Folder</p>
            <Button onClick={onClickOne} buttonText="Add New  "></Button>
            <Button onClick={onClickLogout} buttonText="Sign Out"></Button>
        </div>
    )
}