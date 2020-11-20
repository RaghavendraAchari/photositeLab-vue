<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  scroll-behavior: smooth;
}
button {
  font-family: "Poppins", sans-serif;
}
input {
  font-family: "Poppins", sans-serif;
}
textarea {
  font-family: "Poppins", sans-serif;
}
</style>
