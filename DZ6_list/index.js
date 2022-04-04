const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

/*for (task : tasks) {

}*/
/*var x = document.getElementById("list");
x.querySelector(".listclass").innerHTML = "Hello World!";*/

function loadPage()
{
  //var elem = document.getElementById(1);
  //elem.style.color = "red";
 /* var div = document.getElementById("list");
  var listElement = div.querySelector(".listclass");
  //if(listElement.hasAttribute("vvalue")) 
  alert(listElement.vvalue);*/
  var div = document.getElementById("list");
  var i=0;
  for(const task of tasks){
   /* var child = document.createTextNode("label");
    div.appendChild(child);
    //child.value = "dddd";
    firstEl = document.getElementById("yyy");
    //div.insertBefore(child, firstEl);*/

      var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'cb'+i;
    checkbox.name = 'cb';
    checkbox.value = 'cb'+i;
      div.appendChild(checkbox);


      var label = document.createElement('label');
      label.for = 'cb'+i;
      label.innerHTML = task.text;
      div.appendChild(label);

      var br = document.createElement("br");
      div.appendChild(br);


  
    // div.insertBefore(checkbox, child);
  } 
 /* var newDiv = document.createElement("div"); 
  // and give it some content 
  var newContent = document.createTextNode("Hi there and greetings!"); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("list"); 
  document.body.insertBefore(newDiv, currentDiv); */
}

