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

    const voteTypes = {
        THUMBS_UP: 'thumbsUp',
        THUMBS_SIDEWAYS: 'thumbsSideways',
        THUMBS_DOWN: 'thumbsDown',
    };

    function DataStore() { }

    DataStore.prototype = {

    };

    return DataStore;
})();