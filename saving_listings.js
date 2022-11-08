const app = Vue.createApp( {

    //=========== DATA PROPERTIES ===========
    data() {
        return {
            saved_listings: []
        }
    },

    //=========== METHODS ===========
    methods: {
        saving_listings() {

            // initialising main body element in saved_listings.html
            let main = document.getElementById("main")

            // html str to replace innerhtml in main
            main_str = ''

            for (listing in saved_listings) {
                
            }
        }    
    }

})