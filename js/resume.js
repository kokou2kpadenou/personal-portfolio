var btnPrint = document.getElementById('btn-print');
var btnCanvas = document.getElementById('btn-canvas');


btnPrint.addEventListener('click', function(e) {
  e.preventDefault();
  window.print();
});

btnCanvas.addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('html').classList.toggle('bg-darkness');
});
