$("#form").on("submit", function(e) {
  var add = $("#input").val();
  $("#listItems").append("<label>" + "<input type='checkbox' class='checkbox'/><span>" + add + "</span></label>");
  $("#form").children("input").val('').focus();
  e.preventDefault();
});

// $("#form").children("input").val("").focus();

$("#remove").click(function(e) {
  $("input:checked").parent("label").remove();
  //$("br").remove(); 
  e.preventDefault();
});












