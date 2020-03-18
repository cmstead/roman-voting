const App = (function () {
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

    return App;
})();