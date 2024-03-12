<template>
    <footer class="flex flex-col w-[1440px] mx-auto justify-center">
        <div class="flex justify-center my-10">
            <RouterLink to="/" class="mx-5 text-white text-lg">Android App</RouterLink>
            <RouterLink to="/" class="mx-5 text-white text-lg">Terms Of Service</RouterLink>
            <RouterLink to="/" class="mx-5 text-white text-lg">Contact</RouterLink>
            <RouterLink to="/" class="mx-5 text-white text-lg">Sitemap</RouterLink>
            <RouterLink to="/" class="mx-5 text-white text-lg">9anime</RouterLink>
            <RouterLink to="/" class="mx-5 text-white text-lg">free movies app</RouterLink>
        </div>
        <div class="justify-center text-center flex items-center pb-10">
            <h1 class="text-white">HDToday is a Free Movies streaming site with zero ads. We let you watch movies online 
                without having to register or paying, with over 10000 movies and TV-Series. You can also
                 Download full movies from HDToday and watch it later if you want.</h1>
        </div>
        <div class="justify-center flex pb-20">
           <span class="text-white">&copy;HDtoday</span> 
        </div>
    </footer>
</template>

<script setup>
    import {RouterLink} from "vue-router"
</script>