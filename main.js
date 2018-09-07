// var scroll = new SmoothScroll()
var app = new Vue({
    el: '#app',
   data: {
       list: [],
       current: '',
       topics: [
           {value: 'vue', name: 'Vue.js'},
           {value: 'jQuery', name: 'jQuery'},
           {value: 'ruby', name: 'ruby'}
       ]
   },
   watch:{
       current: function(val){
           axios.get('https://api.github.com/search/repositories',{
               params: {q: 'topic:' + val}
           }).then(function(response){
               this.list = response.data.items
           }.bind(this))
       }
   },
})