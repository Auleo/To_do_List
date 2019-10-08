// Tutaj dodacie zmienne globalne do przechowywania elementów takich jak
// np. lista czy input do wpisywania nowego todo
let $list;
let lastId = 0;
let lastID = 0;
let $popupInput;
// To będzie idealne miejsce do pobrania naszychlet $list;
/* let $popupInput; SyntaxError: Identifier '$popupInput' has already been declared*/
let $addTodoBtn;
let $myInput;
const initialList = ['Dzisiaj robię usuwanie', 'Nakarm psa'];

function main() {
  prepareDOMElements();
  prepareDOMEvents();
  prepareInitialList();
}
function prepareDOMElements() {
  const container = document.getElementById('list');
  const headlines = container.querySelectorAll('li');
  // To będzie idealne miejsce do pobrania naszych elementów z drzewa DOM i zapisanie ich w zmiennych
  $list = document.getElementById('list');
  $popupInput = document.getElementById('popupinput');
  $addTodoBtn = document.getElementById('addTodo');
  $myInput = document.getElementById('myInput'); //=< kasowac mozna jest           c*/
}

function prepareDOMEvents() {
  // Przygotowanie listenerów
  //$list.addEventListener('click', listClickManager);
  //$addTodoBtn.addEventListener('click', addNewTodoToList);
  let liCollection = document.querySelectorAll('.test-item[i]');
  console.log('.test-item[i]+1');  
  liCollection.forEach(function (li , index) { 
    li.addEventListener('click', function() {
      console.log(index +1);      
    }
    );
  });
} 
function prepareInitialList() {
  // Tutaj utworzymy sobie początkowe todosy. Mogą pochodzić np. z tablicy
  initialList.forEach(todo => {
    addNewElementToList(todo);
  });
}

