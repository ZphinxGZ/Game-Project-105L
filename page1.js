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
  $(".weaboximgg1").on("click",swarpitem1)
  $(".weaboximgg2").on("click",swarpitem2)
  $(".armorboximgg1").on("click",swarpitem3)
  $(".armorboximgg2").on("click",swarpitem4)
});
function swarpitem1(){
  $(".weaboximgg1").html(
    '<div class="weaboximgg1"></div>'
  )
}
function swarpitem2(){
  $(".weaboximgg2").html(
    '<div class="weaboximgg2"></div>'
  )
}
function swarpitem3(){
  $(".armorboximgg1").html(
    '<div class="armorboximgg1"></div>'
  )
}
function swarpitem4(){
  $(".armorboximgg2").html(
    '<div class="armorboximgg2"></div>'
  )
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
