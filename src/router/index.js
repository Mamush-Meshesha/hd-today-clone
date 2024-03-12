import { createRouter, createWebHistory } from "vue-router"
import home from "../views/home.vue"
import movies from "../views/movies.vue"
import searchResults from  "../components/searchResults.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: home
        },
        {
            path: '/movie/:id',
            name: "movies",
            component: movies
        },
        {
            path: "/movie",
            name: "movie",
            component: movies
        },
        {
            path: "/searchResults/:search",
            name: "searchResults",
            component: searchResults
        }

    ]
})

export default router