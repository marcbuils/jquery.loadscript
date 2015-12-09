// Plugin test for an example of jQuery.loadScript usation
$(function () {
  $.fn.test = function () {
    // add a click listener
    return this.text('Select me !').click(function () {
      alert('You have clicked');
    });
  };
});
