
import React, { useState } from 'react';
import './App.css';


function TodoItem({
    className, todo, idx,
    handleDeleteTodo,
    handleChceckboxToggleIsDone,
    handleToggleIsImportant,
    handleAddTask }) {

    const handleChceckboxChange = () => {
        handleChceckboxToggleIsDone(todo.id)
    }
    const handleDeleteClick = () => {
        handleDeleteTodo(todo.id)
    }
    const handleStarClick = () => {
        handleToggleIsImportant(todo.id)
    }
    const getImportant = () => {
        return todo.isImportant ? "checkedOpenTodoItem" : "openTodoItem";
    }
    const handleAddClick = () => {
        console.log(commit)
        handleAddTask(todo.id)
    }

    const [commit, setCommit] = useState('')

    const handleCommitChange = (e) => {
        console.log(e.target.value)
        setCommit(e.target.value)
    }

    return (

        <div className="todoList">
            <div className={getImportant()}>
                <div className="openTodoCheckbox">
                    <div className="checkLabel">
                        <input type="checkbox" id={todo.id} checked={todo.isDone} onChange={handleChceckboxChange} />
                        <label htmlFor={todo.id}
                        >{todo.content}</label>
                    </div>

                    <div className="todoBtn">
                        <button
                            onClick={handleStarClick}
                            className="btn_star">Star</button>
                        <button className="btn_write">Write</button>
                        <button
                            onClick={handleDeleteClick}
                            className="btn_delete">delete</button>
                    </div>
                </div>

                <div className="openTodoDetail">
                    <div className="labelContainer">
                        <div className='faviconDate'>D </div>
                        <label htmlFor="date">date :</label>
                    </div>
                    <div className='dateInput'>
                        <input type="date" id="date" name="todo-commit" />
                    </div>
                    <div className="labelContainer">
                        <div className='faviconCommit'>C
                        </div>
                        <label htmlFor={todo.id}>commit :</label>
                    </div>
                    <div className='commitArea' >
                        <textarea
                            defaultValue={"what"}
                            id={todo.id}
                            name="commit"
                            onChange={handleCommitChange}
                            row={4}
                            cols={35} /></div>
                </div>

                <div className='todoDetailBtnContainer'>
                    <button className="cancel">X Cancel</button>
                    <button
                        className="addTask"
                        onClick={handleAddClick}>+ Add Task</button>
                </div>

            </div>
        </div>
    );
}



function App() {

    const [todos, setTodos] = useState([
        {
            id: 1,
            content: 'default 1',
            isDone: true,
            isWrite: true,
            isImportant: false,
            commit: '好重要'
        },
        // {
        //     id: 2,
        //     content: 'default 2',
        //     isDone: true,
        //     isWrite: false,
        //     isImportant: false,
        // }
    ])

    const [value, setValue] = useState('')

    const handleInputChange = (e) => {
        setValue(e.target.value)
    }

    const handleCommitChange = (e) => {
        setValue(e.target.value)
    }

    const handleDeleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const handleInputSubmit = (event) => {
        console.log('event', event)
        event.preventDefault()

        setTodos(prev => {
            console.log('sd', prev.length)
            return [{
                id: prev.length + 1,
                content: value,
                isDone: false,
                isWrite: false,
                isImportant: false,
                commit: [],
            }, ...prev]
        })

        setValue('')
    }

    const handleAddTask = id => {
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



    return (
        <div className="App">
            <div className="navContainer">
                <div className="filter">My Tasks</div>
                <div className="filter">In Progress</div>
                <div className="filter">Completed</div>
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

            {todos.map((todo, idx) =>
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    idx={idx}
                    setTodos={setTodos}
                    commit={todo.commit}
                    handleChceckboxToggleIsDone={handleChceckboxToggleIsDone}
                    handleDeleteTodo={handleDeleteTodo}
                    handleToggleIsImportant={handleToggleIsImportant}
                    handleAddTask={handleAddTask}
                />
            )
            }

            <div className="todoList">
                <div className="openTodoItem">
                    <div className="openTodoCheckbox">
                        <div className="checkLabel">
                            <input type="checkbox" id="checkbox" onChange={handleChceckboxToggleIsDone} />
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
                        <button className="cancel">X Cancel</button>
                        <button className="addTask"

                        >+ Add Task</button>
                    </div>

                </div>

                <div className="todoItem">

                    <div className="todoCheckbox">
                        <div className="checkLabel">
                            <input type="checkbox" id="checkbox" />
                            <label htmlFor="checkbox">Type Something Here…</label>
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
                            <label htmlFor="checkedBox">Type Something Here…</label>
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
