const todoKey = "reactTodo";

export const getLocalStorageToData = () => {
    const rawTodos = localStorage.getItem(todoKey);
        // if its null
        if(!rawTodos){
            return[];
        }

        return JSON.parse(rawTodos);
}

export const setLocalStorageToData = (task) => {
    return localStorage.setItem(todoKey,JSON.stringify(task));
}