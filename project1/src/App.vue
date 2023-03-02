<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>


<template>
  <!-- исходный образец: -->
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->

  <!-- образец возможностей teilwind: -->
  <!-- <div class="group w-10 h-10 bg-orange-700">
    <div class="group-hover:my-custome-class bg-lime-500">test_text</div>
  </div> -->
  
  <main class="mx-auto p-3 font-mono">
    <!-- search bar: -->
    <form class="flex items-center mt-5 mx-3 mb-10 w-6/12 max-sm:w-auto " action="" method="post" id="searc_form">
      
      <label for="search" class="hidden">search</label>
      <input
      class="h-9 pl-2 pb-1 min-w-[40px] flex-grow  border rounded-l-lg shadow focus:outline-none
        placeholder:text-gray-300 placeholder:font-semibold"
      type="search" name="search_input" id="search" placeholder="search:" list="search_item" autocomplete="off" form="searc_form">
  
      <datalist id="search_item" class="min-w-[400px]">
        <option value="Edge">Edge</option>
        <option value="Firefox">Firefox</option>
        <option value="Chrome">Chrome</option>
        <option value="Opera">Opera</option>
        <option value="Safari">Safari</option>
      </datalist>
  
      <button 
      class="h-9 px-3 ml-1  border border-lime-700 bg-lime-600 text-white rounded-r-lg shadow shadow-lime-600 text-sm
        hover:bg-lime-500 active:bg-lime-700"
      type="button" form="searc_form" name="search_button">search</button>
  
      
  
    </form>
  
    <!-- list of macro-orders: (grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1)-->
    <section class="grid grid-cols-1 gap-6">
  
      <button class="flex items-center justify-center mx-4 max-h-16 min-h-[64px]  border border-slate-300 hover:bg-slate-100 active:bg-slate-300 rounded-lg shadow ">
        <svg width="28" height="28" viewBox="0 0 28 28">
          <use xlink:href="./assets/icons.svg#dark_plus"></use>
        </svg>
      </button>
  
      <div class="flex items-center gap-1 justify-between border border-slate-300 hover:bg-slate-100 active:bg-slate-300 rounded-lg shadow px-5 py-3"> 
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
  
      <div class="flex items-center gap-1 justify-between border border-slate-300 hover:bg-slate-100 active:bg-slate-300 rounded-lg shadow px-5 py-3"> 
        <div class="flex-grow">
          <p class="text-xl">23.02.2023</p>
          <p class="text-lg">Алексей</p>
        </div>
        <div class="border-l-[1px] border-l-slate-200 min-w-[90px]">
          <p class="font-bold text-right">AMD:</p>
          <p class="text-right">~5950</p>
        </div>
      </div>
  
      <div class="flex items-center gap-1 justify-between border border-slate-300 hover:bg-slate-100 active:bg-slate-300 rounded-lg shadow px-5 py-3"> 
        <div class="flex-grow">
          <p class="text-xl">22.02.2023</p>
          <p class="text-lg">Алексей</p>
        </div>
        <div class="border-l-[1px] border-l-slate-200 min-w-[90px]">
          <p class="font-bold text-right">AMD:</p>
          <p class="text-right">~5200</p>
        </div>
      </div>
  
      <div class="flex items-center gap-1 justify-between border border-slate-300 hover:bg-slate-100 active:bg-slate-300 rounded-lg shadow px-5 py-3"> 
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


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
