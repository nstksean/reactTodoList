
import React, { useEffect, useState } from 'react';
import './App.css';
import TodoItem from './TodoItem';


function App() {

    const [todos, setTodos] = useState([
        {
            id: 1,
            content: '每一步都是為了更好的自己、前進吧！',
            isDone: true,
            isWrite: true,
            isImportant: false,
            commit: '你很棒',
            date: '2022-07-25'
        },
        {
            id: 2,
            content: '快到了，要去找工作了',
            isDone: false,
            isWrite: false,
            isImportant: false,
            commit: 'ＯＫ的',
            date: '2022-07-28'
        }
    ])
    const [value, setValue] = useState('')


    const handleInputChange = (e) => {
        setValue(e.target.value)
    }

    const handleCommitChange = (e) => {
        setValue(e.target.value)
    }

    const handleDateChange = (e) => {
        setValue(e.target.value)
        console.log("chooseDate", e.target.value)
    }

    const handleDateSet = (id, value) => {
        console.log("SV", id, value)
        const changeValue = todos.map(todo => {
            if (todo.id !== id) return todo;
            return {
                ...todo,
                date: value,
            };
        });
        setTodos(changeValue)
    }

    const handleDeleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const handleInputSubmit = (event) => {
        // console.log('event', event)
        event.preventDefault()
        setTodos(todo => {
            // console.log('sd', prev.length)
            return [{
                id: todo.length + 1,
                content: value,
                isDone: false,
                isWrite: false,
                isImportant: false,
                commit: "",
                date: "",
            }, ...todo]
        })

        setValue('')
    }

    const handleToggleCancel = (id, todo, date, commit,) => {
        console.log("handleTogglCancel", id, date, commit);
        const changeValue = todos.map(todo => {
            if (todo.id !== id) return todo
            return {
                ...todo,
                isWrite: false,
                date: "",
                commit: "",
            }
        })
        setTodos(changeValue)
    }


    const handleChangeTask = (id, value) => {
        console.log("handleChangeTask", id, value);
        const changeValue = todos.map(todo => {
            if (todo.id !== id) return todo;
            return {
                ...todo,
                commit: value,
            };
        });
        setTodos(changeValue);
    }

    const handleChceckboxToggleIsDone = id => {
        const changeValue = todos.map(todo => {
            if (todo.id !== id) return todo
            return {
                ...todo,
                isDone: !todo.isDone,
            }
        })
        setTodos(changeValue)
    }

    const handleToggleIsImportant = id => {
        const changeValue = todos.map(todo => {
            if (todo.id !== id) return todo
            return {
                ...todo,
                isImportant: !todo.isImportant,
            }
        })
        setTodos(changeValue)
    }

    const handleToggleIsWrite = id => {
        console.log("handleToggleIsWrite", id);
        const changeValue = todos.map(todo => {
            if (todo.id !== id) return todo
            return {
                ...todo,
                isWrite: !todo.isWrite,
            }
        })
        setTodos(changeValue)
    }



    const [countLT, setCountLT] = useState('')
    const [countDT, setCountDT] = useState('')

    const countLeftTask = () => {
        const lT = todos.reduce((all, todo) =>
            todo.isDone ? all : all + 1,
            0
        );
        setCountLT(lT)

    }

    const countDoneTask = () => {
        const dT = todos.reduce((count, todo) =>
            todo.isDone ? count + 1 : count,
            0
        );
        setCountDT(dT)
    }
    useEffect((status) => {
        countDoneTask()
        countLeftTask()
    })
    const [Tabs, setTabs] = useState("tab1")
    const handleTabMyTaskClick = (e) => {
        setTabs("tab1")
    }
    const handleTabInProgressClick = (e) => {
        setTabs("tab2")
    }
    const handleTabCompleteClick = (e) => {
        setTabs("tab3")
    }
    // const getStatus = (status, show, setShow) => {
    //     switch (status) {
    //         case "tab1": return
    //         case "tab2": return setShow("showDone")
    //         case "tab3": return setShow("showNoDone")
    //         default: setShow("showAll")
    //     }
    // }

    return (
        <div className="App">
            {/* <TabNav /> */}
            <div className="navContainer">
                <div className="filter" onClick={handleTabMyTaskClick}
                    value={"tab1"}
                >My task</div>
                <div className="filter" onClick={handleTabInProgressClick}
                    value={"tab2"}
                >In Progress</div>
                <div className="filter" onClick={handleTabCompleteClick}
                    value={"tab3"}
                >Completed</div>
            </div>

            <form onSubmit={handleInputSubmit}>
                <div className="input">
                    <input className="inputer"
                        placeholder=" + Add Task"
                        type="text"
                        name='data'
                        value={value}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleInputSubmit}>Add todo</button>
                </div>
            </form>
            <div className={"todoList" + " " + (Tabs === "tab1" ? '' : "hide")}>
                {todos.map((todo, idx) =>
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        idx={idx}
                        commit={todo.commit}
                        date={todo.date}
                        isDone={todo.isDone}
                        handleChceckboxToggleIsDone={handleChceckboxToggleIsDone}
                        handleDeleteTodo={handleDeleteTodo}
                        handleToggleIsImportant={handleToggleIsImportant}
                        handleChangeTask={handleChangeTask}
                        handleDateChange={handleDateChange}
                        handleDateSet={handleDateSet}
                        handleToggleIsWrite={handleToggleIsWrite}
                        handleToggleCancel={handleToggleCancel}
                    />)
                }</div>
            <div className={"todoList" + " " + (Tabs === "tab2" ? '' : "hide")}>
                {todos.filter(todo => todo.isDone === false)
                    .map((todo, idx) =>
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            idx={idx}
                            commit={todo.commit}
                            date={todo.date}
                            isDone={todo.isDone}
                            handleChceckboxToggleIsDone={handleChceckboxToggleIsDone}
                            handleDeleteTodo={handleDeleteTodo}
                            handleToggleIsImportant={handleToggleIsImportant}
                            handleChangeTask={handleChangeTask}
                            handleDateChange={handleDateChange}
                            handleDateSet={handleDateSet}
                            handleToggleIsWrite={handleToggleIsWrite}
                            handleToggleCancel={handleToggleCancel}
                        />
                    )}</div>
            <div className={"todoList" + " " + (Tabs === "tab3" ? '' : "hide")}>
                {todos.filter(todo => todo.isDone === true).map((todo, idx) =>
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        idx={idx}
                        commit={todo.commit}
                        date={todo.date}
                        isDone={todo.isDone}
                        handleChceckboxToggleIsDone={handleChceckboxToggleIsDone}
                        handleDeleteTodo={handleDeleteTodo}
                        handleToggleIsImportant={handleToggleIsImportant}
                        handleChangeTask={handleChangeTask}
                        handleDateChange={handleDateChange}
                        handleDateSet={handleDateSet}
                        handleToggleIsWrite={handleToggleIsWrite}
                        handleToggleCancel={handleToggleCancel}
                    />
                )}
            </div>


            <div className='statusContainer'>
                <div className='status'>
                    {countLT}task left/{countDT}task completed
                </div>
            </div>
            {/* 
            <div className="todoList">
                <div className="openTodoItem">
                    <div className="openTodoCheckbox">
                        <div className="checkBox">
                            <input type="checkbox" id="checkbox" onChange={handleChceckboxToggleIsDone} />
                        </div>
                        <div className='checkLabel'>
                            <label htmlFor="checkbox">Type Something Here…</label>
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
                            <label htmlFor="date">date :</label>
                            <div className='dateInput'>
                                <input type="date"
                                    id="date"
                                    name="todo-date"
                                    defaultValue={todos.date}
                                    onChange={handleDateChange} />
                            </div>
                        </div>
                        <div className="labelContainer">
                            <div className='faviconCommit'>C
                            </div>
                            <label htmlFor="commit">commit :</label>
                        </div>
                        <div className='commitArea' >
                            <textarea
                                defaultValue={"what"}
                                id={todos.id}
                                name="commit"
                                onChange={handleCommitChange}
                                row={4}
                                cols={35} /></div>
                    </div>

                    <div className='todoDetailBtnContainer'>
                        <button className="cancel"
                        >X Cancel</button>
                        <button className="addTask"
                        // onClick={handleAddClick}
                        >+ Add Task</button>
                    </div>

                </div>


                <div className="todoItem">

                    <div className="todoCheckbox">
                        <div className="checkLabel">
                            <input type="checkbox" id="checkbox" />
                            <label htmlFor="checkbox">Normal #1</label>
                        </div>

                        <div className="todoBtn">
                            <button className="btn_star">＃</button>
                            <button className="btn_write">＃</button>
                            <button className="btn_delete">＃</button>
                        </div>
                    </div>
                    <div className="todoDetail">
                        <span className="date">
                            {todos.date === [] ? "" : "Date:"}</span>
                        <span className="detailDate">
                            {todos.date === [] ? "" : "{todo.date}"}</span>
                        <span className="comment">
                            {todos.commit === [] ? "" : "commit"}</span>
                    </div>
                </div>

                <div className="checkedTodoItem">
                    <div className="todoCheckbox">
                        <div className="checkLabel">
                            <input type="checkbox" id="checkedBox" />
                            <label htmlFor="checkedBox">Normal #2</label>
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

            </div>*/}

        </div>

    );
}

export default App;
