import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../components/Home.vue'
import FetchURL from '../components/FetchURL.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: "/:catchAll(.*)",
        name: "FetchURL",
        component: FetchURL,
        meta: {
            requiresAuth: false
        }
    }
]
const router = createRouter({
    history: createWebHashHistory('configure-admin'),
    routes: routes
})
export default router;