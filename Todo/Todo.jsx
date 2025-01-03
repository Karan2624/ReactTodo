import { useEffect, useState } from "react";
import "./Todo.css";

import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorageToData,setLocalStorageToData } from "./TodoLocalStorage";






export const Todo = () => {


    const [task,setTask] = useState(() => getLocalStorageToData());
   
    const handleFormSubmit = (inputValue) => {
        const{id,content,checked} = inputValue

        if(!content) return;

        // if(task.includes(inputValue)) return;
        const ifTodoContentMatched = task.find((curTask) => curTask.content === content)

        if(ifTodoContentMatched){
            return;
        }

        // setTask((prevTask) => [...prevTask,{id:id,content:content,checked:checked}]);setTask((prevTask) => [...prevTask,{id:id,content:content,checked:checked}]);
        //or
        setTask((prevTask) => [...prevTask,{id,content,checked}]);

        
    }

    setLocalStorageToData(task);

  
    const handleCheckedTodo = (content) => {
        const updatedTask = task.map((curTask) => {
            if(curTask.content==content){
                return {...curTask,checked : !curTask.checked}
            }
            else{
                return curTask;
            }
        })
        setTask(updatedTask);
    }

  

    const handleDeleteTodo = (value) => {

        const updatedTask = task.filter((curTask) => curTask.content!==value)
        setTask(updatedTask);
    }
     
    const handleClearTodoData = () => {
        setTask([]);
    }
   
    return (
        <section className="todo-container" >
            <header>
                <h1>Todo List</h1>
                <TodoDate />
            </header>
            <TodoForm onAddTodo={handleFormSubmit} />
            <section>
                <ul>
                    {
                        task.map((curTask) => {
                            return (
                                <TodoList key={curTask.id} data={curTask.content} checked={curTask.checked} onHandleDeleteTodo={handleDeleteTodo} onHandleCheckedTodo={handleCheckedTodo} />
                            )
                        })
                    }
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={handleClearTodoData}>Clear all</button>
            </section>
        </section>
    );
};