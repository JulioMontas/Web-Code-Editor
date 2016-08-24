window.onload = function() {

  var btnHide = document.getElementById('btnHide');
  var btnShow = document.getElementById('btnShow');
  var codeMirror = document.getElementById('preview');

  var code = document.getElementById('code').value;

  btnShow.style.display = "none";

  btnHide.addEventListener('click', function(event) {
    codeMirror.style.zIndex = "1";
    btnShow.style.display = "inline";
    btnHide.style.display = "none";
  }); // end click fxn

  btnShow.addEventListener('click', function(event) {
    codeMirror.style.zIndex = "-1";
    btnHide.style.display = "inline";
    btnShow.style.display = "none";
  }); // end click fxn

}; // end window onload fxn
