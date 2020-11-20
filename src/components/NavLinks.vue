<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: "NavLinks",
  data() {
    return {};
  }
};
</script>

<style>
nav {
  /* flex: 2; */
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
</style>