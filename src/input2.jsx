import { useState } from "react";

const Input2 = ()=>{
    const [fname,setfname] = useState("")
    const [lname,setlname] = useState("")

    const [pfname,setpfname] = useState()
    const [plname,setplname] = useState()

    const upDatefName = (event)=>{ 
        setfname(event.target.value);
        console.log(fname);
        
    }
    const upDatelName = (event)=>{
        setlname(event.target.value);
        console.log(lname);
    } 
    const changeName = (event)=>{
        event.preventDefault();
            setpfname(fname);
            setplname(lname);
    }

    return(
        <>
            <form onSubmit = {changeName}>
                <h1>Hello {pfname} {plname}</h1>
                <input type="text" 
                placeholder="enter your first name" 
                value={fname} 
                onChange={upDatefName}/><br/>

                <input type="text" 
                placeholder="enter your Second name" 
                value={lname} 
                onChange={upDatelName}/><br/>
                
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
export default Input2;