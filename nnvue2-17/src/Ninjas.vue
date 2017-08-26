<template>
    <ul>
      <!-- Vetur complains about about the v-for:  [vue-language-server] Elements in iteration expect to have 'v-bind:key' directives. -->
      <li v-for="ninja in ninjas">{{ ninja }}</li>
    </ul>
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

<style>

</style>