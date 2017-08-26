<template>
  <div>
    <h1>List of ninjas</h1>
    <ul>
      <!-- Vetur complains about about the v-for:  [vue-language-server] Elements in iteration expect to have 'v-bind:key' directives. -->
      <li v-for="ninja in ninjas">{{ ninja }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ninjas: ['Yoshi', 'Mario', 'Ryu', 'John']
    }
  }
}
</script>

<style scoped>
h1 {
  color:green;
}
</style>