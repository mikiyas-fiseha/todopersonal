import { useEffect } from "react";
import { useRef, useState } from "react";
import "./css/Todo.css";
import TodoItems from "./TodoItems";

let count=0
const Todo = () => {
    const [todo, setTodos] = useState([]);
    const inputRef = useRef(null);

    const add = () => {
        setTodos([...todo, { no: count++, text: inputRef.current.value, display: "" }]);
        inputRef.current.value = '';
        localStorage.setItem("todos_count",count)
    };

    useEffect(() => {
        const storedTodo = JSON.parse(localStorage.getItem("todo"));
        count =localStorage.getItem("todos_count")
        setTodos(storedTodo || []); // Set todos to the stored data or an empty array if there's no data.
    }, []);

    useEffect(() => {
        setTimeout(() => {
            console.log(todo);
            localStorage.setItem("todo", JSON.stringify(todo));
        }, 100);
    }, [todo]);

    return (
        <div className="todo">
            <div className="todo-header">To Do List</div>
            <div className="todo-add">
                <input ref={inputRef} type="text" className="todo-input" placeholder="Add Your Text" />
                <div onClick={add} className="todo-add-btn">
                    Add
                </div>
            </div>
            <div className="todo-list">
                {todo.length > 0 ? (
                    todo.map((item, index) => (
                        <TodoItems key={index} setTodos={setTodos} no={item.no} text={item.text} display={item.display} />
                    ))
                ) : (
                    <p>No items in the to-do list.</p>
                )}
            </div>
        </div>
    );
};

export default Todo;
