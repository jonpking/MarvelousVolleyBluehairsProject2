// SEARCH - CLICK HANDLER
// ==========================================================

$("#searchSubmit").on("click", function (event) {
  event.preventDefault();
  $("#gameSearchModal").modal("show");
  var game = $(".form-control").val().trim();
  console.log("This game was searched: " + game);
  const queryURL = "https://www.boardgameatlas.com/api/search?limit=10&name=" + game + "&client_id=1FCJGZDFEs";

  // AJAX CALL
  // ==========================================================

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);

  // LOOP THROUGH RESULTS + SELECT MENU
  // ==========================================================

    for (let index = 0; index < response.games.length; index++) {
      const gameName = response.games[index].name;
      $(".custom-select").append($("<option/>", {
        text: gameName,
        value: gameName
      }))
    }
  });

 
});


// SEARCH SUBMIT - CLICK HANDLER
// ==========================================================

$("#confirmSelect").on("click", function (event){
  event.preventDefault();
  $("#gameSearchModal").modal("hide");
  $(".form-control").empty();
  var selectedGame = $(".custom-select option:selected").text();
  console.log(selectedGame);
  addGameToDB(selectedGame)
});


function addGameToDB(selectedGame) {
  $.post("/api/games", selectedGame)
    .then(function(){
      window.location.reload();
    });
}

function getGameInventory() {
  $.get("/api/games", function(data) {
    
  });
}

function deleteGameFromInventory() {
  // var listItemData = $(this).parent("td").parent("tr").data("author");
  // var id = listItemData.id;
  $.ajax({
    method: "DELETE",
    url: "/api/games/" + id
  })
    .then(function(){
      window.location.reload();
    });
}
