<template>
    <div class="overflow-x-hidden">
        <div :style="`background-image: url(${backgroundImage})`" class="h-[260px] bg-cover bg-image bg-no-repeat w-screen mb-10">
        <header>
            <div class="flex w-full mx-auto z-50 justify-evenly ml-36 pt-10">
                <div class="w-1/5">
                    <img src="./logo/logo.jpg" alt="" class="w-[120px]">
                </div>
                <div class="w-3/5 ml-32">
                    <RouterLink to="/" class="mr-5 text-white">HOME </RouterLink>
                    <RouterLink to="/" class="mr-5 text-white">GENRE</RouterLink>
                    <RouterLink to="/" class="mr-5 text-white">COUNTRY</RouterLink>
                    <RouterLink to="/" class="mr-5 text-white">MOVIES</RouterLink>
                    <RouterLink to="/" class="mr-5 text-white">TV SHOWS</RouterLink>
                    <RouterLink to="/" class="mr-5 text-white">TOP IMDB</RouterLink>
                    <RouterLink to="/" class="mr-5 text-white">ANDROID APP</RouterLink>
                </div>
                
                <div class="w-1/5 float-right" >
                    <button class="border-2 w-[90px] h-8 bg-white rounded-sm">
                        LOGIN
                    </button>
                </div>
            </div>
            <div class="flex flex-col mt-20">
                <div class="flex justify-center">
                    <h1 class="text-white text-3xl pb-10">Find Movies, TV shows and more</h1>
                </div>
            </div>
        </header>
        </div>
        
    </div>
</template>
<script setup>
import { ref } from "vue"
const showmodal = ref(false)

    const backgroundImage = ref('https://e1.pxfuel.com/desktop-wallpaper/852/887/desktop-wallpaper-aladdin-movie-poster-in-2160x3840-resolution-live-action-films-thumbnail.jpg')
</script>
