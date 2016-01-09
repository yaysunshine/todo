$(document).ready(function() {

  $("#newtodoo > form").submit(function(event){
    event.preventDefault();
    var url = $(this).attr('action');
    var method = $(this).attr('method');
    var item = $(this).find(".item_title").val();
    var doneButton = $("<p>").text('done');

    $.ajax({
      url: url,
      type: method,
      dataType: 'json',
      data: {list: {item: item, done: false} },
      success: function() {
        console.log(item);
        console.log("success");
        $(".container_all_todos").append("<ul class='col-xs-6'></ul>");
        $(".container_all_todos > ul").last().prepend("<li>" + item + "</li>");
        $(".container_all_todos > ul").last().append(doneButton);
        $(".item_title").val('');
      }
    });

  });

});

