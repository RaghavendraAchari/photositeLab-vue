<template>
  <div>
    <!-- Main content -->
    <main id="home">
      <section>
        <div class="introduction">
          <div class="introduction-text">
            <h1 class="intro-main-title">Raghav's Gallery</h1>
            <p class="into-phara">
              A passionate photographer interested in capturing the moments of
              LIFE, NATURE and TIME
            </p>
          </div>
          <div class="introduction-images">
            <img
              v-for="(image, index) in introImages"
              :key="image.path"
              class="sample-image"
              v-bind:src="image.path"
              v-bind:alt="image.title"
              v-show="currentImage == index"
            />
            <div class="slides-icons">
              <img
                class="slides-icon"
                v-bind:src="currentSlideIcon==0? sildeIconPaths.filled :sildeIconPaths.outlined"
                alt
                width="20px"
              />
              <img
                class="slides-icon"
                v-bind:src="currentSlideIcon==1? sildeIconPaths.filled :sildeIconPaths.outlined"
                alt
                width="20px"
              />
              <img
                class="slides-icon"
                v-bind:src="currentSlideIcon==2? sildeIconPaths.filled :sildeIconPaths.outlined"
                alt
                width="20px"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Jumbotron",
  data() {
    return {
      currentImage: 0,
      currentSlideIcon: 0,
      currentImagePath: "",
      styleOfCurrentImage: "block",
      sildeIconPaths: {
        filled: "./assets/icons/circle-filled.svg",
        outlined: "./assets/icons/circle-outlined.svg"
      }
    };
  },
  props: {
    introImages: Array
  },
  methods: {
    changeImageBanner: function() {
      if (this.currentImage === 2) {
        this.currentImage = 0;
        this.currentSlideIcon = 0;
      } else {
        this.currentImage++;
        this.currentSlideIcon++;
      }
    }
  },
  mounted() {
    setInterval(this.changeImageBanner, 3000);
  }
};
</script>

<style >
/* main content */
main {
  margin-top: 8vh;
  background: rgba(216, 216, 216, 0.267);
}
.introduction {
  display: flex;
  min-height: 60vh;
  width: 80%;
  margin: auto;
  align-items: center;
}

.introduction-text {
  flex: 1;
  padding: 0px 40px 0px 0px;
}
.intro-main-title {
  background: rgb(97, 138, 138);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 600;
  font-size: 40px;
}
.into-phara {
  padding: 10px 10px 0px 0px;
  font-size: 25px;
  font-weight: lighter;
  line-height: 35px;
}

.introduction-images {
  flex: 1;
  display: grid;
  justify-content: center;
  margin: auto;
  align-self: center;
  overflow: hidden;
}
@keyframes popdown {
  to {
    box-shadow: 0px 0px 40px rgb(75, 75, 75);
  }
}
@keyframes slide {
  from {
    opacity: 0.5;
    left: 50px;
  }
  to {
    opacity: 1;
    left: 0px;
  }
}

.introduction-images .sample-image {
  position: relative;
  width: 450px;
  height: 300px;
  box-shadow: 0px 0px 10px rgb(73, 73, 73);
  animation: slide 0.7s ease forwards;
}
/* .introduction-images .sample-image:hover {
  animation: popdown 0.5s ease forwards;
} */
.slides-icons {
  padding: 10px;
  display: flex;
  justify-content: center;
  margin: auto;
}
.slides-icon {
  margin: 5px;
  padding: 5px;
  opacity: 0.6;
}
@media screen and (max-width: 1028px) {
  .introduction {
    flex-direction: column;
  }
  section {
    width: 100%;
  }
  .intro-main-title,
  .into-phara {
    padding: 10px;
    justify-content: center;
    text-align: center;
  }
  .introduction-text {
    padding: 10px;
  }
  .introduction-images {
    width: 100%;
    justify-content: center;
  }
  .introduction-images .sample-image {
    width: 100%;
  }

  @keyframes slide {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  .introduction-images .sample-image {
    animation: slide 0.7s ease forwards;
  }
}

@media screen and (max-width: 470px) {
  .intro-main-title {
    font-weight: 600;
    font-size: 30px;
  }
  .into-phara {
    font-size: 20px;
    line-height: 25px;
  }
  .introduction-images .sample-image {
    height: 200px;
  }
  main {
    width: 100%;
  }
}
</style>