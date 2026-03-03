import Button from "./Button";
import {useNavigate}   from "react-router-dom"


export default function TopBar(){
    const navigate = useNavigate();
    const onClickLogout = ()=>{
    localStorage.removeItem("token")
    navigate("/")
    console.log("button clicked")

}
    return(
        <div className="flex justify-between border-b p-3 border-white">
            <p className="text-3xl font-bold text-white">Link Folder</p>
            <Button onClick={random} buttonText="Add New newq thsi alkfjasdfljasdfl;kasdflkasdflkj; "></Button>
            <Button onClick={onClickLogout} buttonText="Sign Out"></Button>
        </div>
    )
}