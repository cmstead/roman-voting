function getSessionId() {
    return window.location.hash.trim().replace('#', '');
}

function AppState() {
    this.sessionId = this.getSessionId();
}

AppState.prototype = {
    setSessionId: function() {}
};

$(document).ready(function () {
    const id = getSessionId();

    const optionKeys = {
        VOTING_SESSION: 'voting-session',
        NEW_SESSION: 'new-session'
    };

    function doesIdExist() {}

    function displayOption(id) {
        const optionToDisplay = id === ''
            ? optionKeys.NEW_SESSION
            : optionKeys.VOTING_SESSION;

        const optionToHide = id !== ''
            ? optionKeys.VOTING_SESSION
            : optionKeys.NEW_SESSION;

        $('#' + optionToDisplay).show();
        $('#' + optionToHide).hide();
    }

    displayOption(id);
});