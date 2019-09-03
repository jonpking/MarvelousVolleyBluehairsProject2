const selectedGameName = []

/**
 * pulls information from the form and build the query URL
 * @returns {string} URL for NYT API based on form inputs
 */

function buildQueryURL() {
  var game = $(".form-control").val().trim();
  console.log(game)
  const queryURL = "https://www.boardgameatlas.com/api/search?limit=10&name=" + game + "&client_id=1FCJGZDFEs";
  return queryURL
}

/**
 * takes API data (JSON/object) and turns it into elements on the page
 * @param {object} response - object containing NYT API data
 */

function updatePage(response) {
  console.log(response);

  for (let index = 0; index < response.games.length; index++) {
    const gameName = response.games[index].name;
    $(".custom-select").append($("<option/>",
      selectedGame = {
        text: gameName,
        // originally had value:
        data: [
          response.games[index].image_url,
          response.games[index].name,
          response.games[index].description_preview,
          response.games[index].min_players,
          response.games[index].max_players,
          response.games[index].min_playtime,
          response.games[index].max_playtime,
          response.games[index].min_age,
          response.games[index].average_user_rating
        ]
    })).then
     // CLICK HANDLERS - SUBMIT
// ==========================================================
    $("#confirmSelect").on("click", function (event) {
      event.preventDefault();
      $("#gameSearchModal").modal("hide");
      $(".form-control").empty();
      
      var selectedGames = $(".custom-select option:selected").data();
      // console.log(selectedGames);
      console.log(selectedGames[0]);
      console.log(selectedGames[1]);
      console.log(selectedGames[2]);
      console.log(selectedGames[3]);
      console.log(selectedGames[4]);
      console.log(selectedGames[5]);
      console.log(selectedGames[6]);
      console.log(selectedGames[7]);
      console.log(selectedGames[8]);
      // selectedArray.push(selectedGames)
      // console.log(selectedArray);

    });
};
};

// CLICK HANDLERS - SEARCH
// ==========================================================
$("#searchSubmit").on("click", function (event) {
  event.preventDefault();
  $("#gameSearchModal").modal("show");

  const queryURL = buildQueryURL();

  // Make the AJAX request to the API - GETs the JSON data at the queryURL.
  // The data then gets passed as an argument to the updatePage function
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(updatePage);
});


