// Single state object
var state = {
    items: []
};


// State modification functions
var addItem = function(state, item) {
    state.items.push(item);
};

// Render functions
var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        // return '<li>' + item + '</li>';
        return  '<li>' + '<span class="shopping-item">' + item + '</span>' + '<div class="shopping-item-controls">' + 
        ' <button class="shopping-item-toggle">' +  '<span class="button-label">check</span>' +'</button>' + 
        '<button class="shopping-item-delete">' + '<span class="button-label">delete</span>' + '</button>' + '</div>' + '</li>'
    });
    element.html(itemsHTML);
};


// Event listeners
$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());
    renderList(state, $('.shopping-list'));
});


$(document).ready(function(){
    //Checkbox
    $(document).on('click', '.shopping-item-toggle', function(event) {
            $(event.target ).closest( "li" ).toggleClass("shopping-item__checked");
    });

    //Delete Item
    // $('.shopping-item-delete').click(function() {
    //   console.log('delete button pressed');
    // });
    $(document).on('click', '.shopping-item-delete', function(event) {
             $(event.target ).closest( "li" ).remove();
     });
});



