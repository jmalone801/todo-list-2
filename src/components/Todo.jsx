
const Todo = (props) => {
    
    // Cross off item function
    const todoClasses = [];
    if (props.todo.complete) {
        todoClasses.push("line-through");
    }

    return <div key={props.i}>
        {/* Toggles check box either true or false */}
        <input onChange={(event) => { props.handleToggleComplete(props.i) }} checked={props.todo.complete} type="checkbox" />
        {/* Crosses off item using CSS using .push in line 6 */}
        <span className={todoClasses.join(" ")}>{props.todo.text}</span>
        {/* Handles delete function */}
        <button className='btn-danger m-1' onClick={(event) => { props.handlerTodoDelete(props.i) }}>Delete</button>
    </div>
}

export default Todo;