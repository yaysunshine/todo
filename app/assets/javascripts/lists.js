$(document).ready(function() {
  $("#newtodoo > form").submit(function(e){
    e.preventDefault();
    var url = $(this).attr('action');
    var method = $(this).attr('method');
    var item = $(this).find(".item_title").val();

    $.ajax({
      url: url,
      type: method,
      data: {list: {item: item, done: false} },
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

  });


});

