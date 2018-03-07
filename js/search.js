$(document).ready(function() {
  var html = "";
  var $idForm = $("#id-form");
  $idForm.submit(function(e){
    e.preventDefault();
    //Storing user's search as a variable
    var searchQuery = $("#search-bar").val();
    //Accessing the Wikipedia API based on user input
    $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=5&search=" + searchQuery + "&callback=?", function(data) {
      //Updating HTML of webpage for every search result
      for (i = 0; i < data[1].length; i++) {
        html += "<a class='article-links' href='" + data[3][i] + "' target='blank'> <div class='article-result'> <h1>" + data[1][i] + "</h1> <p>" + data[2][i] + "</p> </div> </a>"
      }
      $(".search-results").html(html);
      $(".article-result").hide();
      //Fading in each search result one by one
      $(".article-result").each(function(index) {
        $(this).delay(500 * index).fadeIn(500);
      });
    });
  });
});
