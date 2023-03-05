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

    <!-- header of order:-->
    <header class="flex items-center gap-1 justify-between  group px-5 pt-3 pb-4"> 
      <div class="flex-grow">
        <p class="text-xl">24.02.2023</p>
        <input type="text" value="Алексей" class="pl-2 -translate-x-2 w-full  rounded-md text-lg group-hover:bg-slate-100 outline-2 outline-sky-500 outline-offset-0">
      </div>
      <div class="border-l-[1px] border-l-slate-200 min-w-[90px]">
        <p class="font-bold text-right">AMD:</p>
        <p class="text-right">~10200</p>
      </div>
    </header>
    
    <!-- list of points of order: -->
    <section class="grid grid-cols-1">
    
      <div class="grid grid-cols-[minmax(0,1fr)_50px_50px_60px]  border-b-2 border-slate-200"> 
        <p class="pl-2 self-end  font-bold">Name</p>
        <p class="font-bold text-center justify-self-center self-end">N</p>
        <div class="justify-self-center self-end">
          <svg width="14" height="36" viewBox="0 0 14 36">
            <use xlink:href="../../assets/icons.svg#measure_icon"></use>
          </svg>
        </div>
        <p class="font-bold text-center self-end">AMD</p>
      </div>
      
      <div class="grid grid-cols-[minmax(0,1fr)_50px_50px_60px]  border-b-2 border-slate-200"> 
        <input type="text" value="Лимон" class="pl-2 min-h-[50px]  hover:bg-slate-200 rounded-md outline-2 outline-sky-500 -outline-offset-2">
        <input type="number" value=10 class="min-h-[50px]  text-right hover:bg-slate-200 rounded-md outline-2 outline-sky-500 -outline-offset-2">
        <input type="text" value="шт." class="min-h-[50px]  text-right hover:bg-slate-200 rounded-md outline-2 outline-sky-500 -outline-offset-2">
        <input type="number" value="120" class="min-h-[50px]  text-right hover:bg-slate-200 rounded-md outline-2 outline-sky-500 -outline-offset-2">
        <input type="text" value="Լիմոն" class="pl-2 min-h-[50px]  hover:bg-slate-200 rounded-md outline-2 outline-sky-500 -outline-offset-2">
        <input type="number" value="1200" class="min-h-[50px] col-span-3 text-right  hover:bg-slate-200 rounded-md outline-2 outline-sky-500 -outline-offset-2">
      </div>
    
      <div class="grid grid-cols-[minmax(0,1fr)_50px_50px_60px]  border-b-2 border-slate-200"> 
        <input type="text" value="Гранат" class="pl-2 min-h-[50px]  hover:bg-slate-200 rounded-md outline-2 outline-sky-500 -outline-offset-2">
        <input type="number" value=6 class="min-h-[50px]  text-right hover:bg-slate-200 rounded-md outline-2 outline-sky-500 -outline-offset-2">
        <input type="text" value="кг" class="min-h-[50px]  text-right hover:bg-slate-200 rounded-md outline-2 outline-sky-500 -outline-offset-2">
        <input type="number" value="800" class="min-h-[50px]  text-right hover:bg-slate-200 rounded-md outline-2 outline-sky-500 -outline-offset-2">
        <input type="text" value="Նուռ" class="pl-2 min-h-[50px]  hover:bg-slate-200 rounded-md outline-2 outline-sky-500 -outline-offset-2">
        <input type="number" value="4800" class="min-h-[50px] col-span-3 text-right  hover:bg-slate-200 rounded-md outline-2 outline-sky-500 -outline-offset-2">
      </div>
    
      <div class="grid grid-cols-[minmax(0,1fr)_50px_50px_60px]  border-b-2 border-slate-200"> 
        <input type="text" value="Апельсин" class="pl-2 min-h-[50px]  hover:bg-slate-200 rounded-md outline-2 outline-sky-500 -outline-offset-2">
        <input type="number" value=3 class="min-h-[50px]  text-right hover:bg-slate-200 rounded-md outline-2 outline-sky-500 -outline-offset-2">
        <input type="text" value="кг" class="min-h-[50px]  text-right hover:bg-slate-200 rounded-md outline-2 outline-sky-500 -outline-offset-2">
        <input type="number" value="700" class="min-h-[50px]  text-right hover:bg-slate-200 rounded-md outline-2 outline-sky-500 -outline-offset-2">
        <input type="text" value="Նարինջ" class="pl-2 min-h-[50px]  hover:bg-slate-200 rounded-md outline-2 outline-sky-500 -outline-offset-2">
        <input type="number" value="2100" class="min-h-[50px] col-span-3 text-right  hover:bg-slate-200 rounded-md outline-2 outline-sky-500 -outline-offset-2">
      </div>
    
      <div class="grid grid-cols-[minmax(0,1fr)_50px_50px_60px]  border-b-2 border-slate-200"> 
        <input type="text" value="Грейпфрут" class="pl-2 min-h-[50px]  hover:bg-slate-200 rounded-md outline-2 outline-sky-500 -outline-offset-2">
        <input type="number" value=3 class="min-h-[50px]  text-right hover:bg-slate-200 rounded-md outline-2 outline-sky-500 -outline-offset-2">
        <input type="text" value="кг" class="min-h-[50px]  text-right hover:bg-slate-200 rounded-md outline-2 outline-sky-500 -outline-offset-2">
        <input type="number" value="700" class="min-h-[50px]  text-right hover:bg-slate-200 rounded-md outline-2 outline-sky-500 -outline-offset-2">
        <input type="text" value="Թուրինջ" class="pl-2 min-h-[50px]  hover:bg-slate-200 rounded-md outline-2 outline-sky-500 -outline-offset-2">
        <input type="number" value="2100" class="min-h-[50px] col-span-3 text-right  hover:bg-slate-200 rounded-md outline-2 outline-sky-500 -outline-offset-2">
      </div>
    
      <button type="button" class="flex items-center justify-center max-h-9 min-h-[36px] mt-4  bg-gray-200 hover:bg-gray-300 active:bg-gray-400 shadow-innerGood ">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <use xlink:href="../../assets/icons.svg#white_plus"></use>
        </svg>
      </button>
    
    </section>
    
    <!-- save and cansel buttons: -->
    <section class="grid grid-cols-2 gap-5 mt-5">
      <button type="button" class="flex items-center justify-center max-h-11 min-h-[44px]  border border-slate-600 bg-lime-300 hover:bg-lime-200 active:bg-lime-500 rounded-lg shadow ">
        <p class="font-semibold">SAVE</p>
      </button>
      <button type="button" class="flex items-center justify-center max-h-11 min-h-[44px]  border border-slate-600 bg-red-400 hover:bg-red-300 active:bg-red-500 rounded-lg shadow ">
        <p class="font-semibold">CANSEL</p>
      </button>
    </section>
    
    <!-- comments: -->
    <section class="mt-5 -mb-1">
      <label for="comment">Comments:</label> <br>
      <textarea id="comment" placeholder="comment here:" class="min-h-[120px] min-w-full px-2 pt-1  border border-slate-300 hover:bg-slate-100 rounded-lg shadow placeholder:text-gray-300 placeholder:font-semibold outline-2 outline-sky-500 -outline-offset-2"></textarea>
    </section>
  </main>
    
</template>

<!-- ------------------------------------- -->

<style scoped>
</style>
