// kopiowanie NA BOK

// Tutaj dodacie zmienne globalne do przechowywania elementów takich jak
// np. lista czy input do wpisywania nowego todo
let $list;
let $lastId = 0;
let $addForm;
let rootElement;
let liCollection = document.querySelectorAll(".test-item ");

let initialList /* = [
  'Dzisiaj robię usuwanie',
  'Nakarm psa'
  ]*/;
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
  $list = document.getElementById("list");
  $modal = document.getElementById("modal");

  //$buttonModal = document.querySelector('#show-modal');
  //$buttonConsole = document.querySelector('#console-modal');
  $addForm = document.getElementById("addForm");
  $newTodoItem = document.getElementById("newTodoItem");
}

function prepareDOMEvents() {
  $list.addEventListener("click", listClickManager);
  // Wysyłanie (dodaweanie do listy) wpisu z formularza
  $addForm.addEventListener("submit", addTodoElement);
  $addForm.addEventListener("keydown", function(event) {
    if (event.keyCode == 13) {
      addTodoElement(event);
    }
  });
}

function addTodoElement(event) {
  event.preventDefault();
  let inputValue = $newTodoItem.value.trim();
  if (inputValue !== "") {
    // $modal.classList.remove ('modal-show');
    console.log(inputValue);
    createNewElementToList(inputValue);
  } else {
    console.log("hej co robisz !!!!");
  }
}

function createElement(item) {
  // Tworzyc reprezentacje DOM elementu return newElement
  // return newElement
  if (item.title !== "") {
    const newElement = document.createElement("li");
    if ($lastId < item.id) {
      $lastId = item.id;
    } else {
      $lastId += 1;
    }
    newElement.setAttribute("id", "item-" + $lastId);

    //     dodawanie do li id
    const inputField = document.createElement("input");
    inputField.setAttribute("value", item.title);
    inputField.setAttribute("name", "item-" + $lastId);

    const delBtn = document.createElement("button");
    delBtn.setAttribute("data-targetId", "item-" + $lastId);
    delBtn.setAttribute("class", "deleteBtn");
    delBtn.innerText = "Usuń";

    const editBtn = document.createElement("button");
    editBtn.setAttribute("data-targetId", "item-" + $lastId);
    editBtn.setAttribute("class", "editBtn");
    editBtn.innerText = "Edytuj";

    const doneBtn = document.createElement("button");
    doneBtn.setAttribute("data-targetId", "item-" + $lastId);
    doneBtn.setAttribute("class", "doneBtn");
    doneBtn.innerText = "Wykonane";

    newElement.appendChild(inputField);
    newElement.appendChild(editBtn);
    newElement.appendChild(doneBtn);
    newElement.appendChild(delBtn);
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
  // Tutaj utworzymy sobie początkowe todosy. Mogą pochodzić np. z tablicy
  pobierzListeToDo();
}

function addTodo(element, index, tablica) {
  console.log("init: " + element);
  addNewElementToList(element);
}

/* Treść pola input pobrana wcześniej przekazana jako parametr zaczynam używać z linijki 131 */
function addNewElementToList(item) {
          // obsługa dodawanie elementów do listy
        const newElement = createElement(item);
        $list.appendChild(newElement);
}

function createNewElementToList(item) {
  console.log('item');
  console.log(item);
  if (item === null) {
    console.log('item jest puste');
    return false;
  }
  let requestData = new FormData();
  requestData.append("title", item);
  requestData.append("description", "Test Agnieszki");
  requestData.append("priority", 5);
  requestData.append("author", "Agnieszka Wrześnmiak");
  requestData.append("extra", "active");
  requestData.append("url", "www.ocochodzi.pl");
  //requestData.append("parent_todo_id", 0);
  console.log("dodaj item ");
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let responseArray = JSON.parse(this.response);
      if (responseArray.statys > 0) {
        console.log(responseArray);
      } else {
        // obsługa dodawanie elementów do listy
        const newElement = createElement(item);
        $list.appendChild(newElement);
      }
    } else {
      console.log("nie dodane");
      // kaszana
    }
  };
  xhr.open("POST", "http://195.181.210.249:3000/todo/", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send(requestData);
}
/* trzeba si zabezpieczyć,żeby nie dodawać false
function addNewElementToList(item) {
  // obsługa dodawanie elementów do listy
  const newElement = createElement(item);
  if (newElement) {
    $list.appendChild(newElement);
  }


/* Działa po kliknieciu submit w formularzu dodawania nowego itema */
function listClickManager(event) {
  // Rozstrzygnięcie co dokładnie zostało kliknięte i wywołanie odpowiedniej funkcji
  let id = event.target.getAttribute("data-targetid");
  if (event.target.className === "deleteBtn") {
    removeListElement(id);
  } else if (event.target.className === "editBtn") {
    editListElement(id);
  } else if (event.target.className === "doneBtn") {
    markElementAsDone(id);
  }
}

