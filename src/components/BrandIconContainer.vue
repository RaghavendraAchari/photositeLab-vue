<template>
  <div>
    <div class="brand-container">
      <img
        v-bind:src="brandIconPath"
        alt="PhotoSite Icon"
        height="50px"
        id="brand-icon"
        v-on:mouseover="mouseOver"
        v-on:mouseleave="mouseLeave"
      />
      <a href="./" class="brand-name">PhotoSite</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrandIconContainer",
  data() {
    return {
      brandIconPath: "./assets/icons/camera_icon_100.png"
    };
  },
  methods: {
    mouseOver: function() {
      this.brandIconPath = "./assets/icons/camera_icon_filled_100.png";
    },
    mouseLeave: function() {
      this.brandIconPath = "./assets/icons/camera_icon_100.png";
    }
  }
};
</script>

<style >
.brand-container {
  display: flex;
  align-items: center;
  justify-content: left;
  /* flex: 1; */
}

.brand-name {
  padding: 0px 0px 0px 5px;
  font-weight: 700;
  font-size: 20px;
  text-decoration: none;
  color: black;
}
</style>