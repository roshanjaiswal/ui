$(document).ready(function() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        type: 'GET',
        success: function(result) {
            console.log(result)
        },
        error: function(err) {
            console.log(err)
        }
    })
})