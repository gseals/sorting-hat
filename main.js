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
    <input type="text" class="form-control" id="studentName" required placeholder="Name here, please">
  </div>
  <button type="button" class="btn btn-primary mb-2" id="sort">Sort!</button>
  </form>`
  printer(string, 'sorting');
}

//printToDom because one should print more than once, while the above prints once

const printToDom = (toPrint, divId) => {
  document.getElementById(divId).innerHTML += toPrint
}

const cardPrinting = (arr) => {
    let houseName = arr[Math.floor(Math.random() * arr.length)];
    let nameValue = document.getElementById('studentName').value;
    let domString = '';
    domString += `
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">${nameValue}</h5>
      <h6 class="card-subtitle mb-2 text-muted">You'll fit well in ${houseName}!</h6>
      <p class="card-text">Congratulations! Don't die!</p>
      <button  class="card-link expel">Expel</button>
    </div>
  </div>`
  printToDom(domString, 'random-card');
  studentName.value = "";
  assignEventListeners();
}

const assignEventListeners = () => {
  let listeners = document.getElementsByClassName('expel');
  for (let i = 0; i < listeners.length; i++) {
    listeners[i].addEventListener ('click', (e) => {
      e.target.parentElement.parentElement.remove();
    })
  }
}

//a collection of items is an array
//below: a global button click listener

document.body.addEventListener('click', (e) => {
    if (e.target.id === 'sortButton') {
      sortingPrinter();
    }
    if (e.target.id === 'sort') {
      cardPrinting(houses);
      // stylingName(houses);
    }
  })

// This will take some work. The accompanying files in CSS are also commented out. Maroon is assigned to each card printed. Have to undo whatever kink is in the machine.

  // const stylingName = (dataIncoming) => {
  //   const houseColor = document.getElementsByClassName("card-body")
  //   for(let i =0; i<dataIncoming.length; i++){
  //     if (dataIncoming[0]) {
  //     houseColor[i].classList.add("maroon");
  //   } else if (dataIncoming[1]) {
  //     houseColor[i].classList.add("green");
  //   } else if (dataIncoming[2]) {
  //     houseColor[i].classList.add("yellow");
  //   } else if (dataIncoming[3]) {
  //     houseColor[i].classList.add("blue");
  //   }
  //  }
  // };
