//VARIABLES
$(document).ready( function (){
var authKey = "&api_key=dc6zaTOxFJmzC&limit=5";
var queryURLBase = "http://api.giphy.com/v1/gifs/search?q=";

var topics = ["apple", "pineapple", "kiwi", "orange"];

var search =""; 
//= $("#search-term")


//FUNCTIONS
//grab search input
//push new search term into topics array
//$("#search-term").trim();


//for loop creates btns for topic array
for (var i = 0; i<topics.length; i++) {

$("#btns").append("<button class='fruit'>"+ topics[i] +"</button>");
}



//onclick the search is made, creating a btn for the newest searched term
$("#run-search").click( function(){

topics.push($("#search-term").val());
$("#btns").empty();

for (var i = 0; i<topics.length; i++) {

$("#btns").append("<button class='fruit'>"+ topics[i] +"</button>");
$("#search-term").val("");
}

});


//listen for button click, then generate gifs**
//populate acreen with gifs attr rating & still image*
$("#btns").on("click", function() {
              var fruit = $(this).text("#btns");
              var queryURL = queryURLBase + fruit + authKey;

              $.ajax({
                  url: queryURL,
                  method: "GET"
                })
                .done(function(response) {
                  var results = response.data;

                  for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div class='item'>");

                    var rating = results[i].rating;

                    var p = $("<p>").text("Rating: " + rating);

                    var fruitImage = $("<img>");
                   // fruitImage.attr("src", results[i].images);

                    var fruitGif = $("<img>");
                    fruitGif.attr("src", results[i].images.fixed_height.url)

                    gifDiv.prepend(p);
                    gifDiv.prepend(fruitGif);

                    $("#results").prepend(gifDiv);
                  }
                });
            });





});