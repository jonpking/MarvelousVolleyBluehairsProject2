$("#searchSubmit").on("click", function () {
    event.preventDefault();
    $("#gameSearchModal").modal("show");
    var game = $("#searchSubmit").val().trim();
    console.log(game);
    var queryURL = "https://www.boardgameatlas.com/api/search?limit=10&name=" + game + "&client_id=1FCJGZDFEs";
    // var queryURL = "https://www.boardgamegeek.com/xmlapi2/search?query=" + game;
  ​
  ​
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
  ​
      for (let index = 0; index < response.games.length; index++) {
        const name = response.games[index].name;
        const thumbUrl = response.game[index].thumb_url;
        const yearPublished = response.game[index].year_published;
        const description = response.game[index].description;
        
        console.log(element);
  ​
        const b = $("<br>")
  ​
        const gameDiv = $("#boardGameSection")
        gameDiv.append(name)
        gameDiv.append(b)
        gameDiv.append(thumbUrl)
        gameDiv.append(b)
        gameDiv.append(yearPublished)
        gameDiv.append(b)
        gameDiv.append(description)
     
      }
    });
});

// $("#searchForm").on("submit", gamesToDB);

// const gamesToDB = (gameInfo) => {
//     $.post("/api/games", gameInfo, function () {

//     });
// };

