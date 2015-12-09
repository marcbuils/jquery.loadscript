// Plugin test for an example of jQuery.loadScript usation
$(function () {
  $.fn.test2 = function () {
    // add a click listener
    return this.text('Select me (test2) !').click(function () {
      alert('You have clicked');
    });
  };
})
