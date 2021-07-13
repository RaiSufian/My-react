import { useState } from "react";
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Button from '@material-ui/core/Button';

const Number =() =>{
    const[number,setnumber]=useState(0)

    const  inCrement=()=>{
        setnumber(number+1);
    }
    const deCrement =()=>{
            setnumber(0);
    }
    return(
        <>
        <div className="main">
            <div className="card">
                <h2>{number}</h2>

                <div className="btns">
                    <Button onClick={deCrement}><DeleteForeverOutlinedIcon/></Button>
                    <Button onClick={inCrement}><AddOutlinedIcon/></Button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Number;