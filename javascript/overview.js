
console.log(window.innerWidth + " " + window.innerHeight)

if(window.innerWidth/window.innerHeight < 1){
    let overview = document.querySelector(".overview")
    overview.style.display = "block"
    let nav = document.querySelector(".currentsite")
    nav.style.paddingLeft = "69px"
}