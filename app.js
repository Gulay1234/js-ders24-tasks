function a(){
    let counter = 0;
    let ask1 = prompt("Bu isareleme dili vasitesi ile web sehifemizin struktrunu qururuq:");
    if (ask1.toUpperCase() ==="HTML") {
       counter++
    }
    
    let ask2 = prompt("Bu isareleme dili vasitesi ile web sehifemizin dizaynini qururuq:")
    if (ask2.toUpperCase() === "CSS") {
        counter++
    }

    let ask3 = prompt("Bu isareleme dili vasitesi ile web sehifemizin funksionalligini qururuq:")
    if (ask3.toUpperCase() === "JS") {
        counter++
    }

    let p = document.querySelector("p")
    let div = document.querySelector("div")
    if (counter===0) {
        p.textContent = "0"
        div.style.backgroundColor = "red";
    }
    if (counter===1) {
        p.textContent = "1"
        div.style.backgroundColor = "yellow";
    }
    if (counter===2) {
        p.textContent = "2"
        div.style.backgroundColor = "blue";
    }
    if (counter===3) {
        p.textContent = "3"
        div.style.backgroundColor = "green";
    }
}