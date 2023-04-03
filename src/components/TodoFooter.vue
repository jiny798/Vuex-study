<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo"><button class="clearbtn">Clear All</button></span>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  methods: {
    ...mapMutations({
      clearTodo:'clearAllItem'
    })

    // clearTodo: function() {
    //   //this.$emit('clearAll');
    //   this.$store.commit("clearAllItem");
    // }
  }
}
</script>

<style scoped>
.clearbtn{
    border: none;
    background-color: white;
}
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  /* 추가 */
  display: block;
}
</style>