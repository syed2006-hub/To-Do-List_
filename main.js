


var new_ele=document.getElementsByClassName("new-element")


var ul=document.getElementById("listitem")
function show(){
    document.getElementById("inputcontainer").style.display="block"
    document.getElementById("inputbox").style.display="none"
    document.getElementById("h1one").style.display="none"
    document.getElementById("h1two").style.display="none"
    document.getElementById("bgimg").style.display="none"

}
function returnto(){
    document.getElementById("inputcontainer").style.display="none"
    document.getElementById("inputbox").style.display="inline-block"
    document.getElementById("h1one").style.display="block"
    document.getElementById("h1two").style.display="block"
    if((new_ele.length)==0){
        document.getElementById("bgimg").style.display="block"
    }
}
function hideerrbox(){
    document.getElementById("inputerrorbox").style.display="none"

}
function hidelerrbox(){
    document.getElementById("linputerrorbox").style.display="none"

}
function formatdate(){
    var dateinput=document.getElementById("inpdate")
    let inputDate = new Date(dateinput.value); 
    var formattedDate = inputDate.toLocaleDateString("en-GB"); 
    var datetxt=document.createElement("p")
    datetxt.style.display="inline-block"
    datetxt.innerText=formattedDate;
    return datetxt.innerText;
    
    
}
function update()
{
    let yesterdate=new Date();

    var dateinput=document.getElementById("inpdate")

    let inputDate = new Date(dateinput.value); 
    let monthinp=inputDate.getMonth()+1;
    let dayinp=inputDate.getDate();
    let yearinp=inputDate.getFullYear();

    let monthyester=yesterdate.getMonth()+1;
    let dayyester=yesterdate.getDate();
    let yearyester=yesterdate.getFullYear();


    console.log(monthinp)
    console.log(dayinp)
    console.log(yearinp)

    console.log(monthyester)
    console.log(dayyester)
    console.log(yearyester)


    
    var taskValue = inptask.value.trim();
    var dateValue=inpdate.value;
    if (taskValue === "" || dateValue === "") {
        document.getElementById("inputerrorbox").style.display="block"

    }
    else  if(yearinp<yearyester || (yearinp===yearyester &&monthinp<monthyester) || (yearinp===yearyester &&monthinp===monthyester && dayinp<dayyester) ){
        document.getElementById("linputerrorbox").style.display="block"
    }
    else
   { 
    document.getElementById("inputerrorbox").style.display="none"
    var listitem=document.createElement("li")
    listitem.innerHTML=inptask.value + "<p style='display: inline-block;'>__</p>"+  formatdate()+
    "<input type='checkbox' class='delbtn' onchange='removeitem(event)'>"
    listitem.className="new-element"
    ul.prepend(listitem)


    document.getElementById("inputcontainer").style.display="none"
    document.getElementById("inputbox").style.display="inline-block"
    document.getElementById("h1one").style.display="block"
    document.getElementById("h1two").style.display="block"
    if (taskValue !== "" || dateValue !== "") {
        inptask.value=""
        inpdate.value=""

    }

   
}

}
function removeitem(event){
    event.target.parentElement.style.opacity = "0";
    event.target.parentElement.style.transform = "translateX(100%)";
    setTimeout(() => {
        event.target.parentElement.remove();
    }, 499);
    setTimeout(() => {
        if((new_ele.length)==0){
            document.getElementById("bgimg").style.display="block"
        }
        //
        
    }, 600);
    
}
let prevWidth = window.innerWidth; // Keep track of the previous window width

function updateMediaQuery() {
  let dynamicWidth = window.innerWidth; // Example: 80% of the current width
  let mediaQuery =`(max-width: ${dynamicWidth}px)`;
  
  let x = window.matchMedia(mediaQuery);

  function myFunction(e) {
    if (e.matches) { 

       document.getElementById("inptask").style.width="80%";// 
       document.getElementById("inpdate").style.width="80%";// When window shrinks
    } else {
        document.getElementById("inptask").style.width="80%";//
       document.getElementById("inpdate").style.width ="80%";// When window expands
    }
  }

  // Check both shrinking and expanding dimensions using a loop
  for (let i = prevWidth; i !== window.innerWidth; i = (i > window.innerWidth) ? i - 1 : i + 1) {
    // You can place any additional actions inside the loop
    myFunction(x);
  }
  
  // Call the function initially
  myFunction(x);
  
  // Update the previous width to the new one
  prevWidth = window.innerWidth;
}

// Start the update process
updateMediaQuery();
// Update media query when the window is resized
window.addEventListener("resize", updateMediaQuery);

