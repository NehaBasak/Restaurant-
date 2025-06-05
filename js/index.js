const navRight = document.querySelector(".nav-right");
console.log(navRight);
const list = document.querySelector(".dash");
console.log(list);
list.addEventListener("click", ()=>{
    console.log(navRight.classList);
    navRight.classList.toggle("active");
});

