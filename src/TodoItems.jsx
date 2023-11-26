import "./css/Todo.css"
import "./css/TodoItems.css"

// import tick from "./Assets/tick.png"
// import not_tick from './Assets/not_tick/png'
// import cross from "./Assets/cross.png"
const TodoItems = ({no,text,display,setTodos}) => {
  const deletee=(no)=>{
    let data=JSON.parse(localStorage.getItem("todo"));
    data=data.filter((todo)=>todo.no!==no)
    setTodos(data)
  }
  const toggle= (no)=>{
    let data=JSON.parse(localStorage.getItem("todo"));
    for (let i = 0; i < data.length; i++) {
      if(data[i].no===no){
        if(data[i].display===""){
          data[i].display="line-through"
        }
        else{
          data[i].display=""
        }
        break
      }
      
    }
    setTodos(data)
  }
  return (
<div className="todoitems">
    <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
      {display===""?<img src="src\Assets\not_tick.png" alt="" />:<img src="src\Assets\tick.png" alt="" />}
        
        <div className="todol-item-text">{text}</div>
    </div>
    <img onClick={()=>{deletee(no)}} className="todo-item-cross-icon" src="src\Assets\cross.png" alt="" />

</div>  )
}

export default TodoItems