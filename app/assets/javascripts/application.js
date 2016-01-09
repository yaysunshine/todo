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

