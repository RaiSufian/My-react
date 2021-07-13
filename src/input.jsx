import { useState } from "react";

const Input = () =>{
    const [name,setname]= useState ();
    const [fullname, setfullname] = useState();

    const changeName = () =>{
        setfullname(name);
    }
    const getName =(event) =>{
        setname(event.target.value)
    }
    return(
        <>
         <div>
             <h1>Hello {fullname}</h1>
             <input type="text" placeholder="enter your name" value={name} onChange={getName}/>
             <button type="submit" onClick={changeName}>Submit</button>
         </div>
        </>
    )
}
export default Input;