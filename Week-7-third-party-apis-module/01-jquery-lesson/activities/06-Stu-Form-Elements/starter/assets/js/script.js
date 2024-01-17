var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function submitHandler(event) {
  event.preventDefault();
  var newItem = $("#shopping-input").val();
  // create element
  var myLi = $("<li>");
  // add the content/styles
  myLi.text(newItem);
  // append to page
  shoppingFormEl.append(myLi);
  $("shopping-input").val("");
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission

shoppingFormEl.on("submit",submitHandler)
