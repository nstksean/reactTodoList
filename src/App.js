import './App.css';

function App() {


    return (
        <div className="App">
            <div className="navContainer">
                <div className="filter">My Tasks</div>
                <div className="filter">In Progress</div>
                <div className="filter">Completed</div>
            </div>
            <form>
                <div className="input">
                    <input className="inputer" placeholder=" + Add Task" />
                </div>

                <div className="todoList">
                    <div className="openTodoItem">
                        <div className="openTodoCheckbox">
                            <div className="checkLabel">
                                <input type="checkbox" id="checkbox" />
                                <label htmlfor="checkbox">Type Something Here…</label>
                            </div>

                            <div className="todoBtn">
                                <button className="btn_star">star</button>
                                <button className="btn_write">Write</button>
                                <button className="btn_delete">delete</button>
                            </div>
                        </div>

                        <div className="openTodoDetail">
                            <div className="labelContainer">
                                <div className='faviconDate'>D</div>
                                <label htmlfor="date">date :</label>
                            </div>
                            <div className='dateInput'><input type="date" id="date" name="todo-commit" /></div>
                            <div className="labelContainer">
                                <div className='faviconCommit'>C
                                </div>
                                <label htmlfor="commit">commit :</label>
                            </div>
                            <div className='commitArea' ><textarea value={""}
                                id="commit"
                                name="todo-date"
                                row={35}
                                cols={35} /></div>
                        </div>

                        <div className='todoDetailBtnContainer'>
                            <button className="cancel">X Cancel</button>
                            <button className="addTask">+ Add Task</button>
                        </div>

                    </div>

                    <div className="todoItem">

                        <div className="todoCheckbox">
                            <div className="checkLabel">
                                <input type="checkbox" id="checkbox" />
                                <label htmlfor="checkbox">Type Something Here…</label>
                            </div>

                            <div className="todoBtn">
                                <button className="btn_star">＃</button>
                                <button className="btn_write">＃</button>
                                <button className="btn_delete">＃</button>
                            </div>
                        </div>
                        <div className="todoData">
                            <button className="date">＃</button>
                            <button className="detailDate">＃</button>
                            <button className="file">＃</button>
                            <button className="comment">＃</button>
                        </div>
                    </div>

                    <div className="checkedTodoItem">
                        <div className="todoCheckbox">
                            <div className="checkLabel">
                                <input type="checkbox" id="checkedBox" />
                                <label htmlfor="checkedBox">Type Something Here…</label>
                            </div>

                            <div className="todoBtn">
                                <button className="btn_star">＃</button>
                                <button className="btn_write">＃</button>
                                <button className="btn_delete">＃</button>
                            </div>
                        </div>
                        <div className="todoData">
                            <button className="date">＃</button>
                            <button className="detailDate">＃</button>
                            <button className="file">＃</button>
                            <button className="comment">＃</button>
                            {2 + ''}
                        </div>
                    </div>

                </div>
            </form>
        </div>

    );
}

export default App;
