var percent = 0

var time = setInterval(function(){
  $(".second").css("opacity",percent)
  percent+=0.01
  if(percent>1){
    $(".pageloading").addClass("complete")
    clearInterval(time)
  }
},50)
// ------------透明度為1時導入主頁------------