var elem = document.querySelectorAll(".elem");

elem.forEach(function(val){

    val.addEventListener("mouseenter", function(){
        val.style.backgroundColor = "red"
    });

    val.addEventListener("mouseleave", function(){
        val.style.backgroundColor = "transparent"

    });
});















