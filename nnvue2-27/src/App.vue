<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form Header</h3>
        <p>Parargraph for the form header...</p>
      </div>
      <div slot="form-fields">
        <div>
          <label for="name">Name:</label>
          <input id="name" type="text" placeholder="Name" required/>
        </div>
        <div>
          <label for="pwd">Password:</label>
          <input id="pwd" type="password" placeholder="password" required/>
        </div>
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit()">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from "./components/formHelper.vue"
export default {
  components: {
    "form-helper": formHelper
  },
  data () {
    return {
      title: "Slots Title from data()"
    }
  },
  methods: {
     handleSubmit: function() {
       alert("Submitted!");
     }
  }
}
</script>

<style scoped>

</style>
