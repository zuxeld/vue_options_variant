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

  <main class="mx-auto p-3 font-mono">
      <!-- search bar: -->
      <form class="flex items-center mt-5 mx-3 mb-10 w-6/12 max-sm:w-auto " action="" method="post" >
        
        <label for="search" class="hidden">search</label>
        <input
        class="h-9 pl-2 pb-1 min-w-[40px] flex-grow  border rounded-l-lg shadow focus:outline-none
          placeholder:text-gray-300 placeholder:font-semibold"
        type="search" name="search" id="search" placeholder="search:" list="search_item" autocomplete="off">

        <datalist id="search_item" class="min-w-[400px]">
          <option value="Edge">Edge</option>
          <option value="Firefox">Firefox</option>
          <option value="Chrome">Chrome</option>
          <option value="Opera">Opera</option>
          <option value="Safari">Safari</option>
        </datalist>

        <input 
        class="h-9 px-3 ml-1  border border-lime-700 bg-lime-600 text-white rounded-r-lg shadow shadow-lime-600 text-sm
          hover:bg-lime-500 active:bg-lime-700"
        type="submit" value="search">

        

      </form>

      <!-- list of macro-orders: (grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1)-->
      <section class="grid grid-cols-1 gap-6">

        <div class="flex items-center gap-1 justify-between border border-slate-600 hover:bg-slate-100 active:bg-slate-300 rounded-lg shadow px-5 py-3"> 
          <div class="flex-grow">
            <p class="text-xl">24.02.2023</p>
            <p class="text-lg">Алексей</p>
          </div>
          <div class="border-l-[1px] border-l-slate-200 min-w-[90px]">
            <p class="font-bold text-right">AMD:</p>
            <p class="text-right">~4500</p>
          </div>
        </div>

        <!-- split line: -->
        <div class="border-t border-black mx-6"></div>

        <div class="flex items-center gap-1 justify-between border border-slate-600 hover:bg-slate-100 active:bg-slate-300 rounded-lg shadow px-5 py-3"> 
          <div class="flex-grow">
            <p class="text-xl">23.02.2023</p>
            <p class="text-lg">Алексей</p>
          </div>
          <div class="border-l-[1px] border-l-slate-200 min-w-[90px]">
            <p class="font-bold text-right">AMD:</p>
            <p class="text-right">~5950</p>
          </div>
        </div>

        <div class="flex items-center gap-1 justify-between border border-slate-600 hover:bg-slate-100 active:bg-slate-300 rounded-lg shadow px-5 py-3"> 
          <div class="flex-grow">
            <p class="text-xl">22.02.2023</p>
            <p class="text-lg">Алексей</p>
          </div>
          <div class="border-l-[1px] border-l-slate-200 min-w-[90px]">
            <p class="font-bold text-right">AMD:</p>
            <p class="text-right">~5200</p>
          </div>
        </div>

        <div class="flex items-center gap-1 justify-between border border-slate-600 hover:bg-slate-100 active:bg-slate-300 rounded-lg shadow px-5 py-3"> 
          <div class="flex-grow">
            <p class="text-xl">21.02.2023</p>
            <p class="text-lg">Алексей</p>
          </div>
          <div class="border-l-[1px] border-l-slate-200 min-w-[90px]">
            <p class="font-bold text-right">AMD:</p>
            <p class="text-right">~57400</p>
          </div>
        </div>

      </section>

    </main>

</template>

<!-- ------------------------------------- -->

<style scoped>
</style>
