var app = new Vue({
    el: '#app',
    // data: {
    //     message: 'Hello Vue.js'
    // },
    data: {
        list: ['りんご', 'ばなな', 'いちご']
    },
    methods: {
        handleClick: function(e){
            alert(e.target)
        }
    }
})