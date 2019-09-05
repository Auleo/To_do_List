
 function getWeather(city) {
  console.log('Pogoda dla miasta: ' + city + ', jest wspaniała');
  return 'Pogoda dla miasta: ' + city + ', jest wspaniała';
}

 function request(url, callback) {
 let xhr = new XMLHttpRequest();

 xhr.open("GET", url, true);

  xhr.addEventListener('load', function () {
     if (this.status === 200) {
      let res = JSON.parse(this.responseText);
 
       if (typeof callback !== 'undefined') {
         callback(res[0].capital);
       }
    }
   });

  xhr.addEventListener('error', function () {
     console.log('Wystąpił błąd');
   });

   xhr.send();
}


 request("https://restcountries.eu/rest/v2/name/poland", getWeather);
 let promise = new Promise((resolve, reject) => {
   setTimeout(() => {
     resolve('Asynchronicznie');
   }, 3000);
   console.log('Synchronicznie!');
 });

 promise.then(param => console.log(param))

async function test() {
  const res = await fetch("https://restcountries.eu/rest/v2/name/poland");
  const res2 = await fetch("https://restcountries.eu/rest/v2/name/poland");
}

test();


// Tutaj dodacie zmienne globalne do przechowywania elementów takich jak np. lista czy input do wpisywania nowego todo
let $list;
let lastId = 0;
let $popupInput;
let $addTodoBtn;
let $myInput;
const initialList = ['Dzisiaj robię usuwanie', 'Nakarm psa', '   '];

function main() {
  prepareDOMElements();
  prepareDOMEvents();
  prepareInitialList();
}

function prepareDOMElements() {
  // To będzie idealne miejsce do pobrania naszych elementów z drzewa DOM i zapisanie ich w zmiennych
  $list = document.getElementById('list');
  $popupInput = document.getElementById('popupInput');
  $addTodoBtn = document.getElementById('addTodo');
  $myInput = document.getElementById('myInput');
}

function prepareDOMEvents() {
  // Przygotowanie listenerów
  $list.addEventListener('click', listClickManager);
  $addTodoBtn.addEventListener('click', addNewTodoToList);
}

function prepareInitialList() {
  // Tutaj utworzymy sobie początkowe todosy. Mogą pochodzić np. z tablicy
  initialList.forEach(todo => {
    addNewElementToList(todo);
  });
}

function addNewElementToList(title   /* Title, author, id */) {
  //obsługa dodawanie elementów do listy
  // $list.appendChild(createElement('nowy', 2))
  const newElement = createElement(title);
  $list.appendChild(newElement);
}

function createElement(title /* Title, author, id */) {
  // Tworzyc reprezentacje DOM elementu return newElement
  // return newElement
  const newElement = document.createElement('li');
  // lastId += 1;
  newElement.id = 'todo-' + (++lastId);

  const titleElement = document.createElement('span');
  titleElement.innerText = title;

  const delButton = document.createElement('button');
  delButton.innerText = 'delete';
  delButton.className = 'btn-delete';

  newElement.appendChild(titleElement);
  newElement.appendChild(delButton);

  return newElement;
}

function addNewTodoToList() {
  if ($myInput.value.trim()) {
    addNewElementToList($myInput.value);
    $myInput.value = '';
  }
}

function listClickManager(event) {
  // Rozstrzygnięcie co dokładnie zostało kliknięte i wywołanie odpowiedniej funkcji
  // event.target.parentElement.id
  let id = event.target.parentElement.id;

  if (event.target.className === 'btn-delete') {
    removeListElement(id);
  } else if (event.target.className === 'btn-edit') {
    let title = document.querySelector('#' + id).querySelector('span').innerText;
    editListElement(id, title);
  } else if (event.target.className === 'btn-done') {
  
  }
}

function removeListElement(id) {
  let liElement = document.querySelector('#' + id);
  $list.removeChild(liElement);
}

function editListElement(id, title) {
  // Pobranie informacji na temat zadania
  // Umieść dane w popupie
  openPopup();
  $popupInput.value = title;
}

function addDataToPopup(/* Title, author, id */) {
  // umieść informacje w odpowiednim miejscu w popupie
}

function acceptChangeHandler() {
  // pobierz dane na temat zadania z popupu (id, nowyTitle, nowyColor ...)
  // Następnie zmodyfikuj element listy wrzucając w niego nowyTitle, nowyColor...
  // closePopup()
}

function openPopup() {
  // Otwórz popup
}

function closePopup() {
  // Zamknij popup
}

function declineChanges() { //niepotrzebna raczej
  // closePopup()
}

function markElementAsDone(/* id */) {
  //zaznacz element jako wykonany (podmień klasę CSS)
}

document.addEventListener('DOMContentLoaded', main);