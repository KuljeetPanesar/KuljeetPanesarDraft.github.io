const bar = document.querySelector(".fa-bars")
const navigationBar = document.querySelector(".navigationBar")

bar.addEventListener("click", ()=> {
    navigationBar.classList.toggle("showNavigationBar")
})