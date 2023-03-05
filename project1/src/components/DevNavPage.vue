<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    
  },
  created() {
    
  },
  data() {
    return {
      
    }
  },
  watch: {
    
  },
  mounted() {
    
  },
  computed: {
    
  },
  methods: {
    
  },

}
</script>

<!-- ------------------------------------- -->

<template>
  <!-- исходный пример шаблона: -->
  <!-- <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p> -->

  <nav>
    <p class="font-bold">customer interface:</p>
    <router-link to="/customer/list-of-orders">list of oders</router-link> <br>
    <router-link to="/customer/order">order</router-link> <br>
    <br><br>
    <p class="font-bold">purchaiser interface:</p>
    <router-link to="/purchaiser/list-of-orders">list of oders</router-link> <br>
    <router-link to="/purchaiser/order">order</router-link> <br>
    <router-link to="/purchaiser/buing-screen">buing screen</router-link> <br>
  </nav>

</template>

<!-- ------------------------------------- -->

<style scoped>
</style>
