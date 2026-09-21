document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('updated-time');
  if (!el) return;

  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  var d = new Date(document.lastModified);
  var hours = d.getHours();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  var h12 = hours % 12 || 12;
  var minutes = ('0' + d.getMinutes()).slice(-2);

  el.textContent = d.getDate() + ' ' + months[d.getMonth()] + "'" + String(d.getFullYear()).slice(-2) +
    ', ' + h12 + ':' + minutes + ' ' + ampm;
});
