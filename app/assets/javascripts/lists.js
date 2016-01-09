$(document).ready(function() {

  $("#newtodoo > form").submit(function(event){
    event.preventDefault();
    var url = $(this).attr('action');
    var method = $(this).attr('method');
    var item = $(this).find(".item_title").val();
    var allTodos = $(".container_all_todos > ul").last();

    $.ajax({
      url: url,
      type: method,
      dataType: 'json',
      data: {list: {item: item, done: false} },
      success: function(response) {
        var doneButton = $("<p>").html("<a done='true' rel='nofollow' data-method='put' href='/lists/" + response.id + "'>Done</a>");
        console.log(response);
        console.log(response.id);
        console.log(item);
        console.log("success");
        $(".container_all_todos").append("<ul class='col-xs-6'></ul>");
        allTodos.append("<li>" + item + "</li><li>" + response.done + "</li>");
        allTodos.append(doneButton);
        $(".item_title").val('');
      }
    });

  });

  var onDoneButtonClick = function(event){
    event.preventDefault();
    console.log("inside on buton done thins");
    $.ajax({
      url: '/path/to/file',
      type: 'default GET (Other values: POST)',
      dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
      data: {param1: 'value1'},
    })
    .done(function() {
      console.log("success");
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
  }
  $("#donee").on('click', onDoneButtonClick);



});

