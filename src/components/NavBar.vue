<template>
  <!-- header -->
  <div class="header-container">
    <header>
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
      <nav>
        <ul class="nav-links">
          <li>
            <a href="#home" class="nav-link">Home</a>
          </li>
          <li>
            <a href="#browse" class="nav-link">Browse</a>
          </li>
          <li>
            <a href="#categories" class="nav-link">Categories</a>
          </li>
        </ul>
      </nav>
      <div class="contact-info">
        <a href="#contact" class="nav-link contact-me">Contact Me</a>
        <a href="#contact">
          <img v-bind:src="phoneIconPath" alt="contact me" height="30px" />
        </a>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      brandIconPath: "./assets/icons/camera_icon_100.png",
      phoneIconPath: "./assets/icons/phone-bubble-64.png"
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

<style>
/* header */
.header-container {
  box-shadow: 0px 0px 12px rgb(151, 151, 151);
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: +4;
  background: white;
}
header {
  display: flex;
  width: 80%;
  min-height: 8vh;
  margin: auto;
  align-items: center;
}

.brand-container {
  display: flex;
  align-items: center;
  flex: 1;
}

.brand-name {
  padding: 0px 0px 0px 5px;
  font-weight: 700;
  font-size: 20px;
  text-decoration: none;
  color: black;
}

nav {
  flex: 2;
}

nav ul {
  display: flex;
  list-style: none;
}
.nav-link {
  padding: 0px 10px 0px 10px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.747);
}

.nav-link:hover {
  color: rgb(0, 0, 0);
}

.nav-link.contact-me {
  padding: 0px 10px 0px 10px;
}

.contact-info {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
}

/* responsive changes */
@media screen and (max-width: 1028px) {
  .brand-name {
    padding: 0px 5px 0px 5px;
    font-weight: 700;
    font-size: 17px;
  }
  .nav-link.contact-me {
    display: none;
  }
  .nav-link {
    padding: 0px 5px 0px 5px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.747);
    font-size: 15px;
  }
}

@media screen and (max-width: 470px) {
  .brand-name {
    font-weight: 500;
    font-size: 15px;
  }
  header {
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
  }
  .contact-info {
    justify-content: center;
  }
  .nav-link {
    padding: 0px 5px 0px 5px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.747);
    font-size: 12px;
  }
  .sort-title {
    font-size: 13px;
  }
}
</style>