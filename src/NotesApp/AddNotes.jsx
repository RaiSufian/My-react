import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
const Addnotes = (props) => {
    const [Note, setNote] = useState({
        title: "",
        content: "",
    });
    const [show, setShow] = useState(false)
    const InputEvent = (e)=>{
        const {name, value} = e.target

        setNote((prevalue)=>{
           return{
            ...prevalue,
            [name]:value
           }
        })
        console.log(Note)
    }
    const AddElement = ()=>{
        props.passNote(Note);
        setNote({
            title: "",
        content: ""
        })
    }
    const showall = ()=>{
        setShow(true)
    }
    const hideAll = ()=>{
        setShow(false)
    }
    return (
        <>
            <div className="addNotes">
                <from>
                  {  show?
                    <input
                        name="title"
                        type="text" 
                        placeholder="Title" 
                        autoComplete="off" 
                        onChange={InputEvent}
                        value={Note.title}
                    /> : null}
                    <textarea 
                        name="content"
                        rows="" 
                        column="" 
                        placeholder="write a Note..."
                        onChange={InputEvent}
                        value={Note.content}
                        onClick={showall}
                        onDoubleClick={hideAll}

                    >

                    </textarea>
                    {show?
                    <Button variant="contained" color="primary" onClick={AddElement}>
                        <AddIcon />
                    </Button> :null}
                </from>
            </div>
        </>
    )
}
export default Addnotes;