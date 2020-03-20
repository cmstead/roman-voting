const ViewManager = (function () {
    function ViewManager(state) {
        this.state = state;
        this.newSessionClickSet = false;

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
            if (!this.state.sessionIdExists() && !this.newSessionClickSet) {
                this.newSessionClickSet = true;

                $('#new-session-button')
                    .on('click', () => {
                        console.log('clicked');
                        $('#new-session-button').off('click');
                        this.newSessionClickSet = false;
                    });
            }
        }
    };

    return ViewManager;
})();