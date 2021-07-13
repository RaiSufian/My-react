import React from "react";
import NotesHeader from './Notesheader'
import AddNotes from './AddNotes'
import ShowNotes from './ShowNotes'
import './Notes.css'
import { useState } from "react";
import Footer from "./NotesFooter"

const NotesApp = () =>{
    const [Additems, setitemes] = useState([])
    const AddNote = (Note)=>{
        // alert("I am Clicked")
         setitemes((prevData)=>{
             return[...prevData, Note]
         })
         console.log(Note)
    } 
    const Delitems = (id)=>{
        // alert("Hello every one")
        setitemes ((oldData)=>
            oldData.filter((currdata,indx)=>{
                return indx !==id;
            })
        )
    }
    return(
        <>
            <NotesHeader/>
            <AddNotes passNote={AddNote}/>
            {
                Additems.map((val,index)=>{
                    return<ShowNotes
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteitems={Delitems}
                    />
                })
            }
            <Footer/>
            
        </>
    )
}
export default NotesApp;