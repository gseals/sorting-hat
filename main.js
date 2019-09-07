const houses =["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

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
  <button type="button" class="btn btn-primary mb-2" id="sort" onclick="cardPrinting()">Sort!</button>
  </form>`
  printer(string, 'sorting');
}

const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML += toPrint
}

let i = 0;

const cardPrinting = (arr) => {
    let houseName = arr[Math.floor(Math.random() * houses.length)];
    let nameValue = document.getElementById('studentName').value;
    let domString = '';
    domString += `
    <div class="card">
    <div class="card-body" class="card-${i}">
      <h5 class="card-title">${nameValue}</h5>
      <h6 class="card-subtitle mb-2 text-muted">You'll fit well in ${houseName}!</h6>
      <p class="card-text">Congratulations! Don't die!</p>
      <button value="${i}" class="card-link">Expel</button>
    </div>
  </div>`
  i += 1;
  printToDom(domString, 'random-card');
}

document.body.addEventListener('click', (e) => {
    if (e.target.id === 'sortButton') {
      sortingPrinter();
    }
    if (e.target.id === 'sort') {
      cardPrinting(houses);
    }

})

//these are the buttons that trigger the above functions

// document.getElementById('sortButton').addEventListener('click', sortingPrinter);
// document.getElementById('sort').addEventListener('click', cardPrinting);   this doesn't work. why?????