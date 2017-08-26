new Vue({
    el: "#vue-app",
    data: {
        output: "ALL FOOD"
    },
    methods: {
        readRefs: function() {
            console.log(this.$refs.divTest.innerText);
            this.output = this.$refs.field1.value;
        }
    },
    computed: {
    }
});
