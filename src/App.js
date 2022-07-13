import './App.css';

function App() {


    return (
        <div className="App">
            <div className="navContainer">
                <div className="filter">My Tasks</div>
                <div className="filter">In Progress</div>
                <div className="filter">Completed</div>
            </div>

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
                            <button className="btn_star">＃</button>
                            <button className="btn_write">＃</button>
                            <button className="btn_delete">＃</button>
                        </div>
                    </div>
                    <form>
                        <div className="openTodoDetail">
                            <div className="dateContainer">
                                <div className='faviconDate'>D</div>
                                <label htmlfor="date">date :</label>
                                <input type="date" id="date" name="todo-commit" />
                            </div>

                            <div className="commitContanier">
                                <div className='faviconCommit'>C</div>
                                <label htmlfor="commit">commit :</label>
                                <textarea value={""}
                                    id="commit"
                                    name="todo-date"
                                    row={50}
                                    cols={50} />
                            </div>
                            <div className='btnContainer'>
                                <div className="cancel">X Cancel</div>
                                <div className="addTask">+ Add Task</div>
                            </div>
                        </div>
                    </form>
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
        </div>
    );
}

export default App;
