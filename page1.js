const status = [
  (basic = {
    HP: 100,
    MP: 100,
    Def: 150,
    ATK: 100,
  }),
  (advance = {
    STR: 20,
    AGI: 20,
    INT: 20,
    res: 10,
    flee: 10,
  }),
];

$(document).ready(() => {
  $(".wea-box")
    .on("mouseover", showDetailItem)
    .on("mouseleave", unShowDetailItem);
  $(".item-hp-box")
    .on("mouseover", showDetailItem)
    .on("mouseleave", unShowDetailItem);
});

function showDetailItem() {
  $(".modal").css({
    opacity: "1",
    transform: "translateX(0)",
    display: "flex",
  });

  $(".modal-bg").css({
    opacity: "1",
    transform: "translateX(0)",
    display: "flex",
  });
}

function unShowDetailItem() {
  $(".modal-bg").css({
    display: "none",
    opacity: "0 ",
  });
  $(".modal").css({
    display: "none",
    opacity: "0",
  });
}
// Inventory ช่องเก็บของ
function showInventory() {
  $(".inv").css({
    background: "red",
    color: "black",
  });
  $(".ski").css({
    background: "black",
    color: "white",
  });

  $(".name-of-user-choose").html("<h4>Inventory</h4>");

  $(".contaner-carddd").removeClass("show-back");
}
// Inventory ช่องสกิล
function showSkill() {
  $(".ski").css({
    background: "red",
    color: "black",
  });
  $(".inv").css({
    background: "black",
    color: "white",
  });

  $(".name-of-user-choose").html("<h4>Skill</h4>");

  $(".contaner-carddd").addClass("show-back");
}
