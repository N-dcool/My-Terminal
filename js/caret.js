function $(elid){
  return document.getElementById(elid);
}

var cursor;
window.onload = init;

function init() {
  cursor = $("cursor");
  cursor.style.left = "0px";
}

function typeIt(from, e){
  e = e || window.event;
  var w = $("typer");
  var tw = from.value;
  if(!pw){
    w.innerHTML = nl2br(tw);
  }
}

function nl2br(txt) {
  return txt.replace(/\n/g, '');
}
