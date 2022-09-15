var app = new Vue({
    el: '#app',
    data: {
      discList: [],
    },
    created() {


        for (let i=0; i<6; i++){
            axios.get("http://localhost:8888/php-ajax-dischi/seconda_versione/database.php")
            .then(disc => {
                this.discList.push(disc.data[i])
                console.log(disc.data[i])
            })
        }
    }

})