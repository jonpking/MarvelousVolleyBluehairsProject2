let finalGame = [];

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
    }))
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
  }).then(updatePage).done()
  // CLICK HANDLERS - SUBMIT
// ==========================================================
  $("#confirmSelect").on("click", function (event) {
    event.preventDefault();
    $("#gameSearchModal").modal("hide");
    $(".form-control").empty();
    var selectedGames = $(".custom-select option:selected").data();
    console.log(selectedGames);

    $.each(selectedGames, function(index, value){
      // console.log(index,value);
      // console.log(index)
      // console.log(value)
      finalGame.push(value)
    });

    console.log(finalGame)
    addGameToDB(selectedGames);
  });
});

// GAMES POST ROUTE 
function addGameToDB(selectedGames) {
  $.post("/api/games", selectedGames)
    .then(function(){
      console.log("posted");
      window.location.reload();
    });
}

// LOGIN POST ROUTE
function registerLogin() {
  const body = {
    username: Element.val().trim(),
    password: Element.val().trim()
  }
  $.post("/api/login/register", body)
  .then(function(res){
    window.localStorage.setItem("user_id", res.user.id);
  });
}

// LOGIN GET ROUTE
function retrieveLogin() {
  $.ajax({
    url: "/api/login",
    method: "GET"
  }).then(function (res){
    // USER LOGIN SUCCESSFUL
    if(res.success === true){
      window.localStorage.setItem("user_id", res.user.id);
    }
    // USER LOGIN FAILED
    else {
      // display login error message
    }
  })
}

function logout() {
  $("#logoutButton").on("click", function (event) {
    event.preventDefault();
    window.localStorage.removeItem("user_id");
    window.location.href = //login page
  });
}
