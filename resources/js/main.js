$(document).ready(function(){
    
    //Stiky Menu
    $(".js--services-section").waypoint(function(direction){
        if(direction=="down"){
                $("nav").addClass("sticky");
           }else{
                $("nav").removeClass("sticky");
           }
    });
    
    
    //mixitup
   var mixer = mixitup('.container'); 
    
    //SMOOTH SCROLL FOR IE/EDGE/SFARI
    
    $("a").on('click',function(event){
        
        if(this.hash !=="") {
                event.preventDefault();
            
                var hash = this.hash;
            
                $('html,body').animate({
                    scrollTop:$(hash).offset().top
                },800, function(){
                    window.location.hash = hash;
                })
           }
    });
});


function openNav(){
    document.getElementById("myNav").style.width = "100%";
}

function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}

let isLight = true;
function change_theme ()
{
    const cssFile = document.getElementById("light");
    const cssFile2 = document.getElementById("light2");
    if(isLight){
        cssFile2.innerHTML="DARK MODE OFF";
        cssFile.setAttribute("href", "resources/css/dark.css");
        isLight = false;
    }else{
        cssFile2.innerHTML="DARK MODE ON";
        cssFile.setAttribute("href", "resources/css/style.css");
        isLight = true;
    }
}