//to do:
// expel button;
// clear field;

//array of items to be randomly printed

const houses =["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

//printer prints items once

const printer = (toPrint, divId) => {
  document.getElementById(divId).innerHTML = toPrint
}

const sortingPrinter = () => {
  let string = '';
  string = `
  <form class="form-inline">
  <div class="form-group mb-2">
    <label for="whatName" class="sr-only">yourName</label>
    <input type="text" readonly class="form-control-plaintext" id="whatName" value="What... is your name?">
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="studentName" class="sr-only">Student name</label>
    <input type="text" class="form-control" id="studentName" placeholder="Name here, please">
  </div>
  <button type="button" class="btn btn-primary mb-2" id="sort">Sort!</button>
  </form>`
  printer(string, 'sorting');
}

//printToDom because one should print more than once, while the above prints once

const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML += toPrint
}

let i = 0;

const cardPrinting = (arr) => {
    let houseName = arr[Math.floor(Math.random() * arr.length)];
    let nameValue = document.getElementById('studentName').value;
    let domString = '';
    domString += `
    <div class="card">
    <div class="card-body" class="card-${i}">
      <h5 class="card-title">${nameValue}</h5>
      <h6 class="card-subtitle mb-2 text-muted">You'll fit well in ${houseName}!</h6>
      <p class="card-text">Congratulations! Don't die!</p>
      <button value="${i}" class="card-link" id="expel">Expel</button>
    </div>
  </div>`
  i += 1;
  printToDom(domString, 'random-card');
}

//below: a global button click listener

document.body.addEventListener('click', (e) => {
    if (e.target.id === 'sortButton') {
      sortingPrinter();
    }
    if (e.target.id === 'sort') {
      cardPrinting(houses);
    }
    if (e.target.id === 'expel') {
      const cardValue = e.target.value;
      const cardId = `card-${cardValue}`;
      const card = document.getElementById(cardId);
      card.parentNode.removeChild(card);
    }
  })
