(function () {
    function AppState() {
        this.sessionId = '';
    }

    AppState.prototype = {
        setSessionId: function (sessionId) {
            this.sessionId = sessionId;
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
        update: function () {
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
    }

    App.prototype = {
        setSessionId: function(sessionId) {
            this.appState.setSessionId(sessionId);
            this.view.update();
        },

        getSessionId: function () {
            return window.location.hash
                .trim()
                .replace('#', '');
        },
    };

    $(document).ready(function () {
        const appState = new AppState();
        const view = new ViewManager(appState);

        const app = new App(appState, view);
    });
})();
