const skills = document.getElementById("sbtn");
const project = document.getElementById("pbtn");
const about = document.getElementById("abtn");
const resume = document.getElementById("rbtn");

const close = document.getElementById("close");
const close1 = document.getElementById("close1");
const close2 = document.getElementById("close2");
const close3 = document.getElementById("close3");

skills.addEventListener("click", ()=>{
    sbox.classList.add("show");
})

about.addEventListener("click", ()=>{
    abox.classList.add("show");
})

project.addEventListener("click", ()=>{
    pbox.classList.add("show");
})

resume.addEventListener("click", ()=>{
    rbox.classList.add("show");
})

close.addEventListener("click", ()=>{
    sbox.classList.remove("show");
})

close1.addEventListener("click", ()=>{
    abox.classList.remove("show");
})

close2.addEventListener("click", ()=>{
    pbox.classList.remove("show");
})

close3.addEventListener("click", ()=>{
    rbox.classList.remove("show");
})