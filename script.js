(function () {
    const voteTypes = {
        THUMBS_UP: 'thumbsUp',
        THUMBS_SIDEWAYS: 'thumbsSideways',
        THUMBS_DOWN: 'thumbsDown',
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
        setSessionId: function (sessionId) {
            this.sessionId = sessionId;
        },

        incrementVoteCount: function(voteType) {
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

        this.update();
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

        const sessionId = this.getSessionId();
        this.setSessionId(sessionId);
    }

    App.prototype = {
        setSessionId: function(sessionId) {
            this.appState.setSessionId(sessionId);
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
