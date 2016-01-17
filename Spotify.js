var Search;
var SpotifyOpen = false;
function spotify(Search){
SpotifyOpen = true;
var widthn  =  "100%";
var heightn  =  "80px";
var width = 810;
var heightn;
width  = widthn.toString();
height = 80;
var iframe = '" width='+width+' height='+height+' frameborder="0" allowtransparency="true"></iframe>';
$.ajax({
  url: "http://ws.spotify.com/search/1/artist.json?q="+"'"+Search+"'",
  success : function(json){
    $('span').text(" " +json.info.query)
    var spotifylinks = '<iframe src="https://embed.spotify.com/?uri='+ json.artists[0].href + iframe;
    $("<li class='row' style='padding-left:0px;height:80px;'><a class='remove' style='z-index:5;position:absolute;margin-left:760px;height:80px;' href='#'><i class='fa fa-trash-o'></i></a><div style='z-index:1;'>"+spotifylinks+"</div></li>").fadeIn().appendTo("Ul");
 
  }//end json
  
});//end ajax
}
