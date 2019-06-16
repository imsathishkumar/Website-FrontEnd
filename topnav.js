window.onscroll=function()
{
    myFunction()
};

var topnav = document.getElementById("topnav");
var sticky = topnav.offsetTop;

function myFunction()
{
    if(window.pageYOffset >= sticky)
    {
        topnav.classList.add("sticky");
    }
    else
    {
        topnav.classList.remove("sticky");
    }
}

function openNav() {
    document.getElementById("sidenav").style.display = "block";
  }
  
function closeNav() {
    document.getElementById("sidenav").style.display = "none";
  }