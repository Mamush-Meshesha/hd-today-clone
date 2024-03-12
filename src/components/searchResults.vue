<script setup>
import Top from "./Top.vue";
import { Icon } from "@iconify/vue";
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import countryGenre from "../countgen/countryGenre.json";
const search = ref("");

// const movies = ref([])
const route = useRoute();
const apikey = "4eecf308";

const searchResults = ref([]);

// onMounted(async () => {
//   const response = await fetchMovies(this.$route.params.search);
//   searchResults.value = response.data;
// });

const fetchSearchResults = async () => {
  const response = await fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=${apikey}&search=${route.params.search}`
  );
  console.log(response);
  let data = await response.json();
  console.log(data, "sssss");
  searchResults.value = data;
};
onMounted(async () => {
  await fetchSearchResults();
});

const cogen = ref([]);
const genre = ref([]);
onMounted(() => {
  genre.value = countryGenre.slice(37, 55);
});

onMounted(() => {
  cogen.value = countryGenre.slice(1, 37);
});
const isDropDownConVisible = ref(false);
const isDropDownGenVisible = ref(false);

const showCountries = () => {
  isDropDownConVisible.value = true;
};
const showGenre = () => {
  isDropDownGenVisible.value = true;
};
const hideDropDownCon = () => {
  isDropDownConVisible.value = false;
};
const hideDropDownGen = () => {
  isDropDownGenVisible.value = false;
};
// onMounted(async () => {
//     try {
//         const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${apikey}&s=${search.value}`)
//         const data = await response.json();
//         search.value = data.Search
//         console.log(search.value)
//     } catch (error) {
//         console.error('unable to fetch' , error)
//     }
// })
</script>
<template>
  <div class="overflow-x-hidden">
    <div class="bg-cover bg-[#144184] w-screen mb-10">
      <header>
        <div class="flex w-full mx-auto z-50 justify-evenly ml-36 pt-10">
          <div class="w-1/5">
            <img
              src="/src/logo/logo1.jpg"
              alt=""
              class="w-[120px] bg-transparent"
            />
          </div>
          <div class="w-3/5 ml-32 flex">
            <RouterLink to="/" class="mr-5 text-white">HOME </RouterLink>
            <ul class="flex">
              <RouterLink
                to="/"
                class="mr-5 text-white"
                @mouseover="showGenre"
                @mouseleave="hideDropDownGen"
                >GENRE</RouterLink
              >
              <RouterLink
                to="/"
                class="mr-5 text-white"
                @mouseover="showCountries"
                @mouseleave="hideDropDownCon"
                >COUNTRY</RouterLink
              >
            </ul>
            <RouterLink to="/" class="mr-5 text-white">MOVIES</RouterLink>
            <RouterLink to="/" class="mr-5 text-white">TV SHOWS</RouterLink>
            <RouterLink to="/" class="mr-5 text-white">TOP IMDB</RouterLink>
            <RouterLink to="/" class="mr-5 text-white">ANDROID APP</RouterLink>
          </div>
          <div
            class="grid grid-cols-4 gap-4 grid-flow-dense absolute mt-14 h-[400px] w-[600px] border-2 border-solid ml-[-200px]"
            v-show="isDropDownConVisible"
          >
            <div v-for="country in cogen" :key="country.id" class="mx-6">
              {{ country.name }}
            </div>
          </div>
          <div
            class="grid grid-cols-3 gap-4 grid-flow-dense absolute mt-14 h-[400px] w-[600px] border-2 border-solid ml-[-500px]"
            v-show="isDropDownGenVisible"
          >
            <div v-for="gen in genre" :key="gen.id">
              {{ gen.name }}
            </div>
          </div>
          <div class="mb-5">
            <Icon icon="ic:sharp-search" class="text-3xl absolute mt-2 ml-1" />
            <input
              v-model="search"
              type="search"
              name=""
              id=""
              placeholder="Search"
              class="w-[300px] h-10 rounded-l-full outline-none border-2 rounded-r-full pl-10 mr-10"
            />
          </div>
          <div class="w-1/5 float-right">
            <button class="border-2 w-[90px] h-8 bg-white rounded-sm">
              LOGIN
            </button>
          </div>
        </div>
      </header>
    </div>
    <div>
      <div>
        <h1>search for '{{ $route.params.search }}'</h1>
      </div>
      <!-- <div v-for="rusalt in searchResults" :key="rusalt.imdbID">
                <img :src="rusalt.Poster" alt="">
                {{ rusalt.Title }}
                {{  }}
            </div> -->
      <div>
        <template>
          <slot></slot>
        </template>
      </div>
    </div>
    <footer class="mt-[500px] w-full bg-black h-40 mx-auto fixed bottom-0">
      <div class="grid grid-cols-3 mx-20 pt-5">
        <div class="w-1/5">
          <img src="src/logo/logo1.jpg" alt="" class="w-36 mb-5" />
          <span class="text-white">&copy;HDToday</span>
        </div>
        <div class="w-4/5">
          <p class="text-white mb-5 text-xs">
            HDToday is a Free Movies streaming site with zero ads. We let you
            watch movies online without having to register or paying, with over
            10000 movies and TV-Series. You can also Download full movies from
            HDToday and watch it later if you want
          </p>
          <RouterLink to="/" class="text-white">Android App</RouterLink> -
          <RouterLink to="/" class="text-white">Terms of service</RouterLink>-
          <RouterLink to="/" class="text-white">contact</RouterLink>-
          <RouterLink to="/" class="text-white">sitmap</RouterLink>-
          <RouterLink to="/" class="text-white">FAQ</RouterLink>
        </div>
        <div class="w-3/5">
          <p class="text-white border-2">
            HDToday does not store any files on our server, we only linked to
            the media which is hosted on 3rd party services.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
