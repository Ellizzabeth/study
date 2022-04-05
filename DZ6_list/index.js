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

function checkboxClick(event){
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach((checkbox) => {
            var label = document.getElementById("label_" + checkbox.value);
            if (checkbox.checked) label.style.setProperty("text-decoration", "line-through");
            else label.style.setProperty("text-decoration", "none");
                 });
            
}


var CheckBoxID = 0;
function addTask(taskName){
    var div = document.getElementById("list");
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'cb' + CheckBoxID;
    checkbox.name = 'cb' + CheckBoxID;
    checkbox.value = 'cb' + CheckBoxID;

    checkbox.addEventListener('click', checkboxClick);
      div.appendChild(checkbox);


      var label = document.createElement('label');
      label.id = 'label_cb' + CheckBoxID;
      label.for = 'cb' + CheckBoxID;
      label.innerHTML = taskName;
      div.appendChild(label);

      var br = document.createElement("br");
      div.appendChild(br);

      CheckBoxID++;

}

function loadPage()
{
  //var elem = document.getElementById(1);
  //elem.style.color = "red";
 /* var div = document.getElementById("list");
  var listElement = div.querySelector(".listclass");
  //if(listElement.hasAttribute("vvalue")) 
  alert(listElement.vvalue);*/
  
 
  for(const task of tasks){
        
      addTask(task.text);
  
  } 

}
function onclickCreateTask(){
    var newTask = document.getElementById("newTask");
    addTask(newTask.value);
        
     
}



/*const div1 = document.getElementById('div1');
//=> <div id="div1">Hi Champ!</div>

const exampleAttr= div1.getAttribute('id');
//=> "div1"

const align = div1.getAttribute('align')*/  