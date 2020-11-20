<template>
  <div>
    <div class="contact-info">
      <a href="#contact" class="nav-link contact-me">Contact Me</a>
      <a href="#contact">
        <img v-bind:src="phoneIconPath" alt="contact me" height="30px" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactInfo",
  data() {
    return {
      phoneIconPath: "./assets/icons/phone-bubble-64.png"
    };
  }
};
</script>

<style >
.nav-link.contact-me {
  padding: 0px 10px 0px 10px;
}

.contact-info {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* flex: 1; */
}
</style>