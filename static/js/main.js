$(document).ready(function() {
  // console.log("doc ready");
  $('[lang="zh-tw"]').hide();

  $('#translate-btn').click(function() {
    event.preventDefault();
    // console.log("translating...")
    $('[lang="zh-tw"]').toggle();
    $('[lang="en"]').toggle();
  });

});
