const inputbox = document.getElementById("input-box");
const tasklist = document.getElementById("tasklist");

function addtask() {
    if (inputbox.value === '') {
        alert("Please Enter Any Task");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        tasklist.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);

    }
    inputbox.value = ""
    save();
}
tasklist.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    save();

})

function save() {
    localStorage.setItem("data", tasklist.innerHTML);
}
function showdata() {
    tasklist.innerHTML = localStorage.getItem("data");
}
showdata()
