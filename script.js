

function AppState() {
    this.sessionId = this.getSessionId();
}

AppState.prototype = {
    getSessionId: function () {
        return window.location.hash
            .trim()
            .replace('#', '');
    },

    setSessionId: function(sessionId) {
        this.sessionId = sessionId;
    },

    sessionIdExists: function() {
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
    update: function() {
        Object.keys(this.viewIdSelectors)
            .forEach(selector => {
                const displayPredicate = this.viewIdSelectors[selector];
                const element = $('#' + selector);

                if(displayPredicate(this.state)) {
                    element.show();
                } else {
                    element.hide();
                }
            })
    }
};

$(document).ready(function () {
    const appState = new AppState();
    const view = new ViewManager(appState);
});