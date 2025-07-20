var friend = document.querySelector("#container h2")
var btn = document.querySelector("#container button")

var flag = 0



btn.addEventListener("click", function(){
    if(flag == 0){
        friend.innerHTML = "Friends"
        friend.style.color = "green"
        btn.innerHTML = "Remove Friend"
        flag = 1

    } else {
        friend.innerHTML = "Stranger"
        friend.style.color = "red"
        btn.innerHTML = "Add Friend"
        flag = 0
    }
})