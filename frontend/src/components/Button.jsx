export default function Button({buttonText,onClick}){
    return (
        <div>
            <button  onClick= {onClick} className=" bg-gray-600 border-2 p-2 rounded-xl border-white text-white">
                {buttonText}
            </button>
        </div>
    )
}