import { useState } from "react";
import { useTodoDispatch } from "../context/TodoContext";


const Item = ({ todo }) => {
    const [ editingContent, setEditingContent ] = useState(todo.content);
    const dispatch = useTodoDispatch();

    const changeContent = (e) => setEditingContent(e.target.value);

    const toggleEditMode = () => {
        const newTodo = { ...todo, editing: !todo.editing };
        dispatch({ type: "update", todo: newTodo});
    }

    const confirmContent = (e) => {
        e.preventDefault();
        const newTodo = { ...todo, editing: !todo.editing, content: editingContent };
        dispatch({ type: "update", todo: newTodo});
    }

    const complete = (todo) => {
        dispatch({ type: "delete", todo });
    }

    return (
        <div key={todo.id}>
            <button onClick={() => complete(todo)}>完了</button>
            <form onSubmit={confirmContent} style={{ display: "inline" }}>
            {
                todo.editing ? (
                    <input type="text" value={editingContent} onChange={changeContent} />
                ) : (
                    <span onDoubleClick={toggleEditMode} >{todo.content}</span>
                )
            }
            </form>
            
        </div>
    );
};

export default Item;