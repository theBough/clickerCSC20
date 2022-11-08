var widgets = document.getElementById("widgets").innerHTML;
var rate = 1;
function startHere(){
  widgets = parseInt(widgets)
  widgets = widgets + rate;
  document.getElementById("widgets").innerHTML = widgets;
  shouldShow();
}
function shouldShow(){
  //This will detect if the user has 50 widgets
  //When they do we show another button
  if(widgets >= 50){
    document.getElementById("secondBtn").removeAttribute("hidden")
  }
}
function buttonTwo(){
  //take away 50 widgets
  //dbl the click rate
  widgets = parseInt(widgets);
  widgets = widgets - 50;
  rate = rate * 2
}
