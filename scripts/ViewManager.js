const ViewManager = (function () {
    function ViewManager(state) {
        this.state = state;
        this.newSessionUnsubscribe = null;

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
                });

            this.setNewSessionClickEvent();
        },

        setNewSessionClickEvent: function () {
            if (!this.state.sessionIdExists() && !this.newSessionUnsubscribe) {
                this.newSessionUnsubscribe = $('#new-session-button')
                    .on('click', () => {
                        console.log('clicked');
                        this.newSessionUnsubscribe();
                    });
            }
        }
    };

    return ViewManager;
})();