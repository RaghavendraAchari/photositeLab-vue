<template>
  <div class="view">
    <h2 class="title">Original Image :</h2>
    <img class="image-view" :src="$route.query.link" @load="imageLoaded" />
    <p v-if="!loaded" class="loading">Loading...</p>
    <div class="download-section">
      <a :href="$route.query.link" target="_blank" class="nav-link">
        <button class="nav-link">Download</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded: false
    };
  },
  props: {
    image: Object
  },
  methods: {
    imageLoaded: function() {
      this.loaded = true;
    }
  }
};
</script>

<style>
.loading {
  padding: 10px;
  text-align: center;
}
.view {
  background: linear-gradient(rgb(180, 180, 180), rgb(241, 241, 241));
  height: 100vh;
}
.title {
  padding: 10px;
  text-align: center;
}
.image-view {
  padding: 10px;
  width: 100%;
}
.download-section {
  padding: 10px;
  display: flex;
  justify-content: center;
}
.download-section button {
  background: red;
  width: calc(100% + 10px);
  height: 5vh;
  border-radius: 5px;
  outline: none;
  box-shadow: none;
  color: rgb(196, 196, 196);
  border: 1px solid red;
}
.download-section a {
  align-items: center;
  width: fit-content;
}
.download-section button:hover {
  color: white;
  cursor: pointer;
  font-weight: lighter;
}

@media screen and (max-width: 1280px) {
}

@media screen and (max-width: 1120px) {
}

@media screen and (max-width: 1028px) {
  .title {
    font-size: 20px;
  }
}

@media screen and (max-width: 760px) {
  .title {
    font-size: 15px;
  }
}
</style>