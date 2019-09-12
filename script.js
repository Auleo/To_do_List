// Tutaj dodacie zmienne globalne do przechowywania elementów takich jak
// np. lista czy input do wpisywania nowego todo
let $list;
let lastID = 0 ;
let $popupInput;
const initialList = ['Dzisiaj robię usuwanie', 'Nakarm psa'];

function main() {
  prepareDOMElements();
  prepareDOMEvents();
  prepareInitialList();
}

function prepareDOMElements() {
    const container = document.querySelector('#list');
    const headlines = container.querySelectorAll('li');
    $list = document.getElementById('list');
    $popupInput = document.getElementById('popupinput');
}

function List(){
  let item = document.getElementById("todoInpot").value
  let text = document.createTextNode(item)
  let newItem = document.createElement('li')
  newItem.appendChild(text)
  document.getElementById("todoList").appendChild(newItem)
}
  // To będzie idealne miejsce do pobrania naszychlet $list;
let lastId = 0;
/*  let $popupInput; SyntaxError: Identifier '$popupInput' has already been declared*/
let $addTodoBtn;
let $myInput;

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
  $myInput = document.getElementById('myInput'); //=< kasowac mozna jest           c*/
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
/*
function closePopup() {
  // Zamknij popup
}
*/
function declineChanges() { //niepotrzebna raczej
  // closePopup()
}

function markElementAsDone(/* id */) {
  //zaznacz element jako wykonany (podmień klasę CSS)
}
/*         poniżj peek------------------ nawias
document.addEventListener('DOMContentLoaded', main);
  // elementów z drzewa DOM i zapisanie ich w zmiennych
  $list = document.getElementById('list');
}       */

function prepareDOMEvents() {
  let liCollection = document.querySelectorAll('.test-item[i]');
  console.log('.test-item[i]+1');  
liCollection.forEach(function (li , index) { 
li.addEventListener('click', function() {

console.log(index +1);      
});

  // Przygotowanie listenerów
  let rootElement = document.querySelector('ul');
  let liCollection = document.querySelectorAll('.item-item');{

 /*
  $list.addEventListener('click', listClickManager);
    let rootElement={ 'ul': li +1 , btn__done:'Potwierdz', btn_cancel: 'Usuń' }
  }
*/
let ul = { 
    li : " $addEventListener" 
};
     edit.editListElement = "Edit"
console.log(lista.keys(ul));

const entries = ul.entries(edit);
console.log('edit', edit);

	for ( let  i = 0; i< entries[i].length; i++ ) {
	console.log(entries [i][j]);
}
/*
let list = { 
  li : " $addEventListener" 
};
li.list = "Edit"

console.log(li.keys(list));
const entries = ul.entries(ob);
console.log('lista', lista);
for ( let  i = 0; i< entries.length; i++ ) {
console.log(entries [i]);
}

  
/*
function prepareInitialList() {
  letnewElement = document.createElement('li');
  newElement.className = 'text-item';
  newElement.id= 'test10;'
  newElement.innerText = 'item 10';
  rootElement.appendChild(newElement);

  // Tutaj utworzymy sobie początkowe todosy. Mogą pochodzić np. z tablicy
  initialList.forEach(todo => {
    addNewElementToList(todo);

  });
} */

function addNewElementToList(title   /* To Do List, Mentor Paweł / Aga. W, https://github.com/Auleo/To_do_List*/) {
  $list.appendChild(createElement('nowy', 2));

  function toDo() {
    let  test = document.getElementById("toDoInput").nodeValue
    let  text = document.createTextNode(test)
    let  newItem = document.createElement('li')
    newItem.appendChild(text)
    document.getElementById("toDo").appendChild(newItem)
  
    }

 //obsługa dodawanie elementów do listy
function createElement(title) /* Tworzenie nowego elementu 
  // Tworzyc reprezentacje DOM elementu return newElement
  // return newElement 
  const newElement = document.createElement(li){ 
    console.log('li')
  newElement.innerText = title;
    console.log(title)
    forEach ( function( newElemen (++list ));

  newElement.inerText= document.createElement('span')
  return newElement;

}
/*
function listClickManager(/* event- event.target ) {
  event.target.parentElement.id
  if (event.target.className === 'test-item') { editListElement(id) }
  // Rozstrzygnięcie co dokładnie zostało kliknięte i wywołanie odpowiedniej funkcji
  // 
  // 
}
*
function removeListElement( id ) {
    let usun = id.removeChild    {
      usun.forEach (function (listID, 
        
        ) ))
  }
}
/*     
function editListElement(/* id *) {
  // Pobranie informacji na temat zadania
  // Umieść dane w popupie
} */
function addDataToPopup(/* Title, author, id */ ) {
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
