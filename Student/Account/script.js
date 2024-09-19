indicator=document.getElementById("indicator")
home=document.getElementById("Home")
discover=document.getElementById("Discover")
account=document.getElementById("Account")

indicator.style.left=account.offsetLeft+"px"
indicator.style.width=account.offsetWidth+"px"

discover.addEventListener("click",function(){
    indicator.style.left=discover.offsetLeft+"px"
    indicator.style.width=discover.offsetWidth+"px"
    setTimeout(function(){
        window.location.href="../Discover/index.html"
    },500)
})

home.addEventListener("click",function(){
    indicator.style.left=home.offsetLeft+"px"
    indicator.style.width=home.offsetWidth+"px"
    setTimeout(function(){
        window.location.href="../Home/index.html"  
    },500)
})

account.addEventListener("click",function(){
    indicator.style.left=account.offsetLeft+"px"
    indicator.style.width=account.offsetWidth+"px"
    setTimeout(function(){
        window.location.href="index.html"  
    },500)
})