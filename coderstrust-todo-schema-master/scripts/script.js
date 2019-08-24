// Tutaj dodacie zmienne globalne do przechowywania elementów takich jak
// np. lista czy input do wpisywania nowego todo
let $list;
const initialList = ['Dzisiaj robię usuwanie', 'Nakarm psa'];

function main() {
  prepareDOMElements();
  prepareDOMEvents();
  prepareInitialList();
}

function prepareDOMElements() {
    const container = document.querySelector('#list');
    const headlines = container.querySelectorAll('li');

  // To będzie idealne miejsce do pobrania naszych
  // elementów z drzewa DOM i zapisanie ich w zmiennych
  $list = document.getElementById('list');
}

function prepareDOMEvents() {
  let liCollection = document.querySelectorAll('.test-item[i]');
  console.log('.test-item[i]+1');  
liCollection.forEach(function (li , index) { 
  li.addEventListener('click', function() {

 console.log(index +1);      
});

  // Przygotowanie listenerów
  let rootElement = document.querySelector('ul');
  let liCollection =document.querySelectorAll('.item-item');{

  
  $list.addEventListener('click', listClickManager);
}

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
}

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
  


function createElement(title /* Tworzenie nowego elementu    /* To Do List, Mentor Paweł / Aga. W, https://github.com/Auleo/To_do_List*/Title, author, id */) {
  // Tworzyc reprezentacje DOM elementu return newElement
  // return newElement
  const newElement = document.createElement('li');
  newElement.innerText = title;

  return newElement;
}

function listClickManager(/* event- event.target */) {
  event.target.parentElement.id
  if (event.target.className === 'test-item') { editListElement(id) }


  // Rozstrzygnięcie co dokładnie zostało kliknięte i wywołanie odpowiedniej funkcji
  // 
  // 
}

function removeListElement(/* id */) {
  // Usuwanie elementu z listy
}

function editListElement(/* id */) {
  // Pobranie informacji na temat zadania
  // Umieść dane w popupie
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
