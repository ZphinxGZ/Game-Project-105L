$(document).ready(() => {
  $(".weaboximgg1").on("click", swarpitem1);
  $(".weaboximgg2").on("click", swarpitem2);
  $(".armorboximgg1").on("click", swarpitem3);
  $(".armorboximgg2").on("click", swarpitem4);
});

function sumStatus(statuss) {
  $(".advanceskill").html(
    `<h4>ItemStatus</h4>
      <p>ATK%  : ${statuss.Atk}%</p>
      <p>Re.M. : ${statuss.ReMove}</p>
      <p>M.Buf : ${statuss.MBuff}%</p>
      <p>AGI   : ${statuss.Agi}%</p>`
  );
}

function swarpitem1() {
  const imgSrc = $(".weaboximgg1").find("img").attr("src");
  $(".weaboximgg1").html(``);

  if (imgSrc.includes("sword3")) {
    $(".sword3").html(`<img src="${imgSrc}" alt="">`);

    statuss.Atk -= sword3.atk;
    statuss.ReMove -= sword3.reMovement;
    statuss.MBuff -= sword3.MBuff;
    statuss.Agi -= sword3.AGI;
    sumStatus(statuss);
  } else if (imgSrc.includes("sword4")) {
    $(".sword4").html(`<img src="${imgSrc}" alt="">`);

    statuss.Atk -= sword4.atk;
    statuss.ReMove -= sword4.reMovement;
    statuss.MBuff -= sword4.MBuff;
    statuss.Agi -= sword4.AGI;
    sumStatus(statuss);
  } else {
    $(".sword5").html(`<img src="${imgSrc}" alt="">`);

    statuss.Atk -= sword5.atk;
    statuss.ReMove -= sword5.reMovement;
    statuss.MBuff -= sword5.MBuff;
    statuss.Agi -= sword5.AGI;
    sumStatus(statuss);
  }
  return statuss;
}

function swarpitem2() {
  const imgSrc = $(".weaboximgg2").find("img").attr("src");
  $(".weaboximgg2").html(``);
  //includes
  if (imgSrc.includes("sword1")) {
    $(".sword1").html(`<img src="${imgSrc}" alt="">`);

    statuss.Atk -= sword1.atk;
    statuss.ReMove -= sword1.reMovement;
    statuss.MBuff -= sword1.MBuff;
    statuss.Agi -= sword1.AGI;
    sumStatus(statuss);
  } else {
    $(".sword2").html(`<img src="${imgSrc}" alt="">`);

    statuss.Atk -= sword2.atk;
    statuss.ReMove -= sword2.reMovement;
    statuss.MBuff -= sword2.MBuff;
    statuss.Agi -= sword2.AGI;
    sumStatus(statuss);
  }

  return statuss;
}

function swarpitem3() {
  const imgSrc = $(".armorboximgg1").find("img").attr("src");
  $(".armorboximgg1").html(``);
  if (imgSrc.includes("acc1")) {
    $(".acc1").html(`<img src="${imgSrc}" alt="">`);
    statuss.Atk -= acc1.atk;
    statuss.ReMove -= acc1.reMovement;
    statuss.MBuff -= acc1.MBuff;
    statuss.Agi -= acc1.AGI;
    sumStatus(statuss);
  } else {
    $(".acc2").html(`<img src="${imgSrc}" alt="">`);

    statuss.Atk -= acc2.atk;
    statuss.ReMove -= acc2.reMovement;
    statuss.MBuff -= acc2.MBuff;
    statuss.Agi -= acc2.AGI;
    sumStatus(statuss);
  }

  return statuss;
}

function swarpitem4() {
  const imgSrc = $(".armorboximgg2").find("img").attr("src");
  $(".armorboximgg2").html(``);
  if (imgSrc.includes("acc3")) {
    $(".acc3").html(`<img src="${imgSrc}" alt="">`);

    statuss.Atk -= acc3.atk;
    statuss.ReMove -= acc3.reMovement;
    statuss.MBuff -= acc3.MBuff;
    statuss.Agi -= acc3.AGI;
    sumStatus(statuss);
  } else if (imgSrc.includes("acc4")) {
    $(".acc4").html(`<img src="${imgSrc}" alt="">`);
    statuss.Atk -= acc4.atk;
    statuss.ReMove -= acc4.reMovement;
    statuss.MBuff -= acc4.MBuff;
    statuss.Agi -= acc4.AGI;
    sumStatus(statuss);
  } else {
    $(".acc5").html(`<img src="${imgSrc}" alt="">`);
    statuss.Atk -= acc5.atk;
    statuss.ReMove -= acc5.reMovement;
    statuss.MBuff -= acc5.MBuff;
    statuss.Agi -= acc5.AGI;
    sumStatus(statuss);
  }
  return statuss;
}
