import React from 'react';

function Todo( {todo, toggleTodo} ) {
    function handleToDoClick(){
        toggleTodo(todo.id)
    }
    return (
        <div>
            <label>
                {todo.name}
                {<input type="checkbox" checked={todo.complete} onChange={handleToDoClick}/>}
                
            </label>
        </div>
    );
}

export default Todo;