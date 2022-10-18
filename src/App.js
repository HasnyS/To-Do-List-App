import logo from './logo.svg';
import Todolist from "./Todolist";
import React,{useState, useRef,useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoapp.todos'

function App() {
  const [todos,setTodos ] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  },[]);
  
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))

      }
  ,[todos])

  function toggleTodo(id){
    const newToDos = [...todos]
    const todo  = newToDos.find(todo => todo.id === id);
    todo.complete = !todo.complete
    setTodos(newToDos)
  }

  

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if (name ==='') return
    setTodos(prevTodos => {
      return [...prevTodos,{id:uuidv4(),name: name, complete:false}]
    })
    todoNameRef.current.value = null

  }
  function handleClearTodos(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }
  return (<>
      <Todolist todos = {todos} toggleTodo = {toggleTodo} />
    <input ref={todoNameRef} type={"text"}/>
    <button onClick={handleAddTodo}> Add Todo</button>
    <button onClick={handleClearTodos}> Clear Complete </button>
    <div>{todos.filter(todo => !todo.complete).length} left to do</div>
  </>);
}

export default App;

