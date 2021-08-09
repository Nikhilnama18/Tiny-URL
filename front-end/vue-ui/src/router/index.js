import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../components/Home.vue'
import FetchURL from '../components/FetchURL.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}]
const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})
export default router;