<script setup>
import Top from "../components/Top.vue"
import { Icon } from '@iconify/vue';
import { ref } from "vue"
import Footer from "../components/fotter.vue"

const apikey = "4eecf308"

const search = ref('')
const movies = ref([])
const showmodal = ref(false)
const backgroundImage = ref('https://e1.pxfuel.com/desktop-wallpaper/852/887/desktop-wallpaper-aladdin-movie-poster-in-2160x3840-resolution-live-action-films-thumbnail.jpg')

const searchMovies = () => {
    if (search.value != "") {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${apikey}&s=${search.value}`)
            .then(response => response.json())
            .then(data => {
                movies.value = data.Search;
                search.value = "";
                console.log(movies.value)
            })
    }
}
</script>
<template>
    <div class="w-screen mx-auto h-screen">
        <div>
            <div v-show="showmodal" class="w-screen h-screen justify-center items-center flex absolute bg-gray-900 opacity-90 mt-11">
                <div class="border-2 border-solid bg-white w-[600px] h-[300px] ">
                    <div class="mx-9">
                        <div class="flex flex-col ">
                            <div class="absolute w-[60px] h-[60px] ">
                                <Icon icon="bi:x" class="text-3xl w-[40px] h-[40px] ml-[538px] mt-[-24px] bg-white rounded-full cursor-pointer" @click="showmodal=false"/>
                            </div>
                            <div class="justify-center flex">
                                <h1>Wellcome back</h1>
                            </div>
                            <div class="justify-center flex">
                                <Icon icon="icon-park:movie" class="text-4xl"/>
                            </div>
                        </div>
                        <div >
                            <div class="flex flex-col my-5">
                                <label for="email">Email Address</label>
                                <input type="email" name="" id="" placeholder="name@email.com" class="border-2 border-solid outline-none h-10">
                            </div>
                            <div class="flex flex-col my-5">
                                <label for="password">Password</label>
                                <input type="password" name="" id="" placeholder="Password" class="border-2 border-solid outline-none h-10">
                            </div>
                            <div class="flex">
                                <input type="checkbox" name="remember" id="">
                                <div class="flex justify-between w-full">
                                    <h1>Remember me</h1>
                                    <router-link to="/" class="text-blue">Forgot password?</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="w-full">
                            <button>Login</button>
                        </div>
                    </div>
                </div>
            </div>
            <header>
        <div class="overflow-x-hidden">
            <div :style="`background-image: url(${backgroundImage})`" class="h-[260px] bg-cover bg-image bg-no-repeat w-screen mb-10">
            <header>
                <div class="flex w-full mx-auto z-50 justify-evenly ml-36 pt-10">
                    <div class="w-1/5">
                        <img src="src/logo/logo1.jpg" alt="" class="w-[120px]">
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
                        <button class="border-2 w-[90px] h-8 bg-white rounded-sm" @click="showmodal=true">
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
 
            </header>
            <div class="grid grid-cols-5 gap-4 mt-14">
                <div v-for="movie in movies" :key="movie.imdbID">
                    <img :src="movie.Poster" alt="" class="w-[800px] h-[400px]">
                        {{ movie.Title }}
                </div>
            </div>
        
            <div class="flex justify-center top-0 w-screen absolute mt-56">
                <div>
                </div>
                <div>
                    <Icon icon="ic:sharp-search" class="text-3xl absolute ml-8 mt-6" />
                   <input v-model="search" type="search" name="" id="" placeholder="Search" class="w-[900px] h-20 rounded-l-full outline-none border-2 rounded-r-full pl-20">
                </div>
                <div class="bg-[#4361ee] ml-4 w-[80px] rounded-full">
                    <Icon icon="ei:arrow-right" class="mt-6 ml-6 text-3xl text-white"  @click="searchMovies"/>
                </div>
            </div>
            <Footer />
        </div>
    </div>
</template>