function List(){
  let item = document.getElementById("todoInpot").value
  let text = document.createTextNode(item)
  let newItem = document.createElement('li')
  newItem.appendChild(text)
  document.getElementById("todoList").appendChild(newItem)
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
      
function getItemsBySerwer () {
  $list.innerHTML = '';
  axios.get ('http://195.181.210.249:3000/todo/').then (function (response) {
    if (response.status === 200) {
      response.data.forEach (todo => {
        newElementToList (todo.title, todo.id, todo.extra);
      });
    }
  });
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

        


    if (event.target.className === 'btn-edit') {
      let title = document
        .querySelector ('li[data-id="' + id + '"]')
        .querySelector ('span').innerText;
      curentTodo = id; 
  } else if (event.target.className === 'btn-done') {
    

    const editButton = document.createElement ('button');
    editButton.innerText = 'edit';
    editButton.className = 'btn-edit';
  
  }


  const newElement = createElement (title, id, extra);
  //
  $list.appendChild (newElement);
  }
  function createElementSerwer (title) {
  axios
  .post ('http://195.181.210.249:3000/todo/', {title: title})
  .then (response => {
  if (response.data.status === 0) {
  getItemsBySerwer ();
  }
  console.log (response);
  });
  }
  function createElement (title, id, extra /* Title, author, id */) {
  // Tworzy  c reprezentacje DOM elementu return newElement
  // return newElement
  const newElement = document.createElement ('li');
  if (extra != null) {
  newElement.classList.add ('done');
  }

  newElement.setAttribute ('data-id', id);
  const titleElement = document.createElement ('span');
  titleElement.innerText = title;

  const titleStyle = document.createElement ('div');
  titleStyle.className = 'btn-style';

  const editButton = document.createElement ('button');
  editButton.innerText = 'edit';
  editButton.PUT = http://195.181.210.249:3000/todo/; 
  editButton.className = 'btn-edit';


  function editButton (id, title) {
    // Umieść dane w popupie
    let liElement = document.querySelector ('li[data-id="' + id + '"]');
    modal.classList.add ('modal-show');
    console.log (liElement);
  }

//o podanym w URLu id. Aktualizacja wymaga przesłania parametru title w celu modyfikacji tytułu TODO, przykład: {"title":"test"}


  const delButton = document.createElement ('button');
  delButton.innerText = 'delete';
  delButton.className = 'btn-delete'; 
  delliElement ="http://195.181.210.249:3000/todo/";

  const okButton = document.createElement ('button');
  okButton.innerText = 'ok';
  okButton.className = 'btn-ok';
  newElement.appendChild (titleElement);
  newElement.appendChild (titleStyle);
  titleStyle.appendChild (editButton);
  titleStyle.appendChild (delButton);
  titleStyle.appendChild (okButton);

  return newElement;
  }
  function addNewTodoToList () {
  if ($myInput.value) {
  //addNewElementToList($myInput.value);
  createElementSerwer ($myInput.value);
  $myInput.value = '';
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

function listClickManager (event) {
  // Rozstrzygnięcie co dokładnie zostało kliknięte i wywołanie odpowiedniej funkcji
  // event.target.parentElement.id
  let id = event.target.parentElement.parentElement.dataset.id;
  let extra = '1';
  if (event.target.className === 'btn-edit') {
    let title = document
      .querySelector ('li[data-id="' + id + '"]')
      .querySelector ('span').innerText;
    curentTodo = id;
  console.log(curentTodo)
    editListElement (id, title);
  } 
  else if (event.target.className === 'btn-delete') {
    let dataId = event.target.parentElement.parentElement.dataset.id;
    removeListElement (dataId);
  } 
  else if (event.target.className === 'btn-ok') {
    markElementAsDone (id, extra);
  }
}
function removeListElement (id) {
  //let liElement = document.querySelector('li[data-id="'+id+'"]');
  axios.delete ('http://195.181.210.249:3000/todo/' + id).then (response => {
    if (response.data.status === 0) {
      getItemsBySerwer ();
    }
  });
}
function editListElement (id, title) {
  // Umieść dane w popupie
  let liElement = document.querySelector ('li[data-id="' + id + '"]');
  modal.classList.add ('modal-show');
  console.log (liElement);
}
function addDataToPopup (title, id) {
  pop ('http://195.181.210.249:3000/todo/' + id).then (response => {
    if (response.data.status === 0) {
      getItemsBySerwer ();
    }
  });
}
  // umieść informacje w odpowiednim miejscu w popupie
  //console.log($popupInput)


  let titleElement = document
    .querySelector ('li[data-id="' + curentTodo + '"]')
    .querySelector ('span'); //document.querySelector('li[data-id="'+ id +'"]');
  console.log (titleElement);
  //titleElement.innerText = ;
  updataTodoSerwer ($popupInput.value);
  closePopup ();
}
function updataTodoSerwer (title, id) {
  axios
    .put ('http://195.181.210.249:3000/todo/' + curentTodo, {title: title})
    .then (response => {
      if (response.data.status === 0) {
        getItemsBySerwer ();
      }
    });
}
function closePopup () {
  // Zamknij popup
  modal.classList.remove ('modal-show');
}
function markElementAsDone (id, ok) {
  let todoElementOk = document
    .querySelector ('li[data-id="' + id + '"]')
    .querySelector ('span');
  todoElementOk.classList.add ('don');
  todoElementOk.setAttribute ('ok', '1');
  axios
    .put ('http://195.181.210.249:3000/todo/' + id, {extra: ok})
    .then (response => {
      console.log (response);
    });
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
/*   
document.addEventListener('DOMContentLoaded', main);
  // elementów z drzewa DOM i zapisanie ich w zmiennych
  $list = document.getElementById('list');
}       */
  // Przygotowanie listenerów
  let rootElement = document.querySelector('ul');
  let liCollection = document.querySelectorAll('.item-item');
  //$list.addEventListener('click', listClickManager);
  //let rootElement={ 'ul': li +1 , btn__done:'Potwierdz', btn_cancel: 'Usuń' }
  

let ul = { 
    li : " $addEventListener" 
};
edit.editListElement = "Edit";
console.log(lista.keys(ul));

const entries = ul.entries(edit);
console.log('edit', edit);
for ( let  i = 0; i< entries[i].length; i++ ) {
  console.log(entries [i][j]);
}
let list = { 
  li : " $addEventListener" 
};
li.list = "Edit"

console.log(li.keys(list));
const entries = ul.entries(ob);
console.log('list', list);
for ( let  i = 0; i< entries.length; i++ ) {
console.log(entries [i]);
}

  

function prepareInitialList() {
  letnewElement = document.createElement('li');
  newElement.className = 'text-item';
  newElement.id= 'test;'
  newElement.innerText = 'item';
  rootElement.appendChild(newElement);

  // Tutaj utworzymy sobie początkowe todosy. Mogą pochodzić np. z tablicy
  initialList.forEach(todo => {
    addNewElementToList(todo);

  });
} 


function addNewElementToList(title) {
  $list.appendChild(createElement('nowy', 2));
}
  function toDo() {
    let  test = document.getElementById("toDoInput").nodeValue
    let  text = document.createTextNode(test)
    let  newItem = document.createElement('li')
    newItem.appendChild(text)
    document.getElementById("toDo").appendChild(newItem)
  
    }
 //obsługa dodawanie elementów do listy
// function createElement(title) { 
 // Tworzenie nowego elementu 
  // Tworzyc reprezentacje DOM elementu return newElement
  // return newElement 
  /*const newElement = document.createElement(li){ 
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

function removeListElement( id ) {
    let usun = id.removeChild    {
      usun.forEach (function (listID, 
        
        ) ))
  }
}
    
function editListElement(/* id *) {
  // Pobranie informacji na temat zadania
  // Umieść dane w popupie
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
  let todoElementOk = document
    .querySelector ('li[data-id="' + id + '"]')
    .querySelector ('span');
  todoElementOk.classList.add ('done');
  todoElementOk.setAttribute ('qId', '1');
  axios
    .put ('http://195.181.210.249:3000/todo/' + id, {qId: li})
    .then (response => {
      console.log (response);
      if (response.data.status === 0) {
        getItemsBySerwer ();
}
        });
    }


document.addEventListener('DOMContentLoaded', main);
