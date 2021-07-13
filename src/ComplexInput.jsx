import { useState } from "react";

const Complex = () => {
const [fullname, setfullname] = useState({
    fname:"",
    lname:"",
    email:"",
});

const ChangeName = (e) =>{
 console.log(e.target.value)
 console.log(e.target.name)
    const name = e.target.name;
    const value = e.target.value;
    
 setfullname((pre)=>{
     console.log(pre)

     if(name==='fname'){
         return{
             fname:value,
             lname:pre.lname,
             email:pre.email,
         }
     }
     else if(name==='lname'){
         return{
            fname:pre.fname,
             lname:value,
             email:pre.email,
             
         }
     }
     else if(name==='email'){
         return{
            fname:pre.fname,
            lname:pre.lname,
            email:value,

         }
     }
 })
}

    return (
        <>
            <form>
                <h2>Your name {fullname.fname} {fullname.lname}</h2>
                <h6>Your email: {fullname.email}</h6>

                <input type="text"
                placeholder="enter your First name"
                name="fname"
                onChange={ChangeName}/><br/>

                <input type="text"
                placeholder="Enter your last name" 
                name="lname"
                onChange={ChangeName}/><br/>

                <input type="email"
                placeholder="enter your email"
                name="email"
                onChange={ChangeName}
                /><br/>
                
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
export default Complex;