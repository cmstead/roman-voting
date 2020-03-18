$(document).ready(function() {
    const id = window.location.hash.trim();

    console.log(window.location);


    
    function displayOption(id) {
        const 
        if(id === '') {
            $('#voting-session').hide();
        } else {
            $('#new-session').hide();
        }
    }

    displayOption(id);
});