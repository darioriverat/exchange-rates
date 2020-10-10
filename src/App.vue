<template>
  <div id="app">
    My App
    <ul class="nav nav-tabs">
      <router-link tag="li" class="nav-item" to="/"
        ><a class="nav-link">Home</a></router-link
      >
      <router-link tag="li" class="nav-item" to="/about"
        ><a class="nav-link">About</a></router-link
      >
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
body {
  margin: 10px;
}
</style>
