<template>
    <div class="section">
        <Nav />
        <Article />
    </div>
</template>

<script>
import Nav from './LeftMenu.vue'
import Article from './Content.vue'

export default {
  name: 'Section',
  components: {
    Nav, Article,
  }
}
</script>


<style scoped>
    .section {
        display: -webkit-flex;
        display: flex;
        max-height: 85%;
        overflow-y: scroll;
    }
</style>