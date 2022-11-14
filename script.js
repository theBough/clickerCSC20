var widgets = document.getElementById("widgets").innerHTML;
var secondBtn = document.getElementById("secondBtn")
var thirdBtn = document.getElementById("thirdBtn")
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
    secondBtn.style.visibility = "visible";     
  }
  if(widgets>=200){
    thirdBtn.style.visibility = "visible";
  }
}
function buttonTwo(){
  //take away 50 widgets
  //dbl the click rate
  widgets = parseInt(widgets);
  widgets = widgets - 50;
  document.getElementById("widgets").innerHTML = widgets;
  rate = rate * 2
  secondBtn.style.visibility = "hidden";
}
