import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import App from './App.vue';
import DevNavPage from './components/DevNavPage.vue'
import Customer__ListOfOrders from './components/customer/ListOfOrders.vue';
import Customer__Order from './components/customer/Order.vue';
import Purchaiser__ListOfOrders from './components/purchaiser/ListOfOrders.vue';
import Purchaiser__Order from './components/purchaiser/Order.vue';
import Purchaiser__BuingScreen from './components/purchaiser/BuingScreen.vue';

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: DevNavPage, component: DevNavPage },
        { path: '/customer/list-of-orders', name: Customer__ListOfOrders, component: Customer__ListOfOrders },
        { path: '/customer/order', name: Customer__Order, component: Customer__Order },
        { path: '/purchaiser/list-of-orders', name: Purchaiser__ListOfOrders, component: Purchaiser__ListOfOrders },
        { path: '/purchaiser/order', name: Purchaiser__Order, component: Purchaiser__Order },
        { path: '/purchaiser/buing-screen', name: Purchaiser__BuingScreen, component: Purchaiser__BuingScreen },
    ],
})

createApp(App)
.use(router)
.mount('#app')
