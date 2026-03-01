import Button from "./Button";

const onClick = ()=>{

}
export default function TopBar(){
    return(
        <div className="flex justify-between border-b p-3 border-white">
            <p className="text-3xl font-bold text-white">Link Folder</p>
            <Button onClick={random} buttonText="Add New"></Button>
            <Button buttonText="Sign Out"></Button>
        </div>
    )
}