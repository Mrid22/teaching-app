indicator=document.getElementById("indicator")
home=document.getElementById("Home")
discover=document.getElementById("Discover")
account=document.getElementById("Account")

indicator.style.left=home.offsetLeft+"px"
indicator.style.width=home.offsetWidth+"px"

discover.addEventListener("click",function(){
    indicator.style.left=discover.offsetLeft+"px"
    indicator.style.width=discover.offsetWidth+"px"
    setTimeout(function(){
        window.location.href="../Discover/index.html"
    })
})

home.addEventListener("click",function(){
    indicator.style.left=home.offsetLeft+"px"
    indicator.style.width=home.offsetWidth+"px"
})

account.addEventListener("click",function(){
    indicator.style.left=account.offsetLeft+"px"
    indicator.style.width=account.offsetWidth+"px"
    setTimeout(function(){
        window.location.href="../Account/index.html"  
    },500)
})