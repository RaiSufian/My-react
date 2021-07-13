
import { useState } from "react";
import TodoList from './TodoList'

const TodoApp = ()=>{

    const[list,setlist]= useState("")
    const[Items,setItem] = useState([])
    const MyItems =(e)=>{
        setlist(e.target.value)
    }
    const AddItem = ()=>{
        setItem ( (NewValue)=>{
            return [...NewValue,list]
        });
        setlist("");
    }
    const DeleteItems = (id) =>{
        console.log("deleted")
        setItem((NewValue)=>{
            return NewValue.filter((arrelemt,index)=>
            {
                return index !== id;
            })
        })

    };

    return(
    <div className="main">
        <div className="card">
            <h1>ToDo List</h1>
            <input type="text" value={list} placeholder="Add Items" onChange={MyItems}/>
            <button onClick={AddItem}>+</button>

            <ul>
                {Items.map( (itemvalue,index)=>{
                    return (
                        <TodoList
                         name={itemvalue}
                         key={index}
                         id={index}
                         onSelect={DeleteItems}/>
                    )
                })}
            </ul>
        </div>
    </div>
    );
}
export default TodoApp; 