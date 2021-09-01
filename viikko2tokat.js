function Tarkista()
{
    var luku = parseInt(document.getElementById('luku').value);
    if (luku < 0) {
      document.getElementById('t1').innerHTML = "Luku on negatiivinen";
    }
    else {
      document.getElementById('t1').innerHTML = "Luku on positiivinen";
    }
}
function MuutaSanaksi()
{
    var viikonpaiva = parseInt(document.getElementById('viikpv').value);
    switch (viikonpaiva) {
      case 1:
        document.getElementById('t2').innerHTML = "Maanantai";
        break;
      case 2:
        document.getElementById('t2').innerHTML = "Tiistai";
        break;
      case 3:
        document.getElementById('t2').innerHTML = "Keskiviikko";
        break;
      case 4:
        document.getElementById('t2').innerHTML = "Torstai";
        break;
      case 5:
        document.getElementById('t2').innerHTML = "Perjantai";
        break;
      case 6:
        document.getElementById('t2').innerHTML = "Lauantai";
        break;
      case 7:
        document.getElementById('t2').innerHTML = "Sunnuntai";
        break;
      default:
        document.getElementById('t2').innerHTML = "Anna oikea luku! (1-7)";
    }
}
function TarkistaVuosi()
{
  var vuosi = parseInt(document.getElementById('vuosi').value);
  if (vuosi % 4 == 0 && vuosi % 100 != 0)
  {
    document.getElementById('t3').innerHTML = "Vuosi on karkausvuosi";
  }
  else if (vuosi % 400 == 0)
  {
    document.getElementById('t3').innerHTML = "Vuosi on karkausvuosi";
  }
  else {
    document.getElementById('t3').innerHTML = "Vuosi ei ole karkausvuosi";
  }
}
function laskeKeskiarvo()
{
  var luku1 = parseInt(document.getElementById('luku1').value);
  var luku2 = parseInt(document.getElementById('luku2').value);
  var luku3 = parseInt(document.getElementById('luku3').value);
  var luku4 = parseInt(document.getElementById('luku4').value);
  var luku5 = parseInt(document.getElementById('luku5').value);
  var summa, keskiarvo;
  summa = luku1 + luku2 + luku3 + luku4 + luku5;
  keskiarvo = summa / 5;
  document.getElementById('t4').innerHTML = "Lukujen summa on: " + summa + " ja keskiarvo on: " + keskiarvo;
}
function TeeKertotaulu()
{
  var kerrottava = parseInt(document.getElementById('kerrottava').value);
  var tuloste = "";
  for(var i = 1; i < 11; i++)
  {
    tuloste += kerrottava + " * " + i + " = " + kerrottava * i + "<br/>";
  }
  document.getElementById('t5').innerHTML = tuloste;
}
