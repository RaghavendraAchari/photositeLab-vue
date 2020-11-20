<template>
  <div>
    <!-- Footer Section -->
    <footer id="contact">
      <div class="footer-container">
        <div class="footer-left">
          <h3 class="footer-main-text">PhotoSite</h3>
          <p class="dev-intro">A personal site of Raghavendra Achari</p>
          <p class="dev-intro">
            Address :
            <br />1181, Nehru Nagar, Kumta - 581343
          </p>
          <p class="dev-intro">
            <a class="phone" href="tel:+919731453933">+91 97314 53933</a>
          </p>
        </div>
        <div class="footer-right">
          <nav class="social-links">
            <ul class="nav-links">
              <li class="nav-link">
                <a href="mailto:raghav.achari.l@gmail.com" title="Email">
                  <img v-bind:src="mailImagePath" alt="email" width="50px" class="email-icon" />
                </a>
              </li>
              <li v-for="socialLink in socialLinks" :key="socialLink.title" class="nav-link">
                <a target="_blank" v-bind:href="socialLink.link" v-bind:title="socialLink.title">
                  <img
                    v-bind:src="socialLink.path"
                    v-bind:alt="socialLink.title"
                    width="50px"
                    v-bind:class="socialLink.class"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="copyright">
        <p class="copy-text">
          <strong>Site is still under development</strong>
          <br />developed by
          Raghavendra Achari - copyright &copy; 2020
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mailImagePath: "./assets/social_media_icons/email.svg"
    };
  },
  props: {
    socialLinks: Array
  }
};
</script>

<style>
/* footer */
footer {
  background: #a671b1;
  cursor: default;
}
.footer-container {
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  min-height: 40vh;
}
.footer-left {
  flex: 1;
  padding: 20px 0px 0px 0px;
  /* background: #342f35; */
}
.footer-main-text {
  font-size: 30px;
}
.dev-intro {
  margin-top: 10px;
  padding: 10px 0px 0px 0px;
}
.phone {
  text-decoration: none;
  color: black;
}
.footer-right {
  flex: 1;
}
.social-links {
  padding: 30px 0px 0px 0px;
  /* background: #503755; */
}
.social-links ul {
  justify-content: space-between;
}
/* .social-links ul li a img:hover {
  content: url("./assets/icons/camera_icon_100.png");
} */

/* hover effects */
/* .email-icon:hover {
  content: url("./assets/social_media_icons/email-filled.svg");
}
.instagram-icon:hover {
  content: url("./assets/social_media_icons/instagram-filled.svg");
}
.facebook-icon:hover {
  content: url("./assets/social_media_icons/facebook-filled.svg");
}
.github-icon:hover {
  content: url("./assets/social_media_icons/github-filled.svg");
}
.linkedin-icon:hover {
  content: url("./assets/social_media_icons/linkedin-filled.svg");
}
.twitter-icon:hover {
  content: url("./assets/social_media_icons/twitter-filled.svg");
} */

.copyright {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 7vh;
  color: rgba(255, 255, 255, 0.404);
  background: #503755;
  padding: 5px;
  text-align: center;
}

@media screen and (max-width: 1028px) {
  .footer-container {
    flex-direction: column;
    width: 100%;
  }
  .footer-left {
    justify-content: center;
    text-align: center;
  }
  .social-links {
    padding: 30px 0px 30px 0px;
    /* background: #503755; */
  }
  .social-links ul {
    justify-content: space-around;
  }
}
</style>