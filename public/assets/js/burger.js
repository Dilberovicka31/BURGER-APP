$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    const createBurger = {
      burger_name: $("#createBurger").val().trim(),
      devoured: 0,
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: createBurger
    }).then(function () {
      console.log("New burger added");
      location.reload();
    });
  });
});
