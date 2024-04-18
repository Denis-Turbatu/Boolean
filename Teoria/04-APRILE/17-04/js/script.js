console.log(Vue);

const {createApp} = Vue;

createApp({
    // dentro data andranno i dati e la logica del codice
    data(){
        return{
            greeting: "",
            user: "",
            last: "",
            // nome classe css
            color: "blue",
            h2Red: "",
        }
    },
    methods: {
        // qua mettiamo le funzione che vogliamo invocare
        saluta: function(){
            this.greeting = `Ciao ${this.user} ${this.last}`; 
            this.user = "";
            this.last = "";
        },
        toggleColor: function(){
            if (this.h2Red == "") {
                this.h2Red = "red";
            } else if ((this.h2Red == "red")) {
                this.h2Red = "";
            }
        }
    }
}).mount('#app');