
const addOneItem = (state, todoItem)=>{ //인자로 state를 넣어야 state에 접근가능
    const obj = { completed: false, item: todoItem }
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}

const removeOneItem =(state, payload)=> {
    localStorage.removeItem(payload.todoItem.item); //
    state.todoItems.splice(payload.index, 1); // index 부터 하나 
}

const toggleOneItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAllItem = (state) => {
    localStorage.clear();
    state.todoItems = [];
}

export {addOneItem,removeOneItem,toggleOneItem,clearAllItem} 