
$(document).ready(function () {
$('#sidebarCollapse').on('click', function () {
$('#sidebar').toggleClass('active');
});
});

$p = $(".dropdown-menu >p");
$.main =$("#cosmo >.main");
$(document).ready(function(){
    addDraggableAttributeToNamePartListItems();
    $p.on("dragstart", namePartListItermDragstartEvenHandler);
    $.main.on("drop",namePartListItermDropEvenHandler);
});
function addDraggableAttributeToNamePartListItems(){
   $p.attr("draggable","true");
}
function  namePartListItermDragstartEvenHandler(event){
    (event.originalEvent || event).dataTransfer.setData("text", $(this).text());
     (event.originalEvent || event).dataTransfer.setData("button", $(this).button());
        
}
function namePartListItermDropEvenHandler(event){
    let namPart = (event.originalEvent || event).dataTransfer.getData("text");
    $((this).value(namPart));
    let nambutton = (event.originalEvent || event).dataTransfer.getData("button");
    ($(this).value(nambutton));

}



function change(color){
    document.getElementById("second1").style.background=color;
    
}


function chinge(color){
    document.getElementById("second1").style.color=color;
    
}

function cinge(color){
    document.getElementById("ball").style.color=color;
    
}


function chage(color){
    document.getElementById("ball").style.background=color;
    
}

function seco(color){
    document.getElementById("first").style.color=color;
    
    
}


function sco(color){
    document.getElementById("first").style.background=color;
    
}

function wet(color){
    document.getElementById("vib").style.color=color;
    
}


function win(color){
    document.getElementById("vib").style.background=color;
    
}
function one(color){
    document.getElementById("ala").style.color=color;
    
}


function five(color){
    document.getElementById("ala").style.background=color;
    
}

function one1(color){
    document.getElementById("exx").style.color=color;
    
}


function five1(color){
    document.getElementById("exx").style.background=color;
    
}

function one11(fontStyle){
    document.getElementById("ala").style.fontStyle=fontStyle;
    
}

function one11(fontFamily){
    document.getElementById("ala").style.fontFamily=fontFamily;
    
}


    let currentDroppable = null;
let e = document.querySelectorAll(".ball")

    ball.onmousedown = function(event) {

      let shiftX = event.clientX - ball.getBoundingClientRect().left;
      let shiftY = event.clientY - ball.getBoundingClientRect().top;

      ball.style.position = 'absolute';
      ball.style.zIndex = 1000;
      document.body.append(ball);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        ball.style.left = pageX - shiftX + 'px';
        ball.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        ball.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        ball.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
              
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      ball.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        ball.onmouseup = null;
      };

    };

    function enterDroppable(elem) {
      elem.style.background = 'pink';
        return false;
    }

    function leaveDroppable(elem) {
      elem.style.background = '';
        
    }

    ball.ondragstart = function() {
      return false;
    };
///next next head

    ala.onmousedown = function(event) {

      let shiftX = event.clientX - ala.getBoundingClientRect().left;
      let shiftY = event.clientY - ala.getBoundingClientRect().top;

      ala.style.position = 'absolute';
      ala.style.zIndex = 1000;
      document.body.append(ala);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        ala.style.left = pageX - shiftX + 'px';
        ala.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        ala.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        ala.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      ala.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        ala.onmouseup = null;
      };

    };

    function enterDroppable(elem) {
      elem.style.background = 'pink';
    }

    function leaveDroppable(elem) {
      elem.style.background = '';
    }

    ala.ondragstart = function() {
      return false;
    };


///////////////next para/////
    first.onmousedown = function(event) {

      let shiftX = event.clientX - first.getBoundingClientRect().left;
      let shiftY = event.clientY - first.getBoundingClientRect().top;

      first.style.position = 'absolute';
      first.style.zIndex = 1000;
      document.body.append(first);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        first.style.left = pageX - shiftX + 'px';
        first.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        first.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        first.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      first.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        first.onmouseup = null;
      };

    };

    function enterDroppable(elem) {
      elem.style.background = 'pink';
    }

    function leaveDroppable(elem) {
      elem.style.background = '';
    }

    first.ondragstart = function() {
      return false;
    };


///////////////////////temp1/////////////////////
vib.onmousedown = function(event) {

      let shiftX = event.clientX - vib.getBoundingClientRect().left;
      let shiftY = event.clientY - vib.getBoundingClientRect().top;

      vib.style.position = 'absolute';
      vib.style.zIndex = 1000;
      document.body.append(vib);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        vib.style.left = pageX - shiftX + 'px';
        vib.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        vib.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        vib.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      vib.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        vib.onmouseup = null;
      };

    };

    function enterDroppable(elem) {
      elem.style.background = 'pink';
    }

    function leaveDroppable(elem) {
      elem.style.background = '';
    }

    vib.ondragstart = function() {
      return false;
    };


//////////three///////////
three.onmousedown = function(event) {

      let shiftX = event.clientX - three.getBoundingClientRect().left;
      let shiftY = event.clientY - three.getBoundingClientRect().top;

      three.style.position = 'absolute';
      three.style.zIndex = 1000;
      document.body.append(three);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        three.style.left = pageX - shiftX + 'px';
        three.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        three.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        three.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      three.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        three.onmouseup = null;
      };

    };

    function enterDroppable(elem) {
      elem.style.background = 'pink';
    }

    function leaveDroppable(elem) {
      elem.style.background = '';
    }

    three.ondragstart = function() {
      return false;
    };


///////////////////////////header///////////////////////////////////
here.onmousedown = function(event) {

      let shiftX = event.clientX - here.getBoundingClientRect().left;
      let shiftY = event.clientY - here.getBoundingClientRect().top;

      here.style.position = 'absolute';
      here.style.zIndex = 1000;
      document.body.append(here);

      moveAt(event.pageX, event.pageY);

      function moveAt(pageX, pageY) {
        here.style.left = pageX - shiftX + 'px';
        here.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        here.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        here.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      here.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        here.onmouseup = null;
      };

    };

    function enterDroppable(elem) {
      elem.style.background = 'pink';
    }

    function leaveDroppable(elem) {
      elem.style.background = '';
    }

    here.ondragstart = function() {
      return false;
    };
$(document).ready(function() {

    $("#main").resizable();
 });



