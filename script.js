(function () {
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

    function AppState() {
        this.sessionId = '';

        this.voteCount = {
            [voteTypes.THUMBS_UP]: 0,
            [voteTypes.THUMBS_SIDEWAYS]: 0,
            [voteTypes.THUMBS_DOWN]: 0
        };
    }

    AppState.prototype = {
        reset: function () {
            Object.keys(this.voteCount)
                .forEach((key) => {
                    this.voteCount[key] = 0;
                });
        },

        setSessionId: function (sessionId) {
            this.sessionId = sessionId;
        },

        incrementVoteCount: function (voteType) {
            this.voteCount[voteType]++;
        },

        sessionIdExists: function () {
            return this.sessionId !== '';
        }
    };

    function ViewManager(state) {
        this.state = state;

        this.viewIdSelectors = {
            'voting-session': (state) => state.sessionIdExists(),
            'new-session': (state) => !state.sessionIdExists()
        };

        this.updateMainView();
    }

    ViewManager.prototype = {
        updateMainView: function () {
            Object.keys(this.viewIdSelectors)
                .forEach(selector => {
                    const displayPredicate = this.viewIdSelectors[selector];
                    const element = $('#' + selector);

                    if (displayPredicate(this.state)) {
                        element.show();
                    } else {
                        element.hide();
                    }
                })
        }
    };

    function App(appState, view) {
        this.appState = appState;
        this.view = view;

        this.initializeSessionId();
    }

    App.prototype = {
        initializeSessionId: function () {
            const sessionId = this.getSessionId();
            this.setSessionId(sessionId);
        },

        setSessionId: function (sessionId) {
            this.appState.setSessionId(sessionId);
            this.view.updateMainView();
        },

        resetAppState: function () {
            this.aPopStateEvent.reset();
            this.view.updateMainView();
        },

        getSessionId: function () {
            return window.location.hash
                .trim()
                .replace('#', '');
        }
    };

    $(document).ready(function () {
        const appState = new AppState();
        const view = new ViewManager(appState);

        new App(appState, view);
    });
})();
