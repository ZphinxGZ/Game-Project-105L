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

$(document).ready(() => {});

// แสดง modal
function showDetailItem() {
  $(".modal").css("display", "flex");
}
// เลิกแสดง modal
function unShowDeailItem() {
  $(".modal").css("display", "none");
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
  $(".inv-imgg").removeClass("skill-cricle");
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
  $(".inv-imgg").addClass("skill-cricle");
}
