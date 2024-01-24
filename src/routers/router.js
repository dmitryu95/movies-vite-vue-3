import { createRouter, createWebHistory } from "vue-router";
import AuthPage from '../components/AuthPage.vue'
import MovieListPage from '../components/MovieListPage.vue'
import MovieCard from '../components/MovieCard.vue'

const routes = [
    {
        path: '/',
        component: AuthPage,
        name: 'AuthPage',
        props: true,
    },
    {
        path: '/movies',
        component: MovieListPage,
        name: 'MoviesList',
        props: true
    },
    {
        path: '/movie/:id',
        component: MovieCard,
        name: 'card',
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router