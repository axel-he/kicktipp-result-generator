var inputHeim = document.querySelectorAll('[id$=heimTipp]');
var inputGast = document.querySelectorAll('[id$=gastTipp]');
var quoteHeim = document.querySelectorAll('[name=wettquoteHeim] > div > a');
var quoteGast = document.querySelectorAll('[name=wettquoteGast] > div > a');

function kicktippFromOddsSimple() {
  for (var i = 0; i < 9; i++) {
    var numQuoteHeim = parseFloat(quoteHeim[i].innerText);
    var numQuoteGast = parseFloat(quoteGast[i].innerText);

    if (numQuoteGast > numQuoteHeim) {
      inputHeim[i].value = '1';
      inputGast[i].value = '0';
    } else if (numQuoteGast < numQuoteHeim) {
      inputHeim[i].value = '0';
      inputGast[i].value = '1';
    } else {
      inputHeim[i].value = '1';
      inputGast[i].value = '1';
    }
  }
}

function kicktippRandom(draw = 8) {
  for (var i = 0; i < 9; i++) {
    var numQuoteHeim = Math.floor(Math.random() * draw)
    var numQuoteGast = Math.floor(Math.random() * draw)

    if (numQuoteGast > numQuoteHeim) {
      inputHeim[i].value = '1';
      inputGast[i].value = '0';
    } else if (numQuoteGast < numQuoteHeim) {
      inputHeim[i].value = '0';
      inputGast[i].value = '1';
    } else {
      inputHeim[i].value = '1';
      inputGast[i].value = '1';
    }
  }
}

function saveTipp() {
  var elem = document.getElementsByTagName('form')[0];
  elem.submit();
}

function nextSpieltag() {
  var elem = document.getElementsByClassName('prevnextNext')[0];
  elem.click();
}

if (quoteHeim.length == inputHeim.length) {
  console.log('odds found -> generate from odds');

  kicktippFromOddsSimple();
} else {
  console.log('no odds -> random results');

  kicktippRandom();
}

if (confirm('Save results?')) {
  saveTipp();
}
