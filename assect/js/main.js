
// Scroll top
function scrollTopBack(){
    let scrollTopBtn = document.getElementById("sceollUp");
    window.onscroll = function(){
        var scroll = document.documentElement.scrollTop;
        if(scroll >= 250){
            scrollTopBtn.classList.add('scrollActive');
        }else{
            scrollTopBtn.classList.remove('scrollActive');
        }
    };
};
scrollTopBack()




// menu off

let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');

navbar.forEach(function(a){
    a.addEventListener('click', function(){
        navCollapse.classList.remove("show");
    })
})