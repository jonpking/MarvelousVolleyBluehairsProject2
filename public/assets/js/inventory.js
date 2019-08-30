$("#searchSubmit").on("click", function () {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // board game api stuff
    });
});

$("#searchForm").on("submit", gamesToDB);

const gamesToDB = (gameInfo) => {
    $.post("/api/games", gameInfo, function () {

    });
};
