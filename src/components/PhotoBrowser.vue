<template>
  <div>
    <!-- Photos Section -->
    <section id="browse">
      <div class="browse-container" id="app">
        <div class="filter-container-shadow">
          <div class="filter-container">
            <img class="filter-image" v-bind:src="filterIconPath" alt="filter image" />
            <p class="sort-title">Sort by :</p>
            <div class="sort-links">
              <a
                @click="sortByLatestFirst"
                v-bind:class="sort === 'latestFirst' ? 'active': ''"
                class="sort-link nav-link"
              >Latest First</a>
              <a
                @click="sortByOldestFirst"
                v-bind:class="sort === 'oldestFirst' ? 'active': ''"
                class="sort-link nav-link"
              >Oldest First</a>
              <!-- <a
                @click="sortByPopularity"
                v-bind:class="sort === 'popularity' ? 'active': ''"
                class="sort-link nav-link"
              >Popularity</a> -->
            </div>
          </div>
        </div>
        <div class="shadow"></div>
        <div class="images-container">
          <div class="image-photo" v-for="image in images" :key="image.path">
            <div class="img-pop-card">
              <button>
                <router-link
                  :to="{ path: '/View/', query: { link: image.original }}"
                  v-bind:image="image"
                  class="nav-link"
                >View</router-link>
              </button>
            </div>
            <img v-bind:src="image.path" v-bind:alt="image.title" class />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterIconPath: "./assets/icons/filter.svg",
      sort: ""
    };
  },
  props: {
    images: Array
  },
  methods: {
    sortByLatestFirst: function() {
      if (this.sort !== "latestFirst") {
        this.images.sort(function(a, b) {
          return new Date(b.date) - new Date(a.date);
        });
      }
      this.sort = "latestFirst";
    },

    sortByOldestFirst: function() {
      if (this.sort !== "oldestFirst") {
        this.images.sort(function(a, b) {
          return new Date(a.date) - new Date(b.date);
        });
      }
      this.sort = "oldestFirst";
    },
    sortByPopularity: function() {
      if (this.sort !== "popularity") {
        this.images.sort(function(a, b) {
          return a.hits < b.hits ? 1 : -1;
        });
      }
      this.sort = "popularity";
    },
    generatePath: function(image) {
      return "/View/" + image.original;
    }
  },

  created() {
    this.sortByLatestFirst();
    this.sort = "latestFirst";
  }
};
</script>

<style >
#browse {
  min-height: 40vh;
  /* padding-bottom: 15px; */
}
.filter-container-shadow {
  width: 100%;
  background: white;
}
.filter-container {
  padding: 10px 0px 10px 0px;
  display: flex;
  align-items: center;
  width: 80%;
  min-height: 8vh;
  margin: auto;
  background: white;
}
.filter-container .filter-image {
  margin-right: 10px;
  width: 30px;
}
.sort-links {
  display: flex;
  justify-content: flex-start;
  /* align-c: center;
  text-align: center; */
  margin: auto;
  margin-left: 5px;
}
.sort-link {
  padding: 5px;
  cursor: pointer;
}
.bg {
  background: black;
}
a.active {
  color: black;
}
.shadow {
  display: block;
  height: 1px;
  /* width: 80%; */
  margin: auto;
  position: relative;
  z-index: -20;
  box-shadow: 0px 0px 10px 1px rgb(20, 20, 20);
}
.shadow-bottom {
  width: 0px;
  background: transparent;
  box-shadow: 0px -2px 10px 1px rgb(20, 20, 20);
}

.images-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 80%;
  height: 50vh;
  overflow-x: hidden;
  overflow-y: scroll;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 15px;
  justify-content: space-around;
  padding: 5px;
  padding-bottom: 5px;
  align-content: space-between;
  align-items: flex-start;
}
.images-container::-webkit-scrollbar {
  width: 7px;
}

.image-photo {
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 280px;
  height: 200px;
  overflow: hidden;
  box-shadow: 0px 2px 12px 0px rgba(37, 37, 37, 0.733);
  position: relative;
  top: 0px;
  left: 0px;
  border-radius: 3px;
  animation: fadein 1s ease-in forwards;
}
.image-photo img {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0px;
  left: 0px;
  z-index: -1;
}
.image-photo:hover img {
  animation: zoomin 0.4s ease-out forwards;
}
@keyframes zoomin {
  to {
    transform: scale(1.1);
  }
}

/* image pop up */
.img-pop-card {
  width: 100%;
  height: 100%;
  opacity: 0;
  display: none;
}
.image-photo:hover .img-pop-card {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  animation: fadein 0.7s ease forwards;
  background: radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.507));
}
@keyframes fadein {
  to {
    opacity: 1;
  }
}
@keyframes fadeinbutton {
  to {
    background: rgba(252, 49, 49, 0.938);
    color: rgb(240, 240, 240);
  }
}
.images-container a {
  color: rgba(240, 240, 240, 0.603);
}
.images-container a:hover {
  color: rgba(240, 240, 240, 0.603);
}
.images-container button {
  font-family: "Poppins", sans-serif;
  background: rgba(214, 81, 81, 0.808);
  color: rgba(240, 240, 240, 0.603);
  border: none;
  height: 17%;
  width: 25%;
  border-radius: 1px;
  font-weight: lighter;
  font-size: 13px;
  box-shadow: 0px 0px 12px rgba(65, 65, 65, 0.829);
}
@keyframes buttonpress {
  to {
    background: rgba(255, 255, 255, 0.63);
    border: 1px solid rgba(29, 29, 29, 0.5);
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.836);
    color: rgb(0, 0, 0);
  }
}
.images-container button:focus {
  /* outline-offset: 1px;
  outline-width: 2px;
  outline-color: rgba(204, 99, 99, 0.486); */
  outline-style: none;

  animation: buttonpress 0.3s ease forwards;
}
.images-container button:hover {
  animation: fadeinbutton 0.5s ease forwards;
  animation-iteration-count: 1;
  cursor: pointer;
}

@media screen and (max-width: 1280px) {
  .images-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 1120px) {
  .images-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 1028px) {
  .filter-container {
    font-size: 15px;
  }
  .images-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 760px) {
  .images-container {
    grid-template-columns: repeat(1, 1fr);
  }
  .filter-image {
    width: 20px !important;
  }
}
</style>