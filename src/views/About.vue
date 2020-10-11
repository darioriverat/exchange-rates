<template>
  <div>
    <h1>About</h1>
    <button class="btn btn-primary" @click="backHome">Back to home</button>
  </div>
</template>

<script>
export default {
  methods: {
    backHome() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>
