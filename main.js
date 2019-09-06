console.log('seagreen background')

const houses =["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

const cardAppear = () => {
    document.getElementById('appear').style.display = "block";
}

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint
}

const cardPrinting = () => {
    let domString = '';
    domString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Name here</h5>
      <h6 class="card-subtitle mb-2 text-muted">${houses[Math.floor(Math.random() * houses.length)]}</h6>
      <p class="card-text">Congratulations! Don't die!</p>
      <button href="#" class="card-link">Expel</button>
    </div>
  </div>`
  printToDom(domString, 'random-card');
}


document.getElementById('sort').addEventListener('click', cardPrinting);









