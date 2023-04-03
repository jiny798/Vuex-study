<template>
  <div id="root">
    <p>{{originalPrice}}</p>  <!--100-->
    <p>{{doublePrice}}</p>  <!--200-->
    <p></p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    computed:{
        ...mapGetters(['originalPrice','doublePrice'])

        // originalPrice() {
        //     return this.$store.getters.originalPrice
        // },
        // doublePrice() {
        //     return this.$store.getters.doublePrice
        // }
    }
}
</script>

<style>

</style>