import React from "react";
import './App.css'

function TodoItem({ className, todo, idx
    , handleDeleteTodo, handleToggleIsDone }) {
    const handleToggleClick = () => {
        handleToggleIsDone(todo.id)
    }
    const handleDeleteClick = () => {
        handleDeleteTodo(todo.id)
    }
    return (
        <div>
            <TodoItemWrapper className={className} data-todo-id={todo.id}>
                {todo.id}
                <TodoContent isDone={todo.isDone} >{todo.content}</TodoContent>
                <TodoButtonWrapper>
                    <Button onClick={handleToggleClick}>
                        {todo.isDone ? '未完成' : '已完成'}
                    </Button>
                    <RedButton onClick={handleDeleteClick}>刪除</RedButton>
                </TodoButtonWrapper>
            </TodoItemWrapper>
        </div>);
}

export default TodoItem;