function removeListElement(id) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let liElement = document.querySelector("#" + id);
      $list.removeChild(liElement);
    } else {
      console.log("nieusuniete");
      // kaszana
    }
  };
  xhr.open("DELETE", "http://195.181.210.249:3000/todo/" + id, true);
  xhr.send();
}

function editListElement(id, title) {
  // Pobranie informacji na temat zadania
  // Umieść dane w popupie
  //openPopup();
  //$popupInput.value = title;
  console.log("To trzeba zrobić -> editListElement");
}

function markElementAsDone(id) {
  //zaznacz element jako wykonany (podmień klasę CSS)
  let liElement = document.querySelector("#" + id);
  liElement.className += " done ";
} /*) {
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
*/ /*
async function getListFromServer() {
  $list.innerHTML = '';
  try {
      let response = await axios.get('http://195.181.210.249:3000/todo/');
      if (response.status === 200) {
          response.data.forEach(todo => {
              addNewElementToList(todo.title, todo.id);
          });
      }
  }
  catch (e) {
      console.log(e);
  }
}
*/

/*
function addDataToPopup(/* Title, author, id */ function pobierzListeToDo() {
  console.log("pobierzListeToDo");
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      console.log("todo get ok");
      przygotujListe(this);
    } else {
      console.log("todo get error");
      // kaszana
    }
  };
  xhr.open("GET", "http://195.181.210.249:3000/todo/", true);
  xhr.send();
}

function przygotujListe(odpowiedzSerwera) {
  const listaToDo = JSON.parse(odpowiedzSerwera.response);
  /*[].forEach.call(books, function(book) {
        const title = book.querySelector('title').firstChild.nodeValue;
        const author = book.querySelector('author').firstChild.nodeValue;
        const genre = book.querySelector('genre').firstChild.nodeValue;
        const price = Number(book.querySelector('price').firstChild.nodeValue);
        const description = book.querySelector('description').firstChild.nodeValue;
        console.log(title, author, gender, price, description);
    });*/
  initialList = listaToDo;
  for (i = 0; i < initialList.length; i += 1) {
    addNewElementToList(initialList[i]);
  }
}
/*

curl --location --request PUT "http://195.181.210.249:3000/todo/85" \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data "title=NowyZmieniony"

let xhr = XMLHttpReguest();
xhr.open("GET", curl --location --request GET "http://195.181.210.249:3000/todo/")
xhr.addEventListener('load, function () {
if(this.status === 200) {

let res= JSON.parse(this.responseText);
if (typeof callbac !== 'undefined'){
  callback(); /czy użytkownik wyżuci coś?
  }
}
});
  / albo   console.log(this.responseText);
}
}
});
xhr.addEventlistener('errore', function () {})
  console.log('Wystąpił błąd');
});
xhr.send;

let promise =new Promise((resolve, reject) => { 
    resolve ("liElement");
} );

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

document.addEventListener("DOMContentLoaded", main);
