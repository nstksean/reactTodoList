
import './App.css';

function TodoItem({
    handleChangeTask,
    className, todo, idx,
    handleDeleteTodo,
    handleChceckboxToggleIsDone,
    handleToggleIsImportant,

    handleDateSet,
    handleToggleCancel,
    handleToggleIsWrite, status
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
                            className="btn_star">
                            <svg className="svgNavBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path className="svgPath"
                                    d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                            </svg>
                        </button>
                        <button
                            onClick={handleWriteClick}
                            className="btn_write">
                            <svg className="svgNavBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path className="svgPath" d="M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32zM421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3z" />
                            </svg>
                        </button>
                        <button
                            onClick={handleDeleteClick}
                            className="btn_delete">delete</button>
                    </div>
                </div>

                <div className={getDetail() + " " + "openTodoDetail"}>
                    <div className="labelContainer">
                        <div className='faviconDate'>
                            <svg className="favicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path className="svgPath" d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM192 304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304zM336 256C327.2 256 320 263.2 320 272V304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336zM64 432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80C71.16 384 64 391.2 64 400V432zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208zM320 432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336C327.2 384 320 391.2 320 400V432z" /></svg>
                        </div>
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
                        <div className='faviconDate'>
                            <svg className="favicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path className="svgPath"
                                    d="M256 31.1c-141.4 0-255.1 93.12-255.1 208c0 49.62 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734c1.249 3 4.021 4.766 7.271 4.766c66.25 0 115.1-31.76 140.6-51.39c32.63 12.25 69.02 19.39 107.4 19.39c141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zM127.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S145.7 271.1 127.1 271.1zM256 271.1c-17.75 0-31.1-14.25-31.1-31.1s14.25-32 31.1-32s31.1 14.25 31.1 32S273.8 271.1 256 271.1zM383.1 271.1c-17.75 0-32-14.25-32-31.1s14.25-32 32-32s32 14.25 32 32S401.7 271.1 383.1 271.1z" /></svg>
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