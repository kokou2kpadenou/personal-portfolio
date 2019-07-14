var btnPrint = document.getElementById('btn-print');
var btnCanvas = document.getElementById('btn-canvas');
var titleBar = document.getElementsByClassName('title-bar-click');

btnPrint.addEventListener('click', function(e) {
  e.preventDefault();
  window.print();
});

btnCanvas.addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('html').classList.toggle('bg-darkness');
});

function toggleExpand(e) {
  var expand = e.currentTarget.previousElementSibling;
  e.preventDefault();
  expand.checked = !expand.checked;
}

for (var i = 0; i < titleBar.length; i++) {
  titleBar[i].addEventListener('click', toggleExpand);
}
