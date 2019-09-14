// kopiowanie NA BOK

// Tutaj dodacie zmienne globalne do przechowywania elementów takich jak
// np. lista czy input do wpisywania nowego todo
let $list;
let $lastId = 0 ;
let $addForm;
let rootElement;
let liCollection = document.querySelectorAll('.test-item ');

const initialList = [
  'Dzisiaj robię usuwanie',
  'Nakarm psa'
  ];

/* Funkcje */
function main() {
  // Przypisuje do zmiennych/stałych kotwice do elementów html(DOM)
  prepareDOMElements();
  // Deklaruje obsługe eventów np klinicia itp
  prepareDOMEvents();

  // Wczytuje liste startową
  prepareInitialList();
}

function prepareDOMElements() {
  // To będzie idealne miejsce do pobrania naszych elementów z drzewa DOM i zapisanie ich w zmiennych
  $list = document.getElementById('list');
  $modal = document.getElementById('modal');

  //$buttonModal = document.querySelector('#show-modal');
  //$buttonConsole = document.querySelector('#console-modal');
  $addForm = document.getElementById('addForm');
  $newTodoItem = document.getElementById('newTodoItem');
}

function prepareDOMEvents() {
  // Wysyłanie (dodaweanie do listy) wpisu z formularza
  $addForm.addEventListener('submit', addTodoElement);
  $list.addEventListener('click', listClickManager)
}
  
function addTodoElement(event) {
  event.preventDefault();

  let inputValue = $newTodoItem.value.trim();
  if (inputValue !== '') {
    // $modal.classList.remove ('modal-show');

    let newItem = createElement(inputValue);
    $list.appendChild(newItem);
  } else {
    console.log('hej co robisz !!!!');
  }
};

function createElement(title) {
  // Tworzyc reprezentacje DOM elementu return newElement
  // return newElement
  if (title !== '') {
    const newElement = document.createElement('li');
    $lastId += 1;
    newElement.setAttribute('id', 'item-' + $lastId);
    
    //     dodawanie do li id 
    const inputField = document.createElement('input');
    inputField.setAttribute('value', title);
    inputField.setAttribute('name', 'item-' + $lastId);

    const delBtn = document.createElement('button');
    delBtn.setAttribute('data-targetId', 'item-' + $lastId);
    delBtn.setAttribute('class', 'deleteBtn');
    delBtn.innerText = 'Usuń';

    const editBtn = document.createElement('button');
    editBtn.setAttribute('data-targetId', 'item-' + $lastId);
    editBtn.setAttribute('class', 'editBtn');
    editBtn.innerText = 'Edytuj';

    const doneBtn = document.createElement('button');
    doneBtn.setAttribute('data-targetId', 'item-' + $lastId);
    doneBtn.setAttribute('class', 'doneBtn');
    doneBtn.innerText = 'Wykonane';

    newElement.appendChild(inputField);
    newElement.appendChild(editBtn);
    newElement.appendChild(doneBtn);
    newElement.appendChild(delBtn);
    localStorage.setItem('item-' + $lastId, title)
    return newElement;
  }
  return false;
}

/*function List(){
  let item = document.getElementById("todoInpot").value;
  let text = document.createTextNode(item);
  let newItem = document.createElement('li');
  newItem.appendChild(text);
  document.getElementById("todoList").appendChild(newItem);
} 
function prepareDOMElements() {
 // To będzie idealne miejsce do pobrania naszych elementów z drzewa DOM i zapisanie ich w zmiennych
  $popupInput = document.getElementById('popupInput');
} */

function prepareInitialList() {
  // Tutaj utworzymy sobie początkowe todosy. Mogą pochodzić np. z tablicy  */
  console.log(initialList.length);

  for (i = 0; i < initialList.length; i += 1) {
    console.log(i);
    console.log(initialList[i]);
    addNewElementToList(initialList[i]);
  };
  /*$addTodo.addEventListener('keydown', function(event){
    if(event.keyCode == 13){
      addNewElementToList(addTodo);
    } 
  });*/
}

function addTodo(element, index, tablica) {
  console.log('init: '+ element);
  addNewElementToList(element);
}

/* Treść pola input pobrana wcześniej przekazana jako parametr */
function addNewElementToList(title) {
  // obsługa dodawanie elementów do listy
  const newElement = createElement(title);
  $list.appendChild(newElement);
}

/* Działa po kliknieciu submit w formularzu dodawania nowego itema */
function listClickManager(event) {
  // Rozstrzygnięcie co dokładnie zostało kliknięte i wywołanie odpowiedniej funkcji
  let id = event.target.getAttribute('data-targetid');
  console.log(event.target.className);

  if (event.target.className === 'deleteBtn') {
    removeListElement(id);
  } else if (event.target.className === 'editBtn') {
    editListElement(id);
  } else if (event.target.className === 'doneBtn') {
    markElementAsDone(id);
  }
}

function removeListElement(id) {
  let liElement = document.querySelector('#' + id);
  $list.removeChild(liElement);
}

function editListElement(id, title) {
  // Pobranie informacji na temat zadania
  // Umieść dane w popupie
  //openPopup();
  //$popupInput.value = title;
  console.log('To trzeba zrobić -> editListElement');
}

function markElementAsDone(id) {
  //zaznacz element jako wykonany (podmień klasę CSS)
  let liElement = document.querySelector('#' + id);
  liElement.className += ' done ';
}

/*
function addDataToPopup(/* Title, author, id */ /*) {
  // umieść informacje w odpowiednim miejscu w popupie
}
/*
function acceptChangeHandler() {
  // pobierz dane na temat zadania z popupu (id, nowyTitle, nowyColor ...)
  // Następnie zmodyfikuj element listy wrzucając w niego nowyTitle, nowyColor...
  // closePopup()
}

function closePopup() {
  // Zamknij popup
}

function declineChanges() { //niepotrzebna raczej
  // closePopup()
}
*/

//To Do List, Mentor Paweł / Aga. W, https://github.com/Auleo/To_do_List*/
/*
  function toDo() {
      let  test = document.getElementById("toDoInput").nodeValue
      let  text = document.createTextNode(test)
      let  newItem = document.createElement('li')
      newItem.appendChild(text)
      document.getElementById("toDo").appendChild(newItem)
    
    }
  //obsługa dodawanie elementów do listy
  // Rozstrzygnięcie co dokładnie zostało kliknięte i wywołanie 
  // odpowiedniej funkcji służyć bdzie do eddit i przerobienia
}

/**************************************************************/
/* INIT */

document.addEventListener('DOMContentLoaded', main);
