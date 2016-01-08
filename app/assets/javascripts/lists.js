$(document).ready(function() {

  $("#addnew").click(function() {
    $.ajax({
      url: '/lists',
      type: 'POST',
    })
    .done(function() {
      alert("success");
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });

  });
});

