Vue.component('greeting', {
    template: '<p>Re-usable component referencing {{ name }} <button v-on:click="changeName">Change Name</button></p>',
    data: function() {
        return {
            name: 'Bob'
        }
    },
    methods: {
        changeName: function() {
            this.name = 'Phil'
        }
    }
});

new Vue({
    el: "#vue-app-one",
    data: {
    },
    methods: {
    },
    computed: {
    }
});

new Vue({
    el: "#vue-app-two",
    data: {
    },
    methods: {
    },
    computed: {
    }
});
