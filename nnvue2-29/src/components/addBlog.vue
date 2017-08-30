<template>
  <div id="add-blog">
    <h2>Add New Blog Post</h2>
    <form v-if="!submitted">
        <label>Blog Title:</label>
        <input type="text" v-model.lazy="blog.title" required/>
        <label>Blog Content:</label>
        <textarea v-model.lazy="blog.content" required rows="15"></textarea>
        <div id="checkboxes">
            <label for="">Ninjas</label>
            <input type="checkbox" value="ninjas" v-model="blog.categories"/>
            <label for="">Wizards</label>
            <input type="checkbox" value="wizards" v-model="blog.categories"/>
            <label for="">Mario</label>
            <input type="checkbox" value="mario" v-model="blog.categories"/>
            <label for="">Cheese</label>
            <input type="checkbox" value="cheese" v-model="blog.categories"/>
        </div>
        <label>Author:</label>
        <select v-model="blog.author">
            <option v-for="author in authors">{{ author }}</option>
        </select>
        <div>
            <button v-on:click.prevent="post()">Add Blog</button>
        </div>
    </form>
    <div v-if="submitted">
        <h3>Thanks for adding your post!</h3>
    </div>
    <div id="preview">
        <h3>Blog Preview</h3>
        <p>Title: {{ blog.title }}</p>
        <p>Content:</p>
        <p>{{ blog.content }}</p>
        <p>Author: {{ blog.author }}</p>
        <p>Categories:</p>
        <ul>
            <li v-for="category in blog.categories">{{ category }}</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        blog: {
            title: "",
            content: "",
            categories: [],
            author: ""
        },
        authors:["The Angular Avenger", "The Net Ninja", "The React Reasoner", "The Vue Vindicator"],
        submitted: false
    }
  },
  methods: {
      post: function() {
          this.$http.post("https://tutorial-33ee.firebaseio.com/posts.json", this.blog ).then(function(data) {
        //   this.$http.post("http://jsonplaceholder.typicode.com/posts", {
            //   title: this.blog.title,
            //   body: this.blog.content,
            //   userid: 1
        //   }).then(function(data) {
              console.log(data);
              this.submitted = true;
          });
      }
  }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes label{
    display: inline-block;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
</style>