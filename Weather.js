var WeatherV = false;
function Weather(Searchin){
  Search = Searchin.replace("/Weather","")
WeatherV = !WeatherV;
  if (WeatherV){
var UL = document.getElementById("UL");
 $('<li class="row Weather" style="height:245px;"><iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" src="http://forecast.io/embed/#lat=37.338208&lon=-121.886329&name=San Jose&units=us"></iframe></li>').fadeIn().appendTo(UL);
}
if (!WeatherV){
var forecast = document.getElementsByClassName("Weather");
  for (var i=0;i<forecast.length;i++){
      $(forecast[i]).slideUp();
        forecast[i].value = 2;
  }
}
}
// Weather("San Jose");
