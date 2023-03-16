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
        todoItems: storage.fetch() // store에서 todoItems 를 가져와서 todoList에 뿌려준다.
    }
});

