import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch(){
        const arr =[];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        } 
        return arr;
    }
}

export const store = new Vuex.Store({
    //store를 외부에서 사용할 수 있다. main.js 로
    state:{
        todoItems: storage.fetch() // store에서 todoItems 를 가져와서 todoList에 뿌려준다
    },
    getters:{
        storedTodoItems(state){
            return state.todoItems;
        }
    }
    ,
    mutations:{
        addOneItem(state,todoItem){ //인자로 state를 넣어야 state에 접근가능
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
});







