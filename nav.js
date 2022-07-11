const navElement1 = document.querySelector("#nav-element1")
const navElement2 = document.querySelector("#nav-element2")
const navElement3 = document.querySelector("#nav-element3")

const navDesc1 = document.querySelector("#nav-element-description1")
const navDesc2 = document.querySelector("#nav-element-description2")
const navDesc3 = document.querySelector("#nav-element-description3")


navElement1.addEventListener("mouseover", function () { mouseOver(navDesc1)})
navElement2.addEventListener("mouseover", function () { mouseOver(navDesc2)})
navElement3.addEventListener("mouseover", function () { mouseOver(navDesc3)})

navElement1.addEventListener("mouseout", function () { mouseOut(navDesc1)})
navElement2.addEventListener("mouseout", function () { mouseOut(navDesc2)})
navElement3.addEventListener("mouseout", function () { mouseOut(navDesc3)})


navElement1.addEventListener("click", goToProfile)
navElement2.addEventListener("click", goToPortfolio)
navElement3.addEventListener("click", goToCV)


function mouseOver(target)
{
    target.style.top="70px"
    target.style.transition="all 0.3s"
}
function mouseOut(target)
{
    target.style.top="-70px"
    target.style.transition="all 0.3s"
}

function goToProfile() {
    alert("PArtie profile non créée")
    // window.location.href = "./.html"
}
function goToPortfolio() {
    window.location.href = "./portfolio.html"
}
function goToCV() {
   window.open("./CV.pdf", "_blank")
}