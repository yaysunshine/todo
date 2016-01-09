// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {

  $("#newtodoo > form").submit(function(event){
    event.preventDefault();
    var url = $(this).attr('action');
    var method = $(this).attr('method');
    var item = $(this).find(".item_title").val();

    $.ajax({
      url: url,
      type: method,
      dataType: 'json',
      data: {list: {item: item, done: false} },
      success: function() {
        console.log(item);
        console.log("success");
        $("#container_all_todos > ul").prepend("<li>" + item + "</li>");
        $(".item_title").val('');
      }
    });

  });

});

