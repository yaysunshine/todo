$(document).ready(function() {
  $("#newtodoo > form").submit(function(e){
    e.preventDefault();
    var url = $(this).attr('action');
    var method = $(this).attr('method');
    var item = $(this).find(".item_title").val();
    var last_li = $("#containter_all_todos > ul").last();

    $.ajax({
      url: url,
      type: method,
      data: {list: {item: item, done: false} }
    })
    .done(function() {
      console.log(item);
      last_li.prepend("<li>" + item + "</li>");
      $(".item_title").val('');
    })
    .fail(function() {
      console.log("error");
    });

  });


});

