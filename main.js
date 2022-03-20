const select = document.querySelector(".filter");

select.addEventListener("change", function (e) {
    const chosen_place = e.target.value;
    const currently_visible = document.querySelectorAll(".item.active");
    const make_visible = document.querySelectorAll(`.item.${chosen_place}`)
    currently_visible.forEach(function (place) {
        place.classList.remove("active");
    });

    make_visible.forEach(function (place) {
        place.classList.add("active");
    });

});
