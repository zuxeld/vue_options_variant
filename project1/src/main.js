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
import NotFoundPage from './components/NotFoundPage.vue';

import { createStore } from 'vuex'


const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    // mode: 'history', //чтобы убрать # из url
    history: createWebHashHistory(),
    routes: [
        { path: '/:catchAll(.*)', name: 'NotFound', component: NotFoundPage, },
        { path: '/', name: DevNavPage, component: DevNavPage },

        { path: '/customer/list-of-orders', name: Customer__ListOfOrders, component: Customer__ListOfOrders },
        { path: '/customer/order', name: Customer__Order, component: Customer__Order },

        { path: '/purchaiser/list-of-orders', name: Purchaiser__ListOfOrders, component: Purchaiser__ListOfOrders },
        { path: '/purchaiser/order', name: Purchaiser__Order, component: Purchaiser__Order },
        { path: '/purchaiser/buing-screen', name: Purchaiser__BuingScreen, component: Purchaiser__BuingScreen },
    ],
})

// Create a new store instance.
const store = createStore({
    state () {
        return {
            listOfItems: [
                {
                    id: 3,
                    date: '24.02.2023',
                    purchaiserName: 'Алексей',
                    theoreticalPrice: 4500
                },
                {
                    id: 2,
                    date: '23.02.2023',
                    purchaiserName: 'Алексей',
                    theoreticalPrice: 5950
                },
                {
                    id: 1,
                    date: '22.02.2023',
                    purchaiserName: 'Алексей',
                    theoreticalPrice: 5200
                },
                {
                    id: 0,
                    date: '21.02.2023',
                    purchaiserName: 'Алексей',
                    theoreticalPrice: 57400
                },
            ],
            currentDate: '24.02.2023',
            changingOrderId: 'new',
        }
    },
    mutations: {
        setChangingOrderId (state, id) {
            state.changingOrderId = id;
        }
    }
})

createApp(App)
.use(router)
.use(store)
.mount('#app')
