<script setup>
import { Icon } from "@iconify/vue";
import datas from "../data/datas.json";
import { ref, onMounted } from "vue";
import Footer from "../components/footer.vue";
import router from "../router";
import searchResults from "../components/searchResults.vue";

const backgroundImage = ref(
  "https://marketplace.canva.com/EAFVCFkAg3w/1/0/1131w/canva-red-and-black-horror-movie-poster-AOBSIAmLWOs.jpg"
);
const data = ref([]);

const apikey = "4eecf308";
const search = ref("");
const movies = ref([]);

const searchMovies = () => {
  if (search.value != "") {
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${apikey}&s=${search.value}`
    )
      .then((response) => response.json())
      .then((data) => {
        movies.value = data.Search;
        search.value = "";
        console.log(movies.value);
      });
  }

  router.push({ name: "searchResults", params: { search: search.value } });
};

// async function searchMovies() {
//     if (!query.value) {
//         return;
//     }

//     const apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=${apikey}&query=${query.value}`;
//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();

//         movies.value = data.results;

//     } catch {
//         console.error('error fatching data' , error)
//     }
// }
// onMounted(() => {
//     searchMovies();
// });
</script>

<template>
  <div
    class="w-full bg-cover h-full inset-4 bg-blue z-100 bg-lime-950 opacity-90"
    :style="`background-image: url(${backgroundImage})`"
  >
    <div class="w-[1440px] mx-auto z-10 pb-20">
      <img :src="data.img" alt="" />
      <header class="flex justify-between mt-5">
        <div>
          <img src="../logo/logo.jpg" alt="non" class="w-[170px] h-18 mt-0" />
        </div>
        <div class="w-2/5 flex justify-around">
          <RouterLink to="/" class="text-white">Home</RouterLink>
          <RouterLink to="/movie" class="text-white">Movies</RouterLink>
          <RouterLink to="/" class="text-white">Tv show</RouterLink>
          <RouterLink to="/" class="text-white">Top imdb</RouterLink>
        </div>
      </header>
      <div>
        <RouterLink to="/movie/tt0409591">
          <h1>SuperGIRL</h1>
        </RouterLink>
      </div>
      <div>
        <div class="flex w-full items-center justify-center mt-16 pt-10">
          <img src="../logo/logo.jpg" alt="" />
        </div>
        <div class="flex w-full justify-center">
          <h1 class="text-4xl mt-4 text-white my-5">HDToday</h1>
        </div>
        <form class="flex" @submit.prevent="searchMovies()">
          <input
            v-model="search"
            type="search"
            name=""
            id=""
            placeholder="Search"
            class="w-full h-12 rounded-l-md outline-none pl-3"
          />
          <button
            class="bg-[#4361ee] rounded-r-md w-12 h-12 items-center justify-center"
          >
            <Icon icon="ic:round-search" class="text-4xl text-white" />
          </button>
        </form>

        <div>
          <search-movie>
            <template v-for="movie in movies" v-slot="newq">
              <div>
                <img :src="movie.Poster" alt="" />
              </div>
              <p>
                {{ movie.Title }}
              </p>
            </template>
          </search-movie>
        </div>

        <div class="justify-center flex my-20">
          <button
            class="bg-[#4361ee] w-[280px] text-white flex text-xl h-16 items-center justify-center rounded-l-full pr-4 rounded-r-full border-blue-600 border-solid"
          >
            View Full Site <Icon icon="ei:arrow-right" class="mt-1" />
          </button>
        </div>
        <div>
          <h1 class="text-white text-center">
            HDToday is the best site to watch movies and TV series online for
            free. These are the things that make HDToday the best site so far:
          </h1>
        </div>
        <div>
          <p class="text-white text-center">- No Ads</p>
          <p class="text-white text-center">- No account required to watch</p>
          <p class="text-white text-center">- One click streaming</p>
          <p class="text-white text-center">
            - Huge library with over 400,000 videos
          </p>
          <p class="text-white text-center">
            So if you are looking for a safe site to watch movies online, let s
            give HDToday a try. And if you like our service, please bookmark the
            site and share it to your friends.
          </p>
          <p class="text-white text-center">Thank you</p>
        </div>
        <div class="flex justify-center my-20 mb-20">
          <div>
            <button
              class="w-[280px] h-16 bg-[#4361ee] flex items-center justify-center rounded-l-full rounded-r-full mr-5 text-white text-xxl"
            >
              Go to HDToday <Icon icon="ei:arrow-right" class="mt-1 text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>
