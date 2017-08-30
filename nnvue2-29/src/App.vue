<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from "./components/addBlog.vue"
import showBlogs from "./components/showBlogs.vue"
import listBlogs from "./components/listBlogs.vue"
import appHeader from "./components/appHeader.vue"

export default {
  components: {
    "add-blog": addBlog,
    "show-blogs": showBlogs,
    "list-blogs": listBlogs,
    "app-header": appHeader
  },
  data () {
    return {

    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
