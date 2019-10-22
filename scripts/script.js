let $list;
let $lastId = 0;
let $addForm;
let rootElement;
let liCollection = document.querySelectorAll(".test-item ");
let initialList;

function main() {
  // Przypisuje do zmiennych/stałych kotwice do elementów html(DOM)
  prepareDOMElements();
  // Deklaruje obsługe eventów np klinicia itp
  prepareDOMEvents();
    prepareInitialList();
}

function prepareDOMElements() {
  $list = document.getElementById("list");
  $modal = document.getElementById("modal");
  $addForm = document.getElementById("addForm");
  $newTodoItem = document.getElementById("newTodoItem");
}

function prepareDOMEvents() {
  $list.addEventListener("click", listClickManager);
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
    console.log("Dane z formularza: " + inputValue);
    createNewElementToList(inputValue);
  } else {
    console.log("Brak danych w formularzu - ignoruje");
  }
}

function createElement(item) {
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




function prepareInitialList() {
  pobierzListeToDo();
}
function addNewElementToList(item) {
  // obsługa dodawanie elementów do listy
  const newElement = createElement(item);
  $list.appendChild(newElement);
}

function createNewElementToList(item) {
  console.log("item: " + item);
  if (item === null) {
    console.log("item jest puste");
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

  fetch("http://195.181.210.249:3000/todo/", {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  }) 
  
  
  .then(res => res.json())
  {
      console.log(res); 
        if (res.status > 0) {
            throw(res);

      } else {
        const newElement = createElement(item);
          $list.appendChild(newElement);
      }
    }
   // .catch(error => {
  //    console.log("nie dodane");
   //   console.log(error);
//});
}








function listClickManager(event) {

  let idRaw = event.target.getAttribute("data-targetid");
  let idArray = idRaw.split('-');
  let id = idArray[1];
  let title = event.target.getAttribute("value");
  if (event.target.className === "deleteBtn") {
   // removeListElement(id);
 // } else if (event.target.className === "editBtn") {
 //   editListElement(id,title);
 // } else if (event.target.className === "doneBtn") {
 //   markElementAsDone(id);
}
}

function removeListElement(id) {
  fetch("http://195.181.210.249:3000/todo/" + id, { method: "delete" })
  .then(res => res.json())
    .then(function(res) {
      if (res.status === 200) {
        let liElement = document.querySelector("#item-" + id);
        $list.removeChild(liElement);
      } else {
        throw "nieusuniete";
      }
    })
    .catch(e => {
      console.log(e);
    });
}

function editListElement(id,title) {
  console.log("To trzeba zrobić -> editListElement");
  
  let requestData = new FormData();
  requestData.append("title", title);

  fetch("http://195.181.210.249:3000/todo/"+ id, {method: 'put', body: requestData})
    .then(res => res.json())
    .then(data => {
      
    })
    .catch((e) => {

    });
}
function markElementAsDone(id) {
  //zaznacz element jako wykonany (podmień klasę CSS)
  let liElement = document.querySelector("#" + id);
  liElement.className += " done ";
}
function addNewTodoToList() {
  if ($myInput.value.trim()) {
    addNewElementToList($myInput.value);
    $myInput.value = "";
  }
}
function getItemsBySerwer() {
  $list.innerHTML = "";
  axios.get("http://195.181.210.249:3000/todo/").then(function(response) {
    if (response.status === 200) {
      response.data.forEach(todo => {
        newElementToList(todo.title, todo.id, todo.extra);
      });
    }
  });
}
/*
  const editButton = document.createElement ('button');
  editButton.innerText = 'edit';
  editButton.PUT = ('http://195.181.210.249:3000/todo/'); 
  editButton.className = 'btn-edit';
*/

function removeListElement(id) {
  let liElement = document.querySelector('#' + id);
  $list.removeChild(liElement);
}

function pobierzListeToDo() {
  fetch("http://195.181.210.249:3000/todo/", { method: "get" })
    .then(response => {
      if (response.status === 200) {  
        return response.json();
      } else {
        let errorMsg = { code: response.status, text: response.statusText };
        throw errorMsg;
      }
    })
    .then(response => {
      console.log("todo get ok");
      przygotujListe(response);
    })
    .catch(e => {
      console.log(e);
    });
}

function przygotujListe(odpowiedzSerwera) {
  if (odpowiedzSerwera.length > 0) {
    for (i = 0; i < odpowiedzSerwera.length; i += 1) {
      addNewElementToList(odpowiedzSerwera[i]);
    }
  }
}

document.addEventListener("DOMContentLoaded", main);
