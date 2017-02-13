// Single state object
var state = {
    items: []
};


// State modification functions
var addItem = function(state, item, checked) {
    state.items.push({
        text:item,
        checked:checked
    });
};

// Render functions
var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item, index) {
        var html= $('#shopping-item').html()
                        .replace('{{id}}', index)
                        .replace('{{item}}', item.text);

        if (item.checked) {
            html = html.replace('{{checked-css-class}}', 'shopping-item__checked');
        } else {
            html = html.replace('{{checked-css-class}}', '');
        }
                        
        return html;
    });
    element.html(itemsHTML);
};


// Event listeners
$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());
    $('#shopping-list-entry').val('');
    renderList(state, $('.shopping-list'));
});


$(document).ready(function(){
    //Checkbox
    $(document).on('click', '.shopping-item-toggle', function(event) {
        var index = $(event.target ).closest( "li" ).data('index');
        state.items[index].checked = !state.items[index].checked;
        renderList(state, $('.shopping-list'));
    });

    //Delete Item
    $(document).on('click', '.shopping-item-delete', function(event) {
        var index = $(event.target ).closest( "li" ).data('index');
        delete state.items[index];
        renderList(state, $('.shopping-list'));
     });

    addItem(state,'apples');
    addItem(state,'oranges');
    addItem(state,'milk',true);
    addItem(state,'bread');
    renderList(state, $('.shopping-list'));
});




