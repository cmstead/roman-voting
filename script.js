

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
    },

    
};

function DisplayManager(state) {}

const optionIds = Object.freeze({
    VOTING_SESSION: 'voting-session',
    NEW_SESSION: 'new-session'
});

$(document).ready(function () {
    const appState = new AppState();
    const displayedBehavior = optionIds.NEW_SESSION;
    const hiddenBehavior = optionIds.VOTING_SESSION;

});