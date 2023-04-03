const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    }
};

const state = {
    todoItems:storage.fetch() 
};

const getters = {
    storedTodoItems(state){
        return state.todoItems;
    }
};

const mutations = {
 addOneItem(state, todoItem) { //인자로 state를 넣어야 state에 접근가능
    const obj = { completed: false, item: todoItem }
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
},

 removeOneItem(state, payload) {
    localStorage.removeItem(payload.todoItem.item); //
    state.todoItems.splice(payload.index, 1); // index 부터 하나 
},

 toggleOneItem(state, payload) {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
},

 clearAllItem(state) {
    localStorage.clear();
    state.todoItems = [];
}
}

export default {
    state,
    getters,
    mutations
}