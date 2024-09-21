search=document.getElementById("search-bar")
courses=document.getElementById("courses")
course_name=document.getElementsByClassName("course-name")
indicator=document.getElementById("indicator")
home=document.getElementById("Home")
discover=document.getElementById("Discover")
account=document.getElementById("Account")
results=document.getElementById("results")
resultsbox=document.getElementById("resultsbox")

let courses_list=[]
for (let i = 0; i < course_name.length; i++) {
    courses_list.push(course_name[i].innerHTML)
}


indicator.style.left=discover.offsetLeft+"px"
indicator.style.width=discover.offsetWidth+"px"

discover.addEventListener("click",function(){
    indicator.style.left=discover.offsetLeft+"px"
    indicator.style.width=discover.offsetWidth+"px"
    setTimeout(function(){
        window.location.href="index.html"  
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
        window.location.href="../Account/index.html"  
    },500)
})

search.addEventListener("input",function(){
    resultsbox.innerHTML=""
    if(search.value!="" && search.value!=" "){
        results=courses_list.filter(function(course){
            return course.toLowerCase().includes(search.value.toLowerCase())
         })
         for (let i = 0; i < results.length; i++) {
           p = document.createElement("p")
            resultsbox.append(p)
            p.innerHTML=results[i]
            
         }
    }
})