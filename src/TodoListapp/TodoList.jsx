const TodoList = (props) => {

    return (
        <>

            <li className="ListItems">
                <div className="closeItem">
                    <i className="fas fa-times mx-2"
                        onClick={() => {
                            props.onSelect(props.id);
                        }}></i>
                </div>
                {props.name}
            </li>
        </>
    )
}
export default TodoList;