
import './App.css';

function TodoItem({
    handleChangeTask,
    className, todo, idx,
    handleDeleteTodo,
    handleChceckboxToggleIsDone,
    handleToggleIsImportant,
    handleAddTask,
    handleDateSet,
    handleToggleCancel,
    handleToggleIsWrite,
}) {
    // const [input, setInput] = useState("")
    const handleChceckboxChange = () => {
        handleChceckboxToggleIsDone(todo.id)
    }
    const handleDeleteClick = () => {
        handleDeleteTodo(todo.id)
    }
    const handleWriteClick = () => {
        handleToggleIsWrite(todo.id)
    }
    const handleStarClick = () => {
        handleToggleIsImportant(todo.id)
    }
    const getImportant = () => {
        return todo.isImportant ? "checkedOpenTodoItem" : "openTodoItem";
    }

    const getDetail = () => {
        return todo.isWrite ? "" : "hide"
    }
    const noDetail = () => {
        return todo.isWrite ? "hide" : ""
    }

    // const showDetailDate = () => {
    //     return todo.date !== "" ? "" : "hide"
    // }
    // const showDetailCommit = () => {
    //     return todo.commit !== "" ? "" : "hide"
    // }

    const handleAddClick = () => {
        // handleAddTask(todo.id)
        // handleDateSet(todo.id)
        //test
        handleWriteClick()
        // alert("Click Add|||=.=")

    }
    const handleCancelClick = () => {
        handleToggleCancel(todo.id, todo.date, todo.commit)
    }
    const handleDateChange = (e) => {
        handleDateSet(todo.id, e.target.value)
    }


    const handleCommitChange = (e) => {
        handleChangeTask(todo.id, e.target.value)
    }



    return (

        <div className="">
            <div className={getImportant()}>
                <div className="openTodoCheckbox">
                    <div className="checkLabel">
                        <input type="checkbox" id={todo.id} checked={todo.isDone} onChange={handleChceckboxChange} />
                        <label className="label"
                            htmlFor={todo.id}
                        >{todo.content}</label>
                    </div>

                    <div className="todoBtn">
                        <button
                            onClick={handleStarClick}
                            className="btn_star">Star</button>
                        <button
                            onClick={handleWriteClick}
                            className="btn_write">Write</button>
                        <button
                            onClick={handleDeleteClick}
                            className="btn_delete">delete</button>
                    </div>
                </div>

                <div className={getDetail() + " " + "openTodoDetail"}>
                    <div className="labelContainer">
                        <div className='faviconDate'>D </div>
                        <label htmlFor="date">date :</label>
                    </div>
                    <div className='dateInput'>
                        <input type="date"
                            id="date"
                            name="todo-date"
                            value={todo.date}
                            min="2022-03-24"
                            max="2022-09-01"
                            onChange={handleDateChange} />
                    </div>
                    <div className="labelContainer">
                        <div className='faviconCommit'>C
                        </div>
                        <label htmlFor={todo.id}>commit :</label>
                    </div>
                    <div className='commitArea' >
                        <textarea
                            value={todo.commit}
                            id={todo.id}
                            name="commit"
                            onChange={handleCommitChange}
                            row={4}
                            cols={35} /></div>
                </div>
                <div className={noDetail() + " " + "todoDetail"}>
                    <span className="date" >
                        {todo.date === ' ' || "" ? " " : "Date:"}</span>
                    <span className="date">
                        {todo.date === ' ' || "" ? " " : todo.date}</span>
                    <span className="date">
                        {todo.commit === ' ' || "" ? "" : "commit"}</span>
                </div>

                <div className={getDetail() + " " + 'todoDetailBtnContainer'}>
                    <button className="cancel"
                        onClick={handleCancelClick}>
                        X Cancel
                    </button>
                    <button
                        className="addTask"
                        onClick={handleAddClick}>
                        + Add Task
                    </button>
                </div>

            </div>
        </div >
    );
}
export default TodoItem;