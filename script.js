var widgets = document.getElementById("widgets").innerHTML;

function startHere(){
  widgets = parseInt(widgets)
  widgets = widgets + 1;
  document.getElementById("widgets").innerHTML = widgets;
  shouldShow();
}
function shouldShow(){
  if(widgets >= 50){
    document.getElementById("secondBtn").removeAttribute("hidden")
  }
}
