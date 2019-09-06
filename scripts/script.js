// Tutaj dodacie zmienne globalne do przechowywania elementów takich jak
// np. lista czy input do wpisywania nowego todo
let $list;
let lastID = 0 ;
const $addForm = document.getElementById('addForm');
const initialList = [
  'Dzisiaj robię usuwanie',
  'Nakarm psa'
  ];

function main() {
  prepareDOMElements();
  prepareDOMEvents();
  prepareInitialList();
}
/*function List(){
  let item = document.getElementById("todoInpot").value;
  let text = document.createTextNode(item);
  let newItem = document.createElement('li');
  newItem.appendChild(text);
  document.getElementById("todoList").appendChild(newItem);
} */
  // To będzie idealne miejsce do pobrania naszychlet $list;
let $popupInput;
let $addTodoBtn;
let $myInput;

function prepareDOMElements() {
 // To będzie idealne miejsce do pobrania naszych elementów z drzewa DOM i zapisanie ich w zmiennych
  $list = document.getElementById('list');
  $popupInput = document.getElementById('popupInput');
  $addTodoBtn = document.getElementById('addTodo');
  $myInput = document.getElementById('myInput'); //=< kasowac

}
function prepareDOMEvents() {
  // Przygotowanie listenerów
  // Dodawania nowego elementu listy todo po kliknieciu submita w formularzu
  $addForm.addEventListener('submit', addNewTodoToList(event));

}

function prepareEvents(){
  rootElement.addEventListener('clik', function(e) {
    if (e.target.nodeName.toLowerCase() === 'li') {
      if( counter > 10 ) { 
        rootElement.removeChild(e.target);
    }   else {
        counter++
    }
  }
});
}
/*  function let id = event.target.parentElement.id;
  if (event.target.className === 'btn-delete') {
    removeListElement(id);
  }*/
function prepareInitialList() {
  // Tutaj utworzymy sobie początkowe todosy. Mogą pochodzić np. z tablicy
  initialList.forEach( todo );
  /* Evil clicker */
    console.log($list.children.length);
  for (i = 0; i < $list.children.length; i += 1) {
    console.log(i);
    console.log($list.children[i].children[0]);
    /*$list.children[i].children[0].addEventListener(
      'click',
      removeListElement(
        $list.children[i].children[0].getAttribute('data-targetId')
      )
    );*/
  }
}
/*
e.preventDefault();
{
  if ($myInput.value.trim() !=='') { 
    $form.addEventListener('submit', function(e) {
      e.preventDefault(); {
        if ($myInput.value.trim() !=='') {
          sendTodoToServer();
        }
      }
    }); 
  }
}
$todoInput.addEventListener('keydown', function(event){
  // if(event.keyCode == 13){
  // addNewElementToList(todo);
// } 
*/




function todo(element, index, tablica) {
  console.log('init: '+ element);
  addNewElementToList(element);
}

/* Treść pola input pobrana wcześniej przekazana jako parametr */
function addNewElementToList(title) {
  // obsługa dodawanie elementów do listy
  const newElement = createElement(title);
  $list.appendChild(newElement);
}
/*
function createElement(title /* Title, author, id ) {
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
*/
/**
 * Działa po kliknieciu submit w formularzu dodawania nowego itema
 */
function addNewTodoToList(event) {
  // Przerywa wysyłanie sie formularza po klikniciu "Dodaj mnie"
  event.preventDefault();
  console.log($myInput.value);
  let inputValue = $myInput.value.trim();
  if (inputValue !== false && inputValue !== "") { 
    addNewElementToList($myInput.value);
  }
  $myInput.value = '';
}

/*
function listClickManager(event) {
  // Rozstrzygnięcie co dokładnie zostało kliknięte i wywołanie odpowiedniej funkcji
  // event.target.parentElement.id
  let id = event.target.parentElement.id;

  /*if (event.target.className === 'btn-delete') {
    removeListElement(id);
  } else if (event.target.className === 'btn-edit') {
    let title = document.querySelector('#' + id).querySelector('span').innerText;
    editListElement(id, title);
  } else if (event.target.className === 'btn-done') {
  
  }
}*/

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


/*function prepareInitialList() {
  let newElement = document.createElement('li');
  newElement.className = 'text-item';
  newElement.id= 'test10;'
  newElement.innerText = 'item 10';
  $list.appendChild(newElement);

  // Tutaj utworzymy sobie początkowe todosy. Mogą pochodzić np. z tablicy
  initialList.forEach(todo => {
    addNewElementToList(todo);

  });
}*/
/* To Do List, Mentor Paweł / Aga. W, https://github.com/Auleo/To_do_List*/
function addNewElementToList(title) {
  $list.appendChild(createElement(title));
}
  function toDo() {
      let  test = document.getElementById("toDoInput").nodeValue
      let  text = document.createTextNode(test)
      let  newItem = document.createElement('li')
      newItem.appendChild(text)
      document.getElementById("toDo").appendChild(newItem)
    
    }

 //obsługa dodawanie elementów do listy
  
/**
 * @param {string} title 
 * Tworzenie nowego elementu
 * To Do List, Mentor Paweł 
 * Aga. W, https://github.com/Auleo/To_do_List
 */
function createElement(title) {
  // Tworzyc reprezentacje DOM elementu return newElement
  // return newElement
  if (title != '') {
    const newElement = document.createElement('li');
    let curentDate = new Date();
    let uniqId = 'uniqId'+curentDate.getTime();
    newElement.setAttribute('id',uniqId);
    // dodawanie do li id 
    const delBtn = document.createElement('button');
    delBtn.setAttribute('data-targetId',uniqId);
    delBtn.innerText = 'Usuń';
    
    newElement.innerText = title;
    newElement.appendChild(delBtn);

    return newElement;
  }
  return false;
}
/*
function listClickManager( event-event.target) {
  event.target.parentElement.id
  if (event.target.className === 'item') { editListElement(id) }
  // Rozstrzygnięcie co dokładnie zostało kliknięte i wywołanie odpowiedniej funkcji
 
}
*/
function editListElement( id ) {
  // Pobranie informacji na temat zadania
  // Umieść dane w popupie
}

/**************************************************************/
/* INIT */
document.addEventListener('DOMContentLoaded', main);
