<template>
    <div class="section">
        <Nav />
        <Article />
    </div>
</template>

<script>
import Nav from './Nav.vue'
import Article from './Article.vue'

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