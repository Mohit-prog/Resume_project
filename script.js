console.log("here");
///smooth scroll
var navMenuAnchorTag=document.querySelectorAll('.nav-menu a');

var interval;
for(var i=0;i<navMenuAnchorTag.length;i++){

    navMenuAnchorTag[i].addEventListener('click',function(event){
               event.preventDefault();
       var targetSectionId=this.textContent.trim().toLowerCase();
       var targetSection=document.getElementById(targetSectionId);
     
        interval=setInterval(scrollVertical ,50,targetSection);
         
    });

}
function scrollVertical(targetSection){
    var targetSectionCoordinates=targetSection.getBoundingClientRect();
   if(targetSectionCoordinates.top<=0){
       clearInterval(interval);
       return;
   }
   window.scrollBy(0,40);

   }

   ////bar animation
   var progressBar=document.querySelectorAll('.skill-progress>div');
   var skillsContainer=document.getElementById('skills-container');
   window.addEventListener('scroll',checkScroll);

   var animationDone=false;
   function initialiseBars(){
       for(let bar of progressBar){
           bar.style.width=0+'%';
       }

   }
   initialiseBars();

   function fillBars(){

for(let bar of progressBar){

    let targetWidth=bar.getAttribute('data-bar-width');
    let currWidth=0;

    let interval=setInterval(function(){
        if(currWidth>targetWidth){
            clearInterval(interval);
            return;
        }
        currWidth++;
        bar.style.width=currWidth+'%';
    },5);

}
   }

   function checkScroll(){
var coordinates=skillsContainer.getBoundingClientRect();
if(!animationDone && coordinates.top<window.innerHeight)
{
 fillBars();
 animationDone=true;

}
else if(coordinates.top > window.innerHeight){
    animationDone=false;
    initialiseBars();
}

   }