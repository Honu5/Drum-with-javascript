    var lent=document.querySelectorAll(".drum").length;
    for (var i=0;i<lent;i++)
            document.querySelectorAll(".drum")[i].addEventListener("click",function(){

      var clicked=this.innerHTML;
      var currentkey=clicked;
      makeSound(clicked);
      makeEffect(currentkey);

      

    })

    document.addEventListener("keypress",function (event){
        makeSound(event.key);
        //var currentkey=key;
        makeEffect(event.key);
    })
    function makeSound(key){
    switch(key){
        case "w":
            var tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom2=new Audio("./sounds/tom-3.mp3");
            tom2.play();
            break;
        case "d":
            var tom2=new Audio("./sounds/tom-4.mp3");
            tom2.play();
            break;
        case "j":
            var tom2=new Audio("./sounds/snare.mp3");
            tom2.play();
            break;
        case "k":
            var tom2=new Audio("./sounds/crash.mp3");
            tom2.play();
            break;
        case "l":
            var tom2=new Audio("./sounds/kick-bass.mp3");
            tom2.play();
            break;
        default:
             console.log("Wrong Chpice");
            
      }
    }

    function makeEffect(currentkey){
        
        var activeButton=document.querySelector("."+currentkey);
        activeButton.classList.add("pressed")
    setTimeout(function(){
             activeButton.classList.remove("pressed");},100
   
    )
    }



    
    


  