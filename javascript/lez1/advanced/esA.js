window.onload = function () {
    $.ajax({ // using $ as shortcut for "jQuery" - $.ajax performs an asynchronous HTTP (Ajax) request.
        url: API_SERVER_URL + '/events',
        // async: false
        method: 'GET',
        success: function (event_list) { // if GET works
            for (var i in event_list) { // iterating event list taken from API
                var event = event_list[i]
                $('#event-${i}').html( // HTML written using jQuery
                    `<div class="item-events">
                        <img src="${event.image_url}">
                    </div>
                    <div class="tab-events">
                        <div class="upper-tab-event">
                            <p>${event.title}</p>
                        </div>
                        <div class="lower-tab-event">
                            <p>${event.date}</p>
                        </div>
                    </div>`
                );
            }
            add_menu() // function to add a deop-down Menu
        },
    });
};

function add_menu() {
    document.getElementById('event-0').insertAdjacentHTML('beforebegin' // insertAdjacentHTML: specify position ('beforebegin')
        `<select id="menu" name="menu">
            <option value="" selected>Please choose</option>
            <option value="terminati">terminati</option>
            <option value="live">live</option>
            <option value="futuri">futuri</option>
            <option value="città">città</option>
        </select>`)
}