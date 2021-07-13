import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const ShowNotes = (props) =>{
    const deleteNote =()=>{
        props.deleteitems(props.id);
    }
    return(
        <>
           <div className="showNotes">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
                <Button  color="secondary" onClick={deleteNote}> 
                    <DeleteOutlineIcon/>
                </Button>

           </div>
           
        </>
    )
}
export default ShowNotes;