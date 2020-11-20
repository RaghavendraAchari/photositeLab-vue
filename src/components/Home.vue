<template>
  <div>
    <NavBar />
    <Jumbotron v-if="introImages.length > 0" v-bind:intro-images="introImages" />
    <PhotoBrowser v-if="introImages.length > 0" v-bind:images="images" />
    <CommentWindow />
    <Footer v-bind:social-links="socialLinks" />
  </div>
</template>

<script>
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import PhotoBrowser from "./PhotoBrowser";
import CommentWindow from "./CommentWindow";
import Footer from "./Footer";

import ImageService from "../imageService";
import SocialService from "../socialLinksServices";

export default {
  data() {
    return {
      images: [],
      introImages: [],
      socialLinks: [],
      sortProperty: "latestFirst"
    };
  },
  components: {
    NavBar,
    Jumbotron,
    PhotoBrowser,
    CommentWindow,
    Footer
  },
  methods: {},
  async created() {
    try {
      this.images = await ImageService.getImages();
      this.introImages = this.images.slice(0, 3);
      this.socialLinks = await SocialService.getSocialLinks();
    } catch (error) {
      this.error = error;
    }
  }
};
</script>

<style >
/* scroll bar */
/* width */
::-webkit-scrollbar {
  width: 0px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 6px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
::-webkit-scrollbar-corner {
  background: black;
}
</style>