<template>
  <div class="home">
    <img alt="Vue logo" src='../assets/logo.png' />
        <h1>Welcome to this tutorial</h1>
        <h2 ref="subtitle">{{ fruit }}</h2>
        <button @click="handleClick">Click me</button>
        <Card />
        <Card />
        <Card />
  </div>
</template>


<script>
import Card from '../components/Card.vue';
export default {
  name: "Article",
  components: {
    Card,
  },
  data() {
    return {
      fruit: "Apple",
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.subtitle);
      this.$refs.subtitle.classList.add("custom-class");
    },
  },
};
</script>