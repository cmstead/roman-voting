const DataStore = (function () {
    var firebaseConfig = {
        apiKey: "AIzaSyDd1Y2l-4SsmJthFhvJFAptABJ8rTvmWAY",
        authDomain: "roman-voting.firebaseapp.com",
        databaseURL: "https://roman-voting.firebaseio.com",
        projectId: "roman-voting",
        storageBucket: "roman-voting.appspot.com",
        messagingSenderId: "667347198785",
        appId: "1:667347198785:web:db954985b3f892934c77c0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function DataStore() {
        this.unsubscribe = null;
    }

    DataStore.prototype = {
        subscribe: function(id) {
            if(typeof this.unsubscribe !== 'function') {
                this.unsubscribe();
                this.unsubscribe = null;
            }

            const ref = firebase.ref('/roman-voting/votes/' + id);
        },
    };

    return DataStore;
})();