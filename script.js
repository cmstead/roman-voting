

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
}



const optionIds = Object.freeze();

$(document).ready(function () {
    const appState = new AppState();
    const displayedBehavior = optionIds.NEW_SESSION;
    const hiddenBehavior = optionIds.VOTING_SESSION;

});