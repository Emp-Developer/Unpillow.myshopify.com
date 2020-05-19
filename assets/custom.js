var text = ["Knee Pillow", "Leg Wedge", "unPillow Cases", "unPillow Jumbo", "unPillow Travel"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 2000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}

$( "#auto-video" ).click(function() {
     $("#m-1589472670722 iframe").css("display","block");     
    $("#c-1589700492049").css("display","none");
    $("div #c-1589700493644").css("width","100%");
    $(".elm.gf-elm-center.gf-elm-center-xs.gf-elm-left-lg.gf-elm-left-md.gf-elm-left-sm").css("text-align","center");
    setTimeout(function(){   $("#m-1589472670722 iframe").css("display","none");
    $("#c-1589700492049").css("display","block");
    $("div #c-1589700493644").css("width","50%");
    $(".elm.gf-elm-center.gf-elm-center-xs.gf-elm-left-lg.gf-elm-left-md.gf-elm-left-sm").css("text-align","left");
    }, 28000);
  });
 
  