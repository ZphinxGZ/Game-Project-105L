const status = [
  (basic = {
    HP: 250,
    MP: 100,
    Def: 0,
    ATK: 0,
  }),
  (advance = {
    buffName: "", // wep. atk AGI acc. reMove 50 DEMbuff -10
    atk: 0,
    reMovement: 0,
    MBuff: 0,
    AGI: 0,
  }),
];
const item = [
  (sword1 = {
    buffName: "weapon",
    id: 1,
    img: "./img/sword1.png",
    atk: 15,
    reMovement: 0,
    MBuff: 0,
    AGI: 20,
  }),
  (sword2 = {
    buffName: "weapon",
    id: 2,
    img: "./img/sword2.png",
    atk: 20,
    reMovement: 0,
    MBuff: 0,
    AGI: 25,
  }),
  (sword3 = {
    buffName: "weapon",
    id: 3,
    img: "./img/sword3.png",
    atk: 35,
    reMovement: 0,
    MBuff: 0,
    AGI: 5,
  }),
  (sword4 = {
    buffName: "weapon",
    id: 4,
    img: "./img/sword4.png",
    atk: 40,
    reMovement: 0,
    MBuff: 0,
    AGI: 5,
  }),
  (sword5 = {
    buffName: "weapon",
    id: 5,
    img: "./img/sword5.png",
    atk: 35,
    reMovement: 0,
    MBuff: 0,
    AGI: 10,
  }),
  (acc1 = {
    buffName: "acce",
    id: 6,
    img: "./img/acc1.png",
    atk: 0,
    reMovement: 3,
    MBuff: 15,
    AGI: 0,
  }),
  (acc2 = {
    buffName: "acce",
    id: 7,
    img: "./img/Acce/acc2.png",
    atk: 7,
    reMovement: 2,
    MBuff: 40,
    AGI: 0,
  }),
  (acc3 = {
    buffName: "acce",
    id: 8,
    img: "./img/Acce/acc3.png",
    atk: 0,
    reMovement: 1,
    MBuff: 15,
    AGI: 0,
  }),
  (acc4 = {
    buffName: "acce",
    id: 9,
    img: "./img/Acce/acc4.png",
    atk: 0,
    reMovement: 3,
    MBuff: 10,
    AGI: 0,
  }),
  (acc5 = {
    buffName: "acce",
    id: 10,
    img: "./img/Acce/acc5.png",
    atk: 0,
    reMovement: 1,
    MBuff: 30,
    AGI: 0,
  }),
];

$(document).ready(() => {
  //แสดงรูปใน inventory
  $(".invent-box-sub-front").html(
    `<div class="imgboxc">
      <div class="boxxxxx sword1"><img src="${sword1.img}" alt=""></div>
      <div class="boxxxxx sword2"><img src="${sword2.img}" alt=""></div>
      <div class="boxxxxx sword3"><img src="${sword3.img}" alt=""></div>
      <div class="boxxxxx sword4"><img src="${sword4.img}" alt=""></div>
      <div class="boxxxxx sword5"><img src="${sword5.img}" alt=""></div>
    </div>
    <div class="imgboxc">
      <div class="boxxxxx acc1"><img src="${acc1.img}" alt=""></div>
      <div class="boxxxxx acc2"><img src="${acc2.img}" alt=""></div>
      <div class="boxxxxx acc3"><img src="${acc3.img}" alt=""></div>
      <div class="boxxxxx acc4"><img src="${acc4.img}" alt=""></div>
      <div class="boxxxxx acc5"><img src="${acc5.img}" alt=""></div>
    </div>`
  );
  //แสดงรูปใน ของสวมใส่
  $(".weaboxx").html(
    `<div class="weaboximgg1">
      
    </div>
    <div class="weaboximgg2">
     
    </div>`
  );
  $(".armorbox").html(
    `<div class="armorboximgg1">
      
    </div>
    <div class="armorboximgg2">
     
    </div>`
  );
  //แสดง status
  $(".playerinfo-sub").html(
    `<div class="basicskill">
      <h4>Basic</h4>
      <p>HP : ${basic.HP}</p>
      <p>MP : ${basic.MP}</p>
      <p>ATK : ${basic.ATK}</p>
      <p>Def. : ${basic.Def}</p>
    </div>
    <div class="advanceskill">
      <h4>ItemStatus</h4>
      <p>ATK%  : ${advance.atk}%</p>
      <p>Re.M. : ${advance.reMovement}</p>
      <p>M.Buf : ${advance.MBuff}%</p>
      <p>AGI   : ${advance.AGI}%</p>
    </div>`
  );
});
