document.getElementById("navbar-open").addEventListener("click", function(){
    let open_btn = document.getElementById("navbar-open");
    open_btn.style.display = "none";
    let close_btn = document.getElementById("navbar-close");
    close_btn.style.display = "block";  
});
document.getElementById("navbar-close").addEventListener("click", function(){
    let close_btn = document.getElementById("navbar-close");
    close_btn.style.display = "none";
    let open_btn = document.getElementById("navbar-open");
    open_btn.style.display = "block";    
});