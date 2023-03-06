<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    
  },
  created() {
    
  },
  data() {
    return {
      listOfItems: [
        {
          date: '24.02.2023',
          purchaiserName: 'Алексей',
          theoreticalPrice: 4500
        },
        {
          date: '23.02.2023',
          purchaiserName: 'Алексей',
          theoreticalPrice: 5950
        },
        {
          date: '22.02.2023',
          purchaiserName: 'Алексей',
          theoreticalPrice: 5200
        },
        {
          date: '21.02.2023',
          purchaiserName: 'Алексей',
          theoreticalPrice: 57400
        },
      ],
      currentDate: '24.02.2023',
      filterString: '',
    }
  },
  watch: {
    
  },
  mounted() {
    
  },
  computed: {
    filtredListOfItem() {
      if (this.filterString === '') return this.listOfItems;
      return [...this.listOfItems].filter(item => item.date.includes(this.filterString))
    } 

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
    <form @submit.prevent class="flex items-center mt-5 mx-3 mb-10 w-6/12 max-sm:w-auto " action="" method="post" id="searc_form">
      
      <label for="search" class="hidden">search</label>
      <input v-model="this.filterString" class="h-9 pl-2 pb-1 min-w-[40px] flex-grow  border rounded-l-lg shadow focus:outline-none
        placeholder:text-gray-300 placeholder:font-semibold"
      type="search" name="search_input" id="search" placeholder="search:" list="search_item" autocomplete="off" form="searc_form">
  
      <datalist id="search_item" class="min-w-[400px]">
        <option v-for="item in this.listOfItems" :value="item.date">{{ item.date }}</option>
      </datalist>
  
      <button class="h-9 px-3 ml-1  border border-lime-700 bg-lime-600 text-white rounded-r-lg shadow shadow-lime-600 text-sm
        hover:bg-lime-500 active:bg-lime-700"
      type="button" form="searc_form" name="search_button">search</button>
  
      
  
    </form>
  
    <!-- list of macro-orders: (grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1)-->
    <section class="grid grid-cols-1 gap-6">
  
      <button @click.left="this.$router.push('/customer/order')" class="flex items-center justify-center mx-4 max-h-16 min-h-[64px]  border border-slate-300 hover:bg-slate-100 active:bg-slate-300 rounded-lg shadow ">
        <svg width="28" height="28" viewBox="0 0 28 28">
          <use xlink:href="../../assets/icons.svg#dark_plus"></use>
        </svg>
      </button>

  
      <template v-for="item in filtredListOfItem">
        <div class="flex items-center gap-1 justify-between border border-slate-300 hover:bg-slate-100 active:bg-slate-300 rounded-lg shadow px-5 py-3"> 
          <div class="flex-grow">
            <p class="text-xl">{{ item.date }}</p>
            <p class="text-lg">{{ item.purchaiserName }}</p>
          </div>
          <div class="border-l-[1px] border-l-slate-200 min-w-[90px]">
            <p class="font-bold text-right">AMD:</p>
            <p class="text-right">~{{ item.theoreticalPrice }}</p>
          </div>
        </div>

        <!-- split line: -->
        <div v-if="item.date == this.currentDate" class="border-t border-black mx-6"></div>
        
      </template>
      
  
    </section>
  
  </main>

</template>

<!-- ------------------------------------- -->

<style scoped>
</style>
