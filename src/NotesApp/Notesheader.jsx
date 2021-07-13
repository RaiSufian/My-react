import SufianNotes from './img/SufianNotes.png' 
const NotesHeader = () =>{
    return(
        <>
            <div className="header">
                <img src={SufianNotes} alt="mainlogo" width="80px" height="80px"/>
                <h2>Notes</h2>
            </div>
            
        </>
    )
}
export default NotesHeader;