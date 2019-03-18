/*
JavaScript p/ prototipagem e desenvolvimento do site do projeto
Base criada por Archie
Última atualização: 12/03/2019
*/

// Script Import
// Base Code

function calcseed() {

  var seed = semente.value;
  var seedcount = seedc.value;

  var calcseedvalue = seed * seedcount;

  seedtotal.innerHTML = `Você vai gastar em média R$${calcseedvalue.toFixed(2)} com a semente desejada`
}

function calcstuff() {

  var Pwh = pw.value;
  var hourpm = hours.value;

  var calcstuffvalue = Pwh * hourpm * 30;

  pwtotal.innerHTML = `Você gasta cerca de <strong>${calcstuffvalue}Wh</strong> por Mês (30 dias)`
}
