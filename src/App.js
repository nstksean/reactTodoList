import './App.css';

function App() {
  return (
    <div className="App">
      <div className="workSpace">
        <div className="bg_navbar">
            <div className="navContainer">   
            <div className="filter">My Tasks</div>
            <div className="filter">In Progress</div>
            <div className="filter">Completed</div> 
        </div>

        <div className="input">
            <input className="inputer" placeholder=" + Add Task"/>
        </div>

    <div className="todoList">

        <div className="todoItem">

            <div className="todoCheckbox">
                <div className="checkLabel">
                <input type="checkbox" id="checkbox"/>
                <label for="checkbox">Type Something Here…</label> 
                </div>
                  
                <div className="todoBtn">
            <button className="btn_star">＃</button>
            <button className="btn_write">＃</button>
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
                    <input type="checkbox" id="checkbox"/>
                    <label for="checkbox">Type Something Here…</label> 
                    </div>
                      
                    <div className="todoBtn">
                <button className="btn_star">＃</button>
                <button className="btn_write">＃</button>
                    </div>
                </div>
                    <div className="todoData">
                    <button className="date">＃</button>
                    <button className="detailDate">＃</button>
                    <button className="file">＃</button>
                    <button class="comment">＃</button>
                </div>
            </div>
    
        </div>
    </div>
    </div>
    </div>
  );
}

export default App;
