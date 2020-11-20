<template>
  <!-- header -->
  <div>
    <div class="header-container">
      <header>
        <BrandIconContainer />
        <NavLinks />
        <ContactInfo />
      </header>
    </div>
  </div>
</template>

<script>
import BrandIconContainer from "./BrandIconContainer";
import NavLinks from "./NavLinks";
import ContactInfo from "./ContactInfo";

export default {
  name: "NavBar",
  data() {
    return {
      phoneIconPath: "./assets/icons/phone-bubble-64.png"
    };
  },
  methods: {},
  components: {
    BrandIconContainer,
    NavLinks,
    ContactInfo
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
  flex: 1;
  justify-content: space-between;
  width: 80%;
  min-height: 8vh;
  margin: auto;
  align-items: center;
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
    justify-content: space-around;
    width: calc(100% - 20px);
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