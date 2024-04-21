$(document).ready(() => {
  $(".sword1").on("click", changeS1);
  $(".sword2").on("click", changeS2);
  $(".sword3").on("click", changeS3);
  $(".sword4").on("click", changeS4);
  $(".sword5").on("click", changeS5);
  $(".acc1").on("click", changeA1);
  $(".acc2").on("click", changeA2);
  $(".acc3").on("click", changeA3);
  $(".acc4").on("click", changeA4);
  $(".acc5").on("click", changeA5);
});

let statuss = {
  Atk: 0,
  ReMove: 0,
  MBuff: 0,
  Agi: 0,
};
function sumStatus(statuss) {
  $(".advanceskill").html(
    `<h4>ItemStatus</h4>
      <p>ATK%  : ${statuss.Atk}%</p>
      <p>Re.M. : ${statuss.ReMove}</p>
      <p>M.Buf : ${statuss.MBuff}%</p>
      <p>AGI   : ${statuss.Agi}%</p>`
  );
}
function changeS1() {
  const sword1ImgSrc = $(".sword1 img").attr("src");
  $(".weaboximgg2").html(`<img src="${sword1ImgSrc}" alt="">`);
  $(".sword1").html("");

  statuss.Atk += sword1.atk;
  statuss.ReMove += sword1.reMovement;
  statuss.MBuff += sword1.MBuff;
  statuss.Agi += sword1.AGI;

  sumStatus(statuss);
  return statuss;
}
function changeS2() {
  // if ($(".weaboximgg2").html() === ``) {
  const sword2ImgSrc = $(".sword2 img").attr("src");
  $(".weaboximgg2").html(`<img src="${sword2ImgSrc}" alt="">`);
  $(".sword2").html("");
  // } else {
  //   let Ele = $(".weaboximgg2").find("img").attr("src");
  //   const sword2ImgSrc = $(".sword2 img").attr("src");
  //   $(".weaboximgg2").html(`<img src="${sword2ImgSrc}" alt="">`);
  //   $(".sword2").html(`<img src="${Ele}" alt=""></img>`);
  // }
  statuss.Atk += sword2.atk;
  statuss.ReMove += sword2.reMovement;
  statuss.MBuff += sword2.MBuff;
  statuss.Agi += sword2.AGI;

  sumStatus(statuss);
  return statuss;
}
function changeS3() {
  const sword3ImgSrc = $(".sword3 img").attr("src");
  $(".weaboximgg1").html(`<img src="${sword3ImgSrc}" alt="">`);
  $(".sword3").html("");

  statuss.Atk += sword3.atk;
  statuss.ReMove += sword3.reMovement;
  statuss.MBuff += sword3.MBuff;
  statuss.Agi += sword3.AGI;

  sumStatus(statuss);
  return statuss;
}
function changeS4() {
  const sword4ImgSrc = $(".sword4 img").attr("src");
  $(".weaboximgg1").html(`<img src="${sword4ImgSrc}" alt="">`);
  $(".sword4").html("");

  statuss.Atk += sword4.atk;
  statuss.ReMove += sword4.reMovement;
  statuss.MBuff += sword4.MBuff;
  statuss.Agi += sword4.AGI;

  sumStatus(statuss);
  return statuss;
}
function changeS5() {
  const sword5ImgSrc = $(".sword5 img").attr("src");
  $(".weaboximgg1").html(`<img src="${sword5ImgSrc}" alt="">`);
  $(".sword5").html("");

  statuss.Atk += sword5.atk;
  statuss.ReMove += sword5.reMovement;
  statuss.MBuff += sword5.MBuff;
  statuss.Agi += sword5.AGI;

  sumStatus(statuss);
  return statuss;
}
function changeA1() {
  const acc1ImgSrc = $(".acc1 img").attr("src");
  $(".armorboximgg1").html(`<img src="${acc1ImgSrc}" alt="">`);
  $(".acc1").html("");

  statuss.Atk += acc1.atk;
  statuss.ReMove += acc1.reMovement;
  statuss.MBuff += acc1.MBuff;
  statuss.Agi += acc1.AGI;

  sumStatus(statuss);
  return statuss;
}
function changeA2() {
  const acc2ImgSrc = $(".acc2 img").attr("src");
  $(".armorboximgg1").html(`<img src="${acc2ImgSrc}" alt="">`);
  $(".acc2").html("");

  statuss.Atk += acc2.atk;
  statuss.ReMove += acc2.reMovement;
  statuss.MBuff += acc2.MBuff;
  statuss.Agi += acc2.AGI;

  sumStatus(statuss);
  return statuss;
}
function changeA3() {
  const acc3ImgSrc = $(".acc3 img").attr("src");
  $(".armorboximgg2").html(`<img src="${acc3ImgSrc}" alt="">`);
  $(".acc3").html("");

  statuss.Atk += acc3.atk;
  statuss.ReMove += acc3.reMovement;
  statuss.MBuff += acc3.MBuff;
  statuss.Agi += acc3.AGI;

  sumStatus(statuss);
  return statuss;
}
function changeA4() {
  const acc4ImgSrc = $(".acc4 img").attr("src");
  $(".armorboximgg2").html(`<img src="${acc4ImgSrc}" alt="">`);
  $(".acc4").html("");

  statuss.Atk += acc4.atk;
  statuss.ReMove += acc4.reMovement;
  statuss.MBuff += acc4.MBuff;
  statuss.Agi += acc4.AGI;

  sumStatus(statuss);
  return statuss;
}
function changeA5() {
  const acc5ImgSrc = $(".acc5 img").attr("src");
  $(".armorboximgg2").html(`<img src="${acc5ImgSrc}" alt="">`);
  $(".acc5").html("");

  statuss.Atk += acc5.atk;
  statuss.ReMove += acc5.reMovement;
  statuss.MBuff += acc5.MBuff;
  statuss.Agi += acc5.AGI;

  sumStatus(statuss);
  return statuss;
}
//how i get function
