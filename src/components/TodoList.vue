<template>
  <div>
    <transition-group name="list" tag="ul">
        <li v-for="(todoItem,index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
             <i class="checkBtn fas fa-check" 
              v-bind:class="{checkBtnCompleted: todoItem.completed}"
              v-on:click="toggleComplete({todoItem, index})"></i>

            <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>

            <span class="removeBtn" v-on:click="removeTodo({todoItem,index})">
                <i class="fa-solid fa-trash"></i>
            </span>
        </li>
    </transition-group>
        

  </div>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex';
export default {
    methods:{
        ...mapMutations({
          removeTodo:'removeOneItem', //호출할때 (todoItem,index) 인자는 암묵적으로 넘김,객체 하나를 넘기려면 {}감싸쭤야함
          toggleComplete: 'toggleOneItem'
        
        })
        // toggleComplete: function(todoItem,index){
        //     //  this.$emit('toggleItem',todoItem,index);
        //     this.$store.commit('toggleOneItem',{todoItem,index});

        // }
    },
    computed:{
      // todoItems(){
      //   return this.$store.getters.storedTodoItems;
      // } mapGetters로 대체
      ...mapGetters(['storedTodoItems'])
    }
    
}
</script>

<style scoped>
ul {
	list-style-type: none;
	padding-left: 0px;
	margin-top: 0;
	text-align: left;
}
li {
	display: flex;
	min-height: 50px;
	height: 50px;
	line-height: 50px;
	margin: 0.5rem 0;
	padding: 0 0.9rem;
	background: white;
	border-radius: 5px;
}
.checkBtn {
	line-height: 45px;
	color: #62acde;
	margin-right: 5px;
}
.checkBtnComplated {
	color: #b3adad;
}
.textCompleted {
	text-decoration: line-through;
	color: #b3adad;
}
.removeBtn {
	margin-left: auto;
	color: #de4343;
}


/*ListItem Transition*/
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
} 
</style>