import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import Newitem from './item'

const Todo = () => {

    const [item,setitem]=useState("")

    const [ditem,setditem]=useState([])

    const additem = (e)=>{
        console.log(e.target.value);
        setitem(e.target.value);
    }
    const displayItem =()=>{
            setditem((prevalue)=>{
                return [...prevalue,item]
            });
            setitem("");
    }
    return (
        <>
            <div className="main">
                <div className="mTodo_card">
                    <h2>
                        Todo list with material UI
                    </h2>

                    <input type="text" placeholder="Enter your item" onChange={additem} value={item}/>
                    <Button variant="outlined" color="primary" className="my-btn" onClick={displayItem}>
                        <AddIcon />
                    </Button>

                    <ul>
                       {
                            ditem.map((value)=>{
                                return <Newitem new={value}/>
                            })
                       }
                   
                    </ul>
                </div>
            </div>
        </>
    );
};
export default Todo;