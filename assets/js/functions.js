var siteFile="../";
var pages=[siteFile,siteFile+"about-page",siteFile+"offer-page",siteFile+"portfolio-page",siteFile+"contact-page"];


function goToPage(str)
{
    window.location.assign(pages[str]);
    
}

$(window).scroll(function(){
	
    if (Math.round($(window).scrollTop())+2 > Math.round($(document).height()-$(window).height())){
        
		
    }
     else if($(window).scrollTop()<$(document).height()-$(window).height()){
        
	
    }
    if($(window).scrollTop()==0)
        {
            MenuOpen();
        }
    else
        {
            MenuClose();
        }
    ContactClose();
   
});
$(document).ready(function(){
    
   MenuOpen();
});
var id=setInterval(frame,5);
function MenuOpen()
{
menuOpenTrue=true;
    menuButtonOpenTrue=false;
}
function MenuClose()
{
menuOpenTrue=false;
    menuButtonOpenTrue=true;
}
function ContactOpen()
{
    if(contactOpenTrue)
        {
            contactOpenTrue=false;
        }
    else
    {
        contactOpenTrue=true;
    }
    
}
function ContactClose()
{
    contactOpenTrue=false;
}


function frame()
{
   if(menuOpenTrue)
       {
           if(menuTopPos<menuTopOpenPos)
               {
                   menuTopPos+=0.02*(Math.abs(menuTopPos-menuTopOpenPos)+10);
                   if(menuTopPos>=menuTopOpenPos)
                       {
                           menuTopPos=menuTopOpenPos;
                       }
                   menuElem.style.top=menuTopPos+"px";
               }
           
       }
    else
        {
            if(menuTopPos>menuTopClosePos)
               {
                   menuTopPos-=0.02*(Math.abs(menuTopPos-menuTopClosePos)+10);
                   if(menuTopPos<=menuTopClosePos)
                       {
                           menuTopPos=menuTopClosePos;
                       }
                   menuElem.style.top=menuTopPos+"px";
               }
        }
    if(menuButtonOpenTrue)
       {
           if(menuButtonPos<menuButtonOpenPos&&menuTopPos<=menuTopClosePos)
               {
                   menuButtonPos+=0.02*(Math.abs(menuButtonPos-menuButtonOpenPos)*2+10);
                   if(menuButtonPos>=menuButtonOpenPos)
                       {
                           menuButtonPos=menuButtonOpenPos;
                       }
                   menuButtonElem.style.right=menuButtonPos+"px";
               }
           
       }
    else
        {
            if(menuButtonPos>menuButtonClosePos)
               {
                   menuButtonPos-=0.02*(Math.abs(menuButtonPos-menuButtonClosePos)*6+10);
                   
                   if(menuButtonPos<=menuButtonClosePos)
                       {
                           menuButtonPos=menuButtonClosePos;
                       }
                   menuButtonElem.style.right=menuButtonPos+"px";
               }
        }
    if(contactOpenTrue)
       {
           if(contactBottomPos<contactBottomOpenPos)
               {
                   contactBottomPos+=0.02*(Math.abs(contactBottomPos-contactBottomOpenPos)+10);
                   if(contactBottomPos>=contactBottomOpenPos)
                       {
                           contactBottomPos=contactBottomOpenPos;
                       }
                   contactElem.style.bottom=contactBottomPos+"px";
               }
           
       }
    else
        {
            if(contactBottomPos>contactBottomClosePos)
               {
                   contactBottomPos-=0.02*(Math.abs(contactBottomPos-contactBottomClosePos)+10);
                   if(contactBottomPos<=contactBottomClosePos)
                       {
                           contactBottomPos=contactBottomClosePos;
                       }
                   contactElem.style.bottom=contactBottomPos+"px";
               }
        }
}
var menuTopClosePos=-70;
var menuTopPos=-70;
var menuTopOpenPos=0;
var menuOpenTrue=false;
var menuElem=document.getElementById("menu");



var contactBottomClosePos=-350;
var contactBottomPos=-350;
var contactBottomOpenPos=0;
var contactOpenTrue=false;
var contactElem=document.getElementById("contact");


var menuButtonClosePos=-50;
var menuButtonPos=-50;
var menuButtonOpenPos=10;
var menuButtonOpenTrue=false;
var menuButtonElem=document.getElementById("menu-button");
var contactInfo=["+38641796919","paul.mcguiness@sciencewriter.si"]
function Clipboard(infoint)
{
    
     var aux = document.createElement("input");
  aux.setAttribute("value", contactInfo[infoint]);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");

  document.body.removeChild(aux);
alert("text-copied");
}
// story constructor





