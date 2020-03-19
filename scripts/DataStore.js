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

    const db = firebase.firestore();

    function DataStore() {
        this.unsubscribe = null;
        this.connection = db.collection('roman-voting')
            .doc('voting');

        this.connection.set({
            test: 'foo'
        })
        .then(function(docRef) {
            console.log(docRef);
        });
    }

    DataStore.prototype = {
        subscribe: function(id) {
            if(typeof this.unsubscribe !== 'function') {
                this.unsubscribe();
            }

            
        },
    };

    return DataStore;
})();