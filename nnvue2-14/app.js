var one = new Vue({
    el: "#vue-app-one",
    data: {
        title: 'View App One'
    },
    methods: {

    },
    computed: {
        greet: function() {
            return 'Hello from App One!';
        }
    }
});

var two = new Vue({
    el: "#vue-app-two",
    data: {
        title: 'View App Two'
    },
    methods: {
        changeTitle: function() {
            one.title = "hello!";
        }
    },
    computed: {
        greet: function() {
            return 'Greetings from App Two!!';
        }
    }
});

two.title = "changed from outside";