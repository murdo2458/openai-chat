import { inputData } from "../helpers/constants/input-data";


export default function newpg() {
    const inputString = JSON.stringify({ inputData })

    return (
        <div>
            <p className="text-white text-xl">Hello World heres some unreadable input data:</p>
            <br></br>
            <p className="text-white">{inputString}</p>
        </div>
    )
}