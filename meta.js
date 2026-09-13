document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('updated-time');
  if (!el) return;

  var months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  var d = new Date(document.lastModified);
  var hours = d.getHours();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  var h12 = hours % 12 || 12;
  var minutes = ('0' + d.getMinutes()).slice(-2);

  el.textContent = months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear() +
    ' at ' + h12 + ':' + minutes + ' ' + ampm;
});
