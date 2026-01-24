const courses = [
    {
        name : "Complete react js course",
        price: "₹999"
    },
    {
        name : "Complete Angular js course",
        price: "₹1499"
    },
    {
        name : "Complete MERN course",
        price: "₹1999"
    },
    {
        name : "Complete C++ course",
        price: "₹199"
    },
    {
        name : "Complete Python course",
        price: "₹299"
    },

]

/* <li class = "course">
    <span class="span"></span>
</li> */

function generateList(){
    const ul = document.querySelector("#courseList");
    ul.innerHTML="";

    courses.forEach(course =>{

        const li = document.createElement("li")
        li.classList.add("course")

        const name = document.createTextNode(course.name)
        li.appendChild(name)

        const span = document.createElement("span")
        span.classList.add("price")

        const price = document.createTextNode(course.price)
        span.appendChild(price)

        li.appendChild(span)
        ul.appendChild(li)

    });
}

window.addEventListener("load",generateList)

const button = document.querySelector("#sortBtn");
button.addEventListener("click", () => {
    courses.sort((a, b) => {
        return parseInt(a.price.replace("₹", "")) -
               parseInt(b.price.replace("₹", ""));
    });
    generateList();
});