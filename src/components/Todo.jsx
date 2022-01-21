const Todo = (props) => {
    const todoClasses = [];
    if (props.todo.complete) {
        todoClasses.push("line-through");
    }

    return <div key={props.i}>
        <input onChange={(event) => { props.handleToggleComplete(props.i) }} checked={props.todo.complete} type="checkbox" />
        <span className={todoClasses.join(" ")}>{props.todo.text}</span>
        <button className='btn-danger m-1' onClick={(event) => { props.handlerTodoDelete(props.i) }}>Delete</button>
    </div>
}

export default Todo;