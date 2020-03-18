const AppState = (function () {
    function AppState(dataStore) {
        this.dataStore = dataStore;
        
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

    return AppState;
})();