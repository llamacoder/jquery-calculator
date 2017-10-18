document.addEventListener("DOMContentLoaded", function() {

  gExpression = "";
  ERROR = "Error";

  // put the current expression on the screen
  function updateScreen() {
    let screen = document.querySelector('#screen');
    screen.innerText = gExpression;
  }

  function processNumberOrOperator(event) {
    //  it is a number
      gExpression += event.target.innerText;
      updateScreen();
  }

  function processClear() {
    gExpression = "";
    updateScreen();
  }

  function processEquals() {
    if (gExpression === ERROR) {
      return;
    }
      while (gExpression.search('x') !== -1) {
        gExpression = gExpression.replace("x", "*");
      }
      while (gExpression.search('\u00F7') !== -1) {
        gExpression = gExpression.replace("\u00F7", "/");
      }
      try {
        gExpression = eval(gExpression);
        if (isFinite(gExpression) === false) {
          gExpression = ERROR;
        }
      }
      catch(err) {
        gExpression = ERROR;
      }
      updateScreen();
  }

  // figure out which button was clicked
  // and handle it
  function processButtonClick(event) {
    if (event.target.id === "clear") {
      processClear();
    } else if (event.target.id === "equals") {
      processEquals();
    } else  if ($(event.target).hasClass('operator')) {
      processNumberOrOperator(event);
    } else  if (event.target.tagName === "SPAN"){
      processNumberOrOperator(event);
    }
  }


  // add event listener for buttons
 function addListenersToButtons() {
    let btnContainer = $("#buttons-container");
    btnContainer.click(function() {
      processButtonClick(event);
    })
 }


 addListenersToButtons();


});